import React, { useState, useMemo, useEffect, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';
import { Check } from 'lucide-react';
import { buildThumbUrl, useCdnMapVersion, ThumbnailTarget } from '../../../utils/thumbnails';
import { IconImageOff, IconSlashShirt } from './GustaIcons';

interface ThumbnailGridProps {
  target: ThumbnailTarget;
  min: number;
  max: number;
  selected: number;
  blacklisted?: number[];
  onSelect: (value: number) => void;
}

const GridScrollBox = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  max-height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  padding-right: 4px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 3.5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(14, 15, 20, 0.6);
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #F5D77F 0%, #E5C058 60%, #996515 100%);
    border-radius: 9999px;
    box-shadow: 0 0 6px rgba(229, 192, 88, 0.4);
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(6px, 0.9vh, 9px);
  padding: 3px 1px;
  box-sizing: border-box;
`;

const Tile = styled.button<{ $selected: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: clamp(95px, 13vh, 125px);
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: #14151B;
  border: 1.5px solid ${({ $selected }) => ($selected ? '#E5C058' : 'rgba(229, 192, 88, 0.22)')};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  box-shadow: ${({ $selected }) =>
    $selected
      ? '0 0 16px rgba(229, 192, 88, 0.45), inset 0 0 10px rgba(229, 192, 88, 0.2)'
      : '0 4px 12px rgba(0, 0, 0, 0.6)'};

  &:hover {
    border-color: #F5D77F;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.35);

    img {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const TileInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 9px;
    transition: transform 0.25s ease;
  }
`;

const DarkImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%);
  pointer-events: none;
  z-index: 1;
`;

const Badge = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  min-width: 22px;
  height: 18px;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px solid rgba(229, 192, 88, 0.5);
  background-color: rgba(10, 11, 15, 0.82);
  color: #ffffff;
  font-size: 9.5px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
  pointer-events: none;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
`;

const SelectedCheckBadge = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, #f5d77f 0%, #e5c058 100%);
  border: 1.5px solid #ffffff;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
  box-shadow: 0 0 10px rgba(229, 192, 88, 0.8);
`;

const RetirarCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

const RetirarIconCircle = styled.div`
  width: clamp(34px, 4.5vh, 42px);
  height: clamp(34px, 4.5vh, 42px);
  border-radius: 50%;
  background: rgba(22, 24, 32, 0.85);
  border: 1.5px solid rgba(229, 192, 88, 0.4);
  color: #E5C058;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(18px, 2.4vh, 22px);
`;

const RemoveLabel = styled.span`
  color: #ffffff;
  font-size: clamp(9.5px, 1.3vh, 11px);
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
`;

const Placeholder = styled.div`
  color: rgba(255, 255, 255, 0.35);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface ThumbnailTileProps {
  target: ThumbnailTarget;
  value: number;
  selected: boolean;
  onSelect: (value: number) => void;
}

const ThumbnailTile = memo(
  ({ target, value, selected, onSelect }: ThumbnailTileProps) => {
    const [broken, setBroken] = useState(false);
    const cdnMapVersion = useCdnMapVersion();
    const url = useMemo(
      () => buildThumbUrl(target.gender, target.kind, target.id, value),
      [target.gender, target.kind, target.id, value, cdnMapVersion],
    );

    useEffect(() => {
      setBroken(false);
    }, [url]);

    const handleClick = useCallback(() => {
      onSelect(value);
    }, [onSelect, value]);

    if (value === -1) {
      return (
        <Tile
          type="button"
          $selected={selected}
          data-value={-1}
          data-selected={selected ? 'true' : undefined}
          onClick={handleClick}
          title="Retirar Peça"
        >
          <Badge>--</Badge>
          <RetirarCenterBox>
            <RetirarIconCircle>
              <IconSlashShirt />
            </RetirarIconCircle>
            <RemoveLabel>RETIRAR</RemoveLabel>
          </RetirarCenterBox>
          {selected && (
            <SelectedCheckBadge>
              <Check size={12} strokeWidth={3.5} />
            </SelectedCheckBadge>
          )}
        </Tile>
      );
    }

    const formattedId = String(value).padStart(3, '0');

    return (
      <Tile
        type="button"
        $selected={selected}
        data-value={value}
        data-selected={selected ? 'true' : undefined}
        onClick={handleClick}
        title={`Peça #${value}`}
      >
        {broken ? (
          <Placeholder>
            <IconImageOff />
          </Placeholder>
        ) : (
          <TileInner>
            <img
              src={url}
              loading="lazy"
              decoding="async"
              alt={`#${value}`}
              onError={() => setBroken(true)}
            />
            <DarkImageOverlay />
          </TileInner>
        )}
        <Badge>{formattedId}</Badge>
        {selected && (
          <SelectedCheckBadge>
            <Check size={12} strokeWidth={3.5} />
          </SelectedCheckBadge>
        )}
      </Tile>
    );
  },
  (prev, next) =>
    prev.value === next.value &&
    prev.selected === next.selected &&
    prev.target.kind === next.target.kind &&
    prev.target.id === next.target.id &&
    prev.target.gender === next.target.gender,
);

ThumbnailTile.displayName = 'ThumbnailTile';

const BATCH_SIZE = 30; // 10 rows of 3 columns

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
    if (min <= 0) {
      out.push(-1); // "Retirar" tile
    }
    for (let i = Math.max(0, min); i <= max; i++) {
      if (!blocked.has(i)) out.push(i);
    }
    return out;
  }, [min, max, blacklisted]);

  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const valuesRef = useRef(values);
  valuesRef.current = values;

  const selectedRef = useRef(selected);
  selectedRef.current = selected;

  const visibleCountRef = useRef(visibleCount);
  visibleCountRef.current = visibleCount;

  const handleSelect = useCallback((value: number) => {
    onSelectRef.current(value);
  }, []);

  // Reset batch count and scroll to top on category change, or focus selected if available
  useEffect(() => {
    const targetIdx = values.indexOf(selected);
    if (targetIdx !== -1 && targetIdx >= BATCH_SIZE) {
      setVisibleCount(Math.min(values.length, targetIdx + 6));
    } else {
      setVisibleCount(BATCH_SIZE);
    }

    if (scrollBoxRef.current) {
      if (targetIdx > 0) {
        setTimeout(() => {
          const tile = scrollBoxRef.current?.querySelector<HTMLElement>(`[data-value="${selected}"]`);
          if (tile) {
            tile.scrollIntoView({ block: 'nearest', behavior: 'auto' });
          }
        }, 60);
      } else {
        scrollBoxRef.current.scrollTop = 0;
      }
    }
  }, [target.kind, target.id, target.gender]);

  // Infinite scroll loader
  const handleScroll = useCallback(() => {
    const el = scrollBoxRef.current;
    if (!el) return;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 240) {
      setVisibleCount(prev => Math.min(prev + BATCH_SIZE, values.length));
    }
  }, [values.length]);

  // Arrow keys navigation for 3-column clothing / hair grid:
  // ArrowUp: go up 1 row (-3)
  // ArrowDown: go down 1 row (+3)
  // ArrowLeft: go back 1 item (-1)
  // ArrowRight: advance 1 item (+1)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in any input or textarea (search, ID, etc.)
      const targetEl = e.target as HTMLElement | null;
      const tag = targetEl?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || targetEl?.isContentEditable) {
        return;
      }

      const key = e.key;
      if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
        return;
      }

      const curValues = valuesRef.current;
      if (!curValues || curValues.length === 0) return;

      const curSelected = selectedRef.current;
      let currentIndex = curValues.indexOf(curSelected);
      if (currentIndex === -1) {
        currentIndex = 0;
      }

      let nextIndex = currentIndex;

      if (key === 'ArrowLeft') {
        if (currentIndex <= 0) return;
        nextIndex = currentIndex - 1;
      } else if (key === 'ArrowRight') {
        if (currentIndex >= curValues.length - 1) return;
        nextIndex = currentIndex + 1;
      } else if (key === 'ArrowUp') {
        if (currentIndex - 3 < 0) return;
        nextIndex = currentIndex - 3;
      } else if (key === 'ArrowDown') {
        if (currentIndex + 3 >= curValues.length) {
          // If jumping down +3 exceeds length, allow jumping to the last item if not already on the last row
          const lastRowStartIndex = Math.floor((curValues.length - 1) / 3) * 3;
          if (currentIndex < lastRowStartIndex) {
            nextIndex = curValues.length - 1;
          } else {
            return;
          }
        } else {
          nextIndex = currentIndex + 3;
        }
      }

      if (nextIndex === currentIndex) return;

      // Prevent default page scrolling
      e.preventDefault();

      // Ensure visibleCount covers the newly selected tile
      if (nextIndex >= visibleCountRef.current) {
        const newCount = Math.min(curValues.length, Math.max(visibleCountRef.current + BATCH_SIZE, nextIndex + 6));
        setVisibleCount(newCount);
      }

      const nextVal = curValues[nextIndex];
      handleSelect(nextVal);

      // Scroll container to keep the selected tile in view
      setTimeout(() => {
        if (scrollBoxRef.current) {
          const tile = scrollBoxRef.current.querySelector<HTMLElement>(`[data-value="${nextVal}"]`);
          if (tile) {
            tile.scrollIntoView({ block: 'nearest', behavior: 'auto' });
          }
        }
      }, 16);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelect]);

  const visibleValues = useMemo(
    () => values.slice(0, visibleCount),
    [values, visibleCount],
  );

  return (
    <GridScrollBox ref={scrollBoxRef} onScroll={handleScroll}>
      <GridWrapper>
        {visibleValues.map(v => (
          <ThumbnailTile
            key={v}
            target={target}
            value={v}
            selected={v === selected}
            onSelect={handleSelect}
          />
        ))}
      </GridWrapper>
    </GridScrollBox>
  );
};

export default ThumbnailGrid;
