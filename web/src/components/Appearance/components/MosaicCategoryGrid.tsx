import React from 'react';
import styled from 'styled-components';

// Category Images
import imgJaquetas from '../../../assets/categories/jaquetas.png';
import imgCamisas from '../../../assets/categories/camisas.png';
import imgCalcas from '../../../assets/categories/calcas.png';
import imgAcessorios from '../../../assets/categories/acessorios.png';
import imgMaos from '../../../assets/categories/maos.png';
import imgChapeus from '../../../assets/categories/chapeus.png';
import imgOculos from '../../../assets/categories/oculos.png';
import imgSapatos from '../../../assets/categories/sapatos.png';

import imgMochilas from '../../../assets/categories/mochilas.png';
import imgBrincos from '../../../assets/categories/brincos.png';
import imgAdesivos from '../../../assets/categories/adesivos.png';
import imgColetes from '../../../assets/categories/coletes.png';
import imgMascaras from '../../../assets/categories/mascaras.png';
import imgPulseiras from '../../../assets/categories/pulseiras.png';
import imgRelogios from '../../../assets/categories/relogios.png';

// Icons
import {
  IconJackets,
  IconShirt,
  IconPants,
  IconNecklace,
  IconHands,
  IconHats,
  IconGlasses,
  IconShoes,
  IconBag,
  IconMask,
  IconEarrings,
  IconBadge,
  IconArmor,
  IconBracelet,
  IconWatch,
} from './GustaIcons';

interface MosaicCategoryGridProps {
  page: 1 | 2;
  onSelectCategory: (categoryId: string) => void;
  activeCategoryId?: string;
}

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  user-select: none;
  box-sizing: border-box;
`;

const CardRow = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const CategoryCard = styled.button<{
  $height?: string;
  $flex?: number | string;
  $active?: boolean;
}>`
  position: relative;
  height: ${({ $height }) => $height || '92px'};
  flex: ${({ $flex }) => ($flex !== undefined ? $flex : 1)};
  min-width: 0;
  background: #121318;
  border: 1.5px solid ${({ $active }) => ($active ? '#E5C058' : 'rgba(229, 192, 88, 0.38)')};
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 18px rgba(229, 192, 88, 0.5), inset 0 0 10px rgba(229, 192, 88, 0.2)'
      : '0 4px 14px rgba(0, 0, 0, 0.6)'};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  outline: none;

  &:hover {
    border-color: #F5D77F;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 18px rgba(229, 192, 88, 0.45);

    img {
      transform: scale(1.04);
      filter: brightness(1.02);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
  filter: brightness(0.9);
`;

const CardGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.08) 0%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(10, 11, 15, 0.92) 100%
  );
  pointer-events: none;
  z-index: 1;
`;

const BadgeGroup = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  pointer-events: none;
`;

const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 14px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.95));

  svg {
    width: 15px;
    height: 15px;
  }
`;

const BadgeTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #E5C058;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.85);
  }
`;

const BadgeLabel = styled.span`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.95);
  line-height: 1;
`;

export const MosaicCategoryGrid: React.FC<MosaicCategoryGridProps> = ({
  page,
  onSelectCategory,
  activeCategoryId,
}) => {
  if (page === 1) {
    return (
      <GridContainer>
        {/* Row 1: JAQUETAS | CAMISAS */}
        <CardRow>
          <CategoryCard
            $height="132px"
            $active={activeCategoryId === 'comp_11'}
            onClick={() => onSelectCategory('comp_11')}
          >
            <CardImage src={imgJaquetas} alt="Jaquetas" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconJackets />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>JAQUETAS</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>

          <CategoryCard
            $height="132px"
            $active={activeCategoryId === 'comp_8'}
            onClick={() => onSelectCategory('comp_8')}
          >
            <CardImage src={imgCamisas} alt="Camisas" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconShirt />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>CAMISAS</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>
        </CardRow>

        {/* Row 2 & 3: CALÇAS (Left Tall) + ACESSÓRIOS (Top Right) + MÃOS / CHAPÉUS / ÓCULOS (Bottom Right) */}
        <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
          {/* Left Column: CALÇAS */}
          <CategoryCard
            $height="228px"
            $flex="0.95"
            $active={activeCategoryId === 'comp_4'}
            onClick={() => onSelectCategory('comp_4')}
          >
            <CardImage src={imgCalcas} alt="Calças" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconPants />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>CALÇAS</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>

          {/* Right Column: ACESSÓRIOS (top) + MÃOS / CHAPÉUS / ÓCULOS (bottom) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '2.05', minWidth: 0 }}>
            <CategoryCard
              $height="110px"
              $flex="none"
              $active={activeCategoryId === 'comp_7'}
              onClick={() => onSelectCategory('comp_7')}
            >
              <CardImage src={imgAcessorios} alt="Acessórios" />
              <CardGradientOverlay />
              <BadgeGroup>
                <BadgeIcon>
                  <IconNecklace />
                </BadgeIcon>
                <BadgeTextGroup>
                  <BadgeLabel>ACESSÓRIOS</BadgeLabel>
                </BadgeTextGroup>
              </BadgeGroup>
            </CategoryCard>

            <CardRow>
              <CategoryCard
                $height="110px"
                $active={activeCategoryId === 'comp_3'}
                onClick={() => onSelectCategory('comp_3')}
              >
                <CardImage src={imgMaos} alt="Mãos" />
                <CardGradientOverlay />
                <BadgeGroup>
                  <BadgeIcon>
                    <IconHands />
                  </BadgeIcon>
                  <BadgeTextGroup>
                    <BadgeLabel style={{ fontSize: '9px' }}>MÃOS</BadgeLabel>
                  </BadgeTextGroup>
                </BadgeGroup>
              </CategoryCard>

              <CategoryCard
                $height="110px"
                $active={activeCategoryId === 'prop_0'}
                onClick={() => onSelectCategory('prop_0')}
              >
                <CardImage src={imgChapeus} alt="Chapéus" />
                <CardGradientOverlay />
                <BadgeGroup>
                  <BadgeIcon>
                    <IconHats />
                  </BadgeIcon>
                  <BadgeTextGroup>
                    <BadgeLabel style={{ fontSize: '9px' }}>CHAPÉUS</BadgeLabel>
                  </BadgeTextGroup>
                </BadgeGroup>
              </CategoryCard>

              <CategoryCard
                $height="110px"
                $active={activeCategoryId === 'prop_1'}
                onClick={() => onSelectCategory('prop_1')}
              >
                <CardImage src={imgOculos} alt="Óculos" />
                <CardGradientOverlay />
                <BadgeGroup>
                  <BadgeIcon>
                    <IconGlasses />
                  </BadgeIcon>
                  <BadgeTextGroup>
                    <BadgeLabel style={{ fontSize: '9px' }}>ÓCULOS</BadgeLabel>
                  </BadgeTextGroup>
                </BadgeGroup>
              </CategoryCard>
            </CardRow>
          </div>
        </div>

        {/* Row 4: SAPATOS (Full Width Wide Card) */}
        <CategoryCard
          $height="130px"
          $flex="none"
          $active={activeCategoryId === 'comp_6'}
          onClick={() => onSelectCategory('comp_6')}
        >
          <CardImage src={imgSapatos} alt="Sapatos" />
          <CardGradientOverlay />
          <BadgeGroup>
            <BadgeIcon>
              <IconShoes />
            </BadgeIcon>
            <BadgeTextGroup>
              <BadgeLabel>SAPATOS</BadgeLabel>
            </BadgeTextGroup>
          </BadgeGroup>
        </CategoryCard>
      </GridContainer>
    );
  }

  // Page 2
  return (
    <GridContainer>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', width: '100%' }}>
        {/* Left Column: MOCHILAS (top) + MÁSCARAS (bottom) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '0.95', minWidth: 0 }}>
          <CategoryCard
            $height="249px"
            $flex="none"
            $active={activeCategoryId === 'comp_5'}
            onClick={() => onSelectCategory('comp_5')}
          >
            <CardImage src={imgMochilas} alt="Mochilas" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconBag />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>MOCHILAS</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>

          <CategoryCard
            $height="249px"
            $flex="none"
            $active={activeCategoryId === 'comp_1'}
            onClick={() => onSelectCategory('comp_1')}
          >
            <CardImage src={imgMascaras} alt="Máscaras" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconMask />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>MÁSCARAS</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>
        </div>

        {/* Right Column: BRINCOS / ADESIVOS (top) + COLETES (mid) + PULSEIRAS / RELÓGIOS (bottom) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1.5', minWidth: 0 }}>
          {/* Top Row: BRINCOS | ADESIVOS */}
          <CardRow>
            <CategoryCard
              $height="145px"
              $active={activeCategoryId === 'prop_2'}
              onClick={() => onSelectCategory('prop_2')}
            >
              <CardImage src={imgBrincos} alt="Brincos" />
              <CardGradientOverlay />
              <BadgeGroup>
                <BadgeIcon>
                  <IconEarrings />
                </BadgeIcon>
                <BadgeTextGroup>
                  <BadgeLabel style={{ fontSize: '9px' }}>BRINCOS</BadgeLabel>
                </BadgeTextGroup>
              </BadgeGroup>
            </CategoryCard>

            <CategoryCard
              $height="145px"
              $active={activeCategoryId === 'comp_10'}
              onClick={() => onSelectCategory('comp_10')}
            >
              <CardImage src={imgAdesivos} alt="Adesivos" />
              <CardGradientOverlay />
              <BadgeGroup>
                <BadgeIcon>
                  <IconBadge />
                </BadgeIcon>
                <BadgeTextGroup>
                  <BadgeLabel style={{ fontSize: '9px' }}>ADESIVOS</BadgeLabel>
                </BadgeTextGroup>
              </BadgeGroup>
            </CategoryCard>
          </CardRow>

          {/* Middle: COLETES */}
          <CategoryCard
            $height="198px"
            $flex="none"
            $active={activeCategoryId === 'comp_9'}
            onClick={() => onSelectCategory('comp_9')}
          >
            <CardImage src={imgColetes} alt="Coletes" />
            <CardGradientOverlay />
            <BadgeGroup>
              <BadgeIcon>
                <IconArmor />
              </BadgeIcon>
              <BadgeTextGroup>
                <BadgeLabel>COLETES</BadgeLabel>
              </BadgeTextGroup>
            </BadgeGroup>
          </CategoryCard>

          {/* Bottom Row: PULSEIRAS | RELÓGIOS */}
          <CardRow>
            <CategoryCard
              $height="147px"
              $active={activeCategoryId === 'prop_7'}
              onClick={() => onSelectCategory('prop_7')}
            >
              <CardImage src={imgPulseiras} alt="Pulseiras" />
              <CardGradientOverlay />
              <BadgeGroup>
                <BadgeIcon>
                  <IconBracelet />
                </BadgeIcon>
                <BadgeTextGroup>
                  <BadgeLabel style={{ fontSize: '9px' }}>PULSEIRAS</BadgeLabel>
                </BadgeTextGroup>
              </BadgeGroup>
            </CategoryCard>

            <CategoryCard
              $height="147px"
              $active={activeCategoryId === 'prop_6'}
              onClick={() => onSelectCategory('prop_6')}
            >
              <CardImage src={imgRelogios} alt="Relógios" />
              <CardGradientOverlay />
              <BadgeGroup>
                <BadgeIcon>
                  <IconWatch />
                </BadgeIcon>
                <BadgeTextGroup>
                  <BadgeLabel style={{ fontSize: '9px' }}>RELÓGIOS</BadgeLabel>
                </BadgeTextGroup>
              </BadgeGroup>
            </CategoryCard>
          </CardRow>
        </div>
      </div>
    </GridContainer>
  );
};

export default MosaicCategoryGrid;
