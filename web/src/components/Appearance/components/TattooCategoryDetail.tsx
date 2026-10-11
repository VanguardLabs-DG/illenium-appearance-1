import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { ChevronLeft, Search, Check, Trash2, Sliders, Eye } from 'lucide-react';
import { TattooCategoryKey, TATTOO_CATEGORIES } from './TattooMosaicCategoryGrid';
import { Tattoo, TattoosSettings, TattooList } from '../interfaces';

interface TattooCategoryDetailProps {
  category: TattooCategoryKey;
  onBack: () => void;
  data: TattooList;
  storedData: TattooList;
  settings: TattoosSettings;
  isMale: boolean;
  handleApplyTattoo: (value: Tattoo, opacity: number) => void;
  handlePreviewTattoo: (value: Tattoo, opacity: number) => void;
  handleDeleteTattoo: (value: Tattoo) => void;
  handleClearTattoos: (zone?: string) => void;
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
`;

const TopNavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(229, 192, 88, 0.2);
`;

const BackBtn = styled.button`
  background: rgba(22, 25, 34, 0.85);
  border: 1px solid rgba(229, 192, 88, 0.35);
  border-radius: 9999px;
  color: #E5C058;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: rgba(229, 192, 88, 0.2);
    border-color: #E5C058;
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const HeaderTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const CategoryHeading = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
`;

const CategoryCount = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #E5C058;
`;

const SubZoneTabsRow = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  margin-top: 2px;
`;

const SubZoneTab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 6px 8px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  ${({ $active }) =>
    $active
      ? `
    background: linear-gradient(135deg, rgba(229, 192, 88, 0.25), rgba(180, 140, 40, 0.35));
    border: 1.5px solid #E5C058;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(229, 192, 88, 0.3);
  `
      : `
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      background: rgba(26, 30, 40, 0.95);
      border-color: rgba(229, 192, 88, 0.3);
      color: #E5C058;
    }
  `}
`;

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 18, 24, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.25);
  border-radius: 8px;
  padding: 6px 10px;
  width: 100%;
  box-sizing: border-box;

  svg {
    color: rgba(229, 192, 88, 0.7);
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 11.5px;
    font-weight: 600;

    &::placeholder {
      color: rgba(255, 255, 255, 0.35);
      font-size: 11px;
    }
  }
`;

const OpacityControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(16, 18, 24, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
`;

const OpacityLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);

  span.val {
    color: #E5C058;
    font-weight: 800;
  }
`;

const Slider = styled.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #E5C058;
    border: 2px solid #ffffff;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.6);
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }
`;

const TattooListScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 4px;
  max-height: 250px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.35);
    border-radius: 3px;
  }
`;

const TattooItemCard = styled.div<{ $isApplied: boolean; $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(32, 38, 52, 0.95)' : 'rgba(18, 20, 26, 0.85)'};
  border: 1px solid
    ${({ $isSelected, $isApplied }) =>
      $isApplied
        ? '#22c55e'
        : $isSelected
        ? '#E5C058'
        : 'rgba(255, 255, 255, 0.08)'};
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? '0 0 10px rgba(229, 192, 88, 0.25)' : 'none'};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(30, 34, 46, 0.95);
    border-color: ${({ $isApplied }) => ($isApplied ? '#4ade80' : '#E5C058')};
    transform: translateX(2px);
  }
`;

const TattooInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 65%;
`;

const TattooLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TattooCollectionTag = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 8.5px;
  font-weight: 600;
  color: rgba(229, 192, 88, 0.75);
  text-transform: uppercase;
  margin-top: 1px;
`;

const TattooActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AppliedBadge = styled.span`
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #22c55e;
  color: #4ade80;
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const ActionIconButton = styled.button<{ $variant?: 'delete' | 'apply' | 'preview' }>`
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  outline: none;
  transition: all 0.15s ease;

  ${({ $variant }) =>
    $variant === 'delete'
      ? `
    background: rgba(239, 68, 68, 0.2);
    border: 1px solid #ef4444;
    color: #fca5a5;
    &:hover {
      background: #ef4444;
      color: #ffffff;
    }
  `
      : $variant === 'apply'
      ? `
    background: rgba(229, 192, 88, 0.2);
    border: 1px solid #E5C058;
    color: #ffffff;
    &:hover {
      background: #E5C058;
      color: #111111;
      box-shadow: 0 0 10px rgba(229, 192, 88, 0.5);
    }
  `
      : `
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
    }
  `}
`;

export const TattooCategoryDetail: React.FC<TattooCategoryDetailProps> = ({
  category,
  onBack,
  data,
  settings,
  isMale,
  handleApplyTattoo,
  handlePreviewTattoo,
  handleDeleteTattoo,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubZone, setSelectedSubZone] = useState<string>(() => {
    if (category === 'ZONE_ARMS') return 'ZONE_LEFT_ARM';
    if (category === 'ZONE_LEGS') return 'ZONE_LEFT_LEG';
    return category;
  });
  const [opacity, setOpacity] = useState(1.0);
  const [selectedTattooName, setSelectedTattooName] = useState<string | null>(null);

  const categoryMeta = TATTOO_CATEGORIES.find(c => c.id === category);

  // Determine active zone for data retrieval
  const activeZoneKey = useMemo(() => {
    if (category === 'ZONE_ARMS') return selectedSubZone;
    if (category === 'ZONE_LEGS') return selectedSubZone;
    return category;
  }, [category, selectedSubZone]);

  // Available items in the active zone
  const zoneItems = useMemo(() => {
    const rawItems = settings.items?.[activeZoneKey] || [];
    return rawItems.filter(item => {
      if (isMale && item.hashMale !== '') return true;
      if (!isMale && item.hashFemale !== '') return true;
      return false;
    });
  }, [settings.items, activeZoneKey, isMale]);

  // Filtered by search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return zoneItems;
    const q = searchQuery.toLowerCase();
    return zoneItems.filter(
      item =>
        item.label.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        (item.collection && item.collection.toLowerCase().includes(q))
    );
  }, [zoneItems, searchQuery]);

  // Check which tattoos are applied in this zone
  const appliedTattoosInZone = useMemo(() => {
    return data[activeZoneKey] || [];
  }, [data, activeZoneKey]);

  const isApplied = useCallback(
    (tattooName: string) => {
      return appliedTattoosInZone.some(t => t.name === tattooName);
    },
    [appliedTattoosInZone]
  );

  const handleSelectAndPreview = (item: Tattoo) => {
    setSelectedTattooName(item.name);
    handlePreviewTattoo(item, opacity);
  };

  const handleToggleApply = (item: Tattoo) => {
    if (isApplied(item.name)) {
      handleDeleteTattoo(item);
    } else {
      handleApplyTattoo(item, opacity);
    }
  };

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setOpacity(val);
    if (selectedTattooName) {
      const activeItem = zoneItems.find(t => t.name === selectedTattooName);
      if (activeItem) {
        handlePreviewTattoo(activeItem, val);
      }
    }
  };

  return (
    <DetailContainer>
      {/* Top Navigation Row */}
      <TopNavRow>
        <BackBtn onClick={onBack}>
          <ChevronLeft size={14} /> CATEGORIAS
        </BackBtn>
        <HeaderTitleGroup>
          <CategoryHeading>{categoryMeta?.title || category}</CategoryHeading>
          <CategoryCount>{zoneItems.length} opções disponíveis</CategoryCount>
        </HeaderTitleGroup>
      </TopNavRow>

      {/* Sub-Zone Switchers for Arms & Legs */}
      {category === 'ZONE_ARMS' && (
        <SubZoneTabsRow>
          <SubZoneTab
            $active={selectedSubZone === 'ZONE_LEFT_ARM'}
            onClick={() => setSelectedSubZone('ZONE_LEFT_ARM')}
          >
            Braço Esquerdo
          </SubZoneTab>
          <SubZoneTab
            $active={selectedSubZone === 'ZONE_RIGHT_ARM'}
            onClick={() => setSelectedSubZone('ZONE_RIGHT_ARM')}
          >
            Braço Direito
          </SubZoneTab>
        </SubZoneTabsRow>
      )}

      {category === 'ZONE_LEGS' && (
        <SubZoneTabsRow>
          <SubZoneTab
            $active={selectedSubZone === 'ZONE_LEFT_LEG'}
            onClick={() => setSelectedSubZone('ZONE_LEFT_LEG')}
          >
            Perna Esquerda
          </SubZoneTab>
          <SubZoneTab
            $active={selectedSubZone === 'ZONE_RIGHT_LEG'}
            onClick={() => setSelectedSubZone('ZONE_RIGHT_LEG')}
          >
            Perna Direita
          </SubZoneTab>
        </SubZoneTabsRow>
      )}

      {/* Search Input Filter */}
      <SearchBoxContainer>
        <Search size={14} />
        <input
          type="text"
          placeholder="Buscar tatuagem por nome..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </SearchBoxContainer>

      {/* Opacity Adjustment Slider */}
      <OpacityControlContainer>
        <OpacityLabelRow>
          <span>Intensidade / Opacidade</span>
          <span className="val">{Math.round(opacity * 100)}%</span>
        </OpacityLabelRow>
        <Slider
          type="range"
          min={0.1}
          max={1.0}
          step={0.05}
          value={opacity}
          onChange={handleOpacityChange}
        />
      </OpacityControlContainer>

      {/* Tattoo Items Scrollable List */}
      <TattooListScroll>
        {filteredItems.length === 0 ? (
          <div
            style={{
              padding: '24px',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '11px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Nenhuma tatuagem encontrada.
          </div>
        ) : (
          filteredItems.map(item => {
            const applied = isApplied(item.name);
            const selected = selectedTattooName === item.name;

            return (
              <TattooItemCard
                key={item.name}
                $isApplied={applied}
                $isSelected={selected}
                onClick={() => handleSelectAndPreview(item)}
              >
                <TattooInfo>
                  <TattooLabel>{item.label || item.name}</TattooLabel>
                  <TattooCollectionTag>
                    {item.collection || activeZoneKey.replace('ZONE_', '')}
                  </TattooCollectionTag>
                </TattooInfo>

                <TattooActionGroup>
                  {applied ? (
                    <>
                      <AppliedBadge>
                        <Check size={11} /> APLICADA
                      </AppliedBadge>
                      <ActionIconButton
                        $variant="delete"
                        onClick={e => {
                          e.stopPropagation();
                          handleDeleteTattoo(item);
                        }}
                        title="Remover tatuagem"
                      >
                        <Trash2 size={12} />
                      </ActionIconButton>
                    </>
                  ) : (
                    <ActionIconButton
                      $variant="apply"
                      onClick={e => {
                        e.stopPropagation();
                        handleToggleApply(item);
                      }}
                    >
                      APLICAR
                    </ActionIconButton>
                  )}
                </TattooActionGroup>
              </TattooItemCard>
            );
          })
        )}
      </TattooListScroll>
    </DetailContainer>
  );
};

export default TattooCategoryDetail;
