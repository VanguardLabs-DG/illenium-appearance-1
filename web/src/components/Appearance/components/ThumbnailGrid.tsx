import { useState, useMemo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { vp, vpClamp } from '../../../styles/scale';
import { buildThumbUrl, useCdnMapVersion, getThumbnailBatchSize, ThumbnailTarget } from '../../../utils/thumbnails';

interface ThumbnailGridProps {
  target: ThumbnailTarget;
  min: number;
  max: number;
  selected: number;
  blacklisted?: number[];
  onSelect: (value: number) => void;
}

// How many tiles ThumbnailGrid mounts per batch is controlled server-side —
// see Config.ThumbnailBatchSize in shared/config.lua. Categories like
// Jackets (588 drawables) mounting every tile at once is what was freezing
// the UI. Instead we only ever mount a window of items, and grow it as the
// user scrolls this category's own box — so the DOM/React work stays
// proportional to what's actually on screen.

// This box owns its own scrollbar (like a mini clothing rack per category).
// Scroll inside it specifically to load more of that category.
const GridScrollBox = styled.div`
  width: 100%;
  max-height: ${vpClamp(440, 320, 640)};
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: ${vp(6)};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `rgba(${theme.borderColorSoft || '55, 58, 64'}, 0.8)`};
    border-radius: ${vp(3)};
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  align-items: start;
  gap: ${vp(6)};
  padding: ${vp(4)} ${vp(2)};
`;

const Tile = styled.button<{ $selected: boolean }>`
  position: relative;
  width: 100%;
  padding: 0;
  padding-top: 100%;
  height: 0;
  cursor: pointer;
  background: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
  border: ${vp(2)} solid
    ${({ theme, $selected }) =>
      $selected
        ? `rgb(${theme.accentColor || '66, 140, 255'})`
        : `rgba(${theme.borderColorSoft || '55, 58, 64'}, 1)`};
  border-radius: ${vp(6)};
  overflow: hidden;
  transition: all 0.15s ease;
  box-shadow: ${({ theme, $selected }) =>
    $selected ? `0 0 ${vp(10)} rgba(${theme.accentColor || '66, 140, 255'}, 0.22)` : 'none'};

  &:hover {
    border-color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
  }
`;

const TileInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: transparent;
  }
`;

const Badge = styled.span`
  position: absolute;
  left: ${vp(6)};
  bottom: ${vp(6)};
  padding: ${vp(2)} ${vp(6)};
  border-radius: ${vp(4)};
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: ${vp(9)};
  font-weight: 600;
  font-family: 'Nexa-Book', sans-serif;
  pointer-events: none;
  z-index: 2;
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => `rgba(${theme.fontColor || '193, 194, 197'}, 0.65)`};
  font-size: ${vp(16)};
  font-weight: 600;
  font-family: 'Nexa-Book', sans-serif;
  pointer-events: none;
  letter-spacing: 0.02em;
`;

const ThumbnailTile = ({
  target,
  value,
  selected,
  onSelect,
}: {
  target: ThumbnailTarget;
  value: number;
  selected: boolean;
  onSelect: (value: number) => void;
}) => {
  const [broken, setBroken] = useState(false);
  const cdnMapVersion = useCdnMapVersion();
  const url = useMemo(
    () => buildThumbUrl(target.gender, target.kind, target.id, value),
    [target.gender, target.kind, target.id, value, cdnMapVersion],
  );

  useEffect(() => {
    setBroken(false);
  }, [url]);

  return (
    <Tile type="button" $selected={selected} onClick={() => onSelect(value)}>
      {broken ? (
        <Placeholder>#{value}</Placeholder>
      ) : (
        <>
          <TileInner>
            <img
              src={url}
              loading="lazy"
              alt={`#${value}`}
              onError={() => setBroken(true)}
            />
          </TileInner>
          <Badge>#{value}</Badge>
        </>
      )}
    </Tile>
  );
};

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  target,
  min,
  max,
  selected,
  blacklisted = [],
  onSelect,
}) => {
  const values = useMemo(() => {
    const out: number[] = [];
    const blocked = new Set(blacklisted.map(n => Number(n)));
    for (let i = min; i <= max; i++) {
      if (!blocked.has(i)) out.push(i);
    }
    return out;
  }, [min, max, blacklisted]);

  // Always render enough of the list to include whatever is currently
  // selected (so scrolling into a category with #200 selected doesn't hide
  // it), plus one batch of headroom for scrolling further.
  const initialCount = useMemo(() => {
    const batchSize = getThumbnailBatchSize();
    const selectedIndex = values.indexOf(selected);
    const withSelection = selectedIndex >= 0 ? selectedIndex + batchSize : batchSize;
    return Math.min(values.length, Math.max(batchSize, withSelection));
  }, [values, selected]);

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  // Reset the window whenever we're handed a different list (new category).
  useEffect(() => {
    setVisibleCount(initialCount);
    if (scrollBoxRef.current) scrollBoxRef.current.scrollTop = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.kind, target.id, target.gender, min, max]);

  const growIfNeeded = () => {
    setVisibleCount(prev => (prev < values.length ? Math.min(values.length, prev + getThumbnailBatchSize()) : prev));
  };

  const handleScroll = () => {
    const el = scrollBoxRef.current;
    if (!el) return;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 120;
    if (nearBottom) growIfNeeded();
  };

  // If the first batch doesn't fill the box tall enough to even need a
  // scrollbar, there'd be nothing for the user to scroll to trigger more —
  // top it up automatically until it either overflows or runs out.
  useEffect(() => {
    const el = scrollBoxRef.current;
    if (!el) return;
    if (visibleCount < values.length && el.scrollHeight <= el.clientHeight + 4) {
      growIfNeeded();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, values.length]);

  const visibleValues = values.slice(0, visibleCount);

  return (
    <GridScrollBox ref={scrollBoxRef} onScroll={handleScroll}>
      <GridWrapper>
        {visibleValues.map(value => (
          <ThumbnailTile
            key={value}
            target={target}
            value={value}
            selected={value === selected}
            onSelect={onSelect}
          />
        ))}
      </GridWrapper>
    </GridScrollBox>
  );
};

export default ThumbnailGrid;
