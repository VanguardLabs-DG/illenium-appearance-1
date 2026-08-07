import { useEffect, useState } from 'react';

export type ThumbGender = 'male' | 'female';
export type ThumbKind = 'component' | 'prop' | 'overlay';

export interface ThumbnailTarget {
  kind: ThumbKind;
  id: number;
  gender: ThumbGender;
}

// ─────────────────────────────────────────────────────────────────────────
// CDN manifest (optional)
//
// uz_AutoShot can upload every generated thumbnail straight to FiveManage
// instead of shipping the PNGs with this resource. When that's enabled it
// writes a tiny JSON manifest (key -> CDN url) to shots/cdn-map.json. We
// fetch that manifest once, cache it, and prefer its URLs here.
//
// If the manifest doesn't exist (feature disabled) or a given key isn't in
// it yet (upload disabled/pending/failed for that item), we transparently
// fall back to the old local NUI path — nothing breaks either way.
// ─────────────────────────────────────────────────────────────────────────

const CDN_MAP_URL = 'https://cfx-nui-uz_AutoShot/shots/cdn-map.json';

// How many thumbnails ThumbnailGrid mounts per batch. Server owners can tune
// this via Config.ThumbnailBatchSize (shared/config.lua) — lower it further
// on weaker client hardware, raise it if scrolling feels too "chunky".
let thumbnailBatchSize = 8;

export function setThumbnailBatchSize(size: number): void {
  if (typeof size === 'number' && size > 0) {
    thumbnailBatchSize = Math.floor(size);
  }
}

export function getThumbnailBatchSize(): number {
  return thumbnailBatchSize;
}

// ─────────────────────────────────────────────────────────────────────────
// Global preview mode (one switch for every category)
//
// Rendering image thumbnails for every category by default was a big part
// of what made the menu slow to open. Preview mode now starts OFF (plain
// number input, no images) and the player can flip it on/off with a single
// button — instantly applies to every category via this shared state.
// ─────────────────────────────────────────────────────────────────────────

const PREVIEW_MODE_STORAGE_KEY = 'illenium_preview_mode_v2';

function readStoredPreviewMode(): boolean {
  try {
    const raw = window.localStorage.getItem(PREVIEW_MODE_STORAGE_KEY);
    if (raw === '1') return true;
    if (raw === '0') return false;
    return true; // default: preview on until the player turns it off
  } catch {
    return true;
  }
}

let previewModeEnabled = readStoredPreviewMode();
const previewModeListeners = new Set<() => void>();

export function isPreviewModeEnabled(): boolean {
  return previewModeEnabled;
}

export function setPreviewMode(enabled: boolean): void {
  previewModeEnabled = enabled;
  try {
    window.localStorage.setItem(PREVIEW_MODE_STORAGE_KEY, enabled ? '1' : '0');
  } catch {
    // ignore (e.g. storage disabled) — the toggle still works for this session
  }
  previewModeListeners.forEach(listener => listener());
}

export function togglePreviewMode(): void {
  setPreviewMode(!previewModeEnabled);
}

/** Re-renders the calling component whenever preview mode is switched. */
export function usePreviewMode(): boolean {
  const [enabled, setEnabled] = useState(previewModeEnabled);
  useEffect(() => {
    const listener = () => setEnabled(previewModeEnabled);
    previewModeListeners.add(listener);
    return () => {
      previewModeListeners.delete(listener);
    };
  }, []);
  return enabled;
}

let cdnMap: Record<string, string> = {};
let cdnMapVersion = 0;
const cdnMapListeners = new Set<() => void>();

function notifyCdnMapListeners() {
  cdnMapVersion += 1;
  cdnMapListeners.forEach(listener => listener());
}

if (typeof fetch === 'function') {
  fetch(CDN_MAP_URL)
    .then(res => (res.ok ? res.json() : {}))
    .then(data => {
      cdnMap = data && typeof data === 'object' ? data : {};
      notifyCdnMapListeners();
    })
    .catch(() => {
      // No manifest available yet — thumbnails just use the local path below.
    });
}

/** Re-renders the calling component once the CDN manifest has (re)loaded. */
export function useCdnMapVersion(): number {
  const [version, setVersion] = useState(cdnMapVersion);
  useEffect(() => {
    const listener = () => setVersion(cdnMapVersion);
    cdnMapListeners.add(listener);
    return () => {
      cdnMapListeners.delete(listener);
    };
  }, []);
  return version;
}

function buildThumbSegment(kind: ThumbKind, id: number): string {
  return kind === 'prop' ? `prop_${id}` : kind === 'overlay' ? `overlay_${id}` : `${id}`;
}

export function buildThumbUrl(
  gender: ThumbGender,
  kind: ThumbKind,
  id: number,
  drawable: number,
): string {
  const seg = buildThumbSegment(kind, id);
  const key = `${gender}/${seg}/${drawable}`;

  const cdnUrl = cdnMap[key];
  if (cdnUrl) return cdnUrl;

  return `https://cfx-nui-uz_AutoShot/shots/${gender}/${seg}/${drawable}.png`;
}
