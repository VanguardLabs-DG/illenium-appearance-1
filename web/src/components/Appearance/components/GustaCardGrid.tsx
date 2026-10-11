import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';
import { IconImageOff } from './GustaIcons';

export interface GustaCardItem {
  id: number;
  label?: string;
  imageKey?: string;
}

interface GustaCardGridProps {
  items: GustaCardItem[];
  selectedId: number;
  onSelect: (id: number) => void;
  shop: string; // 'skinshop' | 'barbershop' | 'tattooshop'
  gender: 'male' | 'female';
  categoryKey: string; // e.g. '11', 'hair', 'beard', etc.
  allowRemove?: boolean; // Show "Retirar" (-1)
  cdnBaseUrl?: string;
}

const GridContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 0.6rem;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.4rem;
  margin: 0;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: #e6cd00;
  }
`;

const CardTile = styled.li<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? 'rgba(230, 205, 0, 0.25)' : 'rgba(0, 0, 0, 0.3)')};
  border: 1px solid ${({ $active }) => ($active ? '#E6CD00' : 'rgba(230, 205, 0, 0.2)')};
  width: 125px;
  height: 125px;
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  user-select: none;
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: 125px 125px;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'rgba(230, 205, 0, 0.35)' : 'rgba(230, 205, 0, 0.1)')};
    border-color: #e6cd00;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`;

const FallbackIconWrapper = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
`;

const BadgeId = styled.div`
  min-width: 1.7rem;
  padding: 0 0.3rem;
  height: 1.7rem;
  border-radius: 5px;
  border: 1px solid rgba(230, 205, 0, 0.5);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.55);
  position: absolute;
  top: 7px;
  right: 7px;
  font-size: 0.75rem;
  font-weight: 700;
`;

const RemoveLabel = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SingleCard = memo(
  ({
    id,
    selected,
    onSelect,
    imgUrl,
    isRemoveCard,
  }: {
    id: number;
    selected: boolean;
    onSelect: (id: number) => void;
    imgUrl?: string;
    isRemoveCard?: boolean;
  }) => {
    const [imgFailed, setImgFailed] = useState(false);

    useEffect(() => {
      setImgFailed(false);
    }, [imgUrl]);

    return (
      <CardTile $active={selected} onClick={() => onSelect(id)}>
        {isRemoveCard ? (
          <RemoveLabel>Retirar</RemoveLabel>
        ) : (
          <>
            {imgFailed || !imgUrl ? (
              <FallbackIconWrapper>
                <IconImageOff />
              </FallbackIconWrapper>
            ) : (
              <CardImage
                loading="lazy"
                decoding="async"
                src={imgUrl}
                alt={`Item ${id}`}
                onError={() => setImgFailed(true)}
              />
            )}
            <BadgeId>{id}</BadgeId>
          </>
        )}
      </CardTile>
    );
  }
);

SingleCard.displayName = 'SingleCard';

const BATCH_SIZE = 16;

const GustaCardGrid: React.FC<GustaCardGridProps> = ({
  items,
  selectedId,
  onSelect,
  shop,
  gender,
  categoryKey,
  allowRemove = true,
  cdnBaseUrl = 'https://pub-c1a252f6ec9346cc908eee23d922ae56.r2.dev',
}) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  useEffect(() => {
    setVisibleCount(Math.min(BATCH_SIZE, items.length));
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [categoryKey, gender, items.length, shop]);

  const growIfNeeded = useCallback(() => {
    setVisibleCount(prev => (prev < items.length ? Math.min(items.length, prev + BATCH_SIZE) : prev));
  }, [items.length]);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 160;
    if (nearBottom) {
      growIfNeeded();
    }
  }, [growIfNeeded]);

  const getImageUrl = useCallback(
    (item: GustaCardItem) => {
      if (item.imageKey) {
        return `${cdnBaseUrl}/tattooshop/${gender}/${item.imageKey}.jpg`;
      }
      return `${cdnBaseUrl}/${shop}/${gender}/${categoryKey}/${item.id}.jpg`;
    },
    [cdnBaseUrl, categoryKey, gender, shop]
  );

  const visibleItems = items.slice(0, visibleCount);

  return (
    <GridContainer ref={containerRef} onScroll={handleScroll}>
      {allowRemove && (
        <SingleCard
          key="remove-card"
          id={-1}
          selected={selectedId === -1}
          onSelect={onSelect}
          isRemoveCard
        />
      )}

      {visibleItems.map(item => (
        <SingleCard
          key={`card-${item.id}`}
          id={item.id}
          selected={selectedId === item.id}
          onSelect={onSelect}
          imgUrl={getImageUrl(item)}
        />
      ))}
    </GridContainer>
  );
};

export default memo(GustaCardGrid);
