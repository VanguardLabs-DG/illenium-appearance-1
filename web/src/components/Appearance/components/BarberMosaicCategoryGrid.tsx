import React from 'react';
import styled from 'styled-components';

// Images sliced directly from the reference mockup
import imgCabelo from '../../../assets/categories/barber/cabelo.png';
import imgSobrancelhas from '../../../assets/categories/barber/sobrancelhas.png';
import imgOlhos from '../../../assets/categories/barber/olhos.png';
import imgBarba from '../../../assets/categories/barber/barba.png';
import imgMaquiagens from '../../../assets/categories/barber/maquiagens.png';
import imgPele from '../../../assets/categories/barber/pele.png';
import imgPeloCorporal from '../../../assets/categories/barber/pelo_corporal.png';

export type BarberCategoryKey =
  | 'hair'
  | 'eyebrows'
  | 'eyes'
  | 'beard'
  | 'makeUp'
  | 'skin'
  | 'chestHair';

interface BarberMosaicCategoryGridProps {
  onSelectCategory: (category: BarberCategoryKey) => void;
  activeCategoryId?: string;
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: clamp(4px, 0.8vh, 8px);
  user-select: none;
  box-sizing: border-box;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  padding: 0 2px;
  flex-shrink: 0;
  height: clamp(20px, 3vh, 26px);
`;

const SectionTitle = styled.span`
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: clamp(12px, 1.6vh, 14.5px);
  font-weight: 900;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #e5c058;
  white-space: nowrap;
`;

const HeaderLineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

const LineSegment = styled.div`
  height: 1px;
  width: clamp(18px, 2vw, 26px);
  background: linear-gradient(90deg, rgba(229, 192, 88, 0.6) 0%, rgba(229, 192, 88, 0.1) 100%);
  flex-shrink: 0;
`;

const SectionSubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(7px, 0.95vh, 8.5px);
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 0.7vh, 7px);
  width: 100%;
  flex: 1;
  min-height: 0;
  justify-content: space-between;
`;

const CardRow = styled.div`
  display: flex;
  gap: clamp(4px, 0.7vh, 7px);
  width: 100%;
  flex: 1;
  min-height: 0;
`;

const BarberCard = styled.button<{
  $flex?: number | string;
  $active?: boolean;
}>`
  position: relative;
  height: 100%;
  min-height: clamp(38px, 5.4vh, 52px);
  flex: ${({ $flex }) => $flex || 1};
  background: #14151b;
  border: 1.5px solid ${({ $active }) => ($active ? '#e5c058' : 'rgba(229, 192, 88, 0.25)')};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  outline: none;
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 14px rgba(229, 192, 88, 0.35), 0 3px 10px rgba(0, 0, 0, 0.6)'
      : '0 3px 10px rgba(0, 0, 0, 0.5)'};

  &:hover {
    border-color: #e5c058;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7), 0 0 14px rgba(229, 192, 88, 0.3);
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
  pointer-events: none;
  display: block;
  border-radius: 9px;
  transition: transform 0.25s ease, filter 0.25s ease;

  ${BarberCard}:hover & {
    transform: scale(1.02);
    filter: brightness(1.06);
  }
`;

const CardHoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 80% 50%, rgba(229, 192, 88, 0.08) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${BarberCard}:hover & {
    opacity: 1;
  }
`;

export const BarberMosaicCategoryGrid: React.FC<BarberMosaicCategoryGridProps> = ({
  onSelectCategory,
  activeCategoryId,
}) => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>CATEGORIAS</SectionTitle>
        <HeaderLineWrapper>
          <LineSegment />
          <SectionSubtitle>ESCOLHA O QUE DESEJA PERSONALIZAR</SectionSubtitle>
        </HeaderLineWrapper>
      </SectionHeader>

      <CardsGrid>
        {/* 1. CABELO (Full Width Card) */}
        <BarberCard
          $active={activeCategoryId === 'hair'}
          onClick={() => onSelectCategory('hair')}
          aria-label="Cabelo — Corte, estilo e cor"
        >
          <CardImage src={imgCabelo} alt="Cabelo — Corte, estilo e cor" />
          <CardHoverOverlay />
        </BarberCard>

        {/* 2. SOBRANCELHAS | OLHOS (Twin Cards Row) */}
        <CardRow>
          <BarberCard
            $active={activeCategoryId === 'eyebrows'}
            onClick={() => onSelectCategory('eyebrows')}
            aria-label="Sobrancelhas — Formato e cor"
          >
            <CardImage src={imgSobrancelhas} alt="Sobrancelhas — Formato e cor" />
            <CardHoverOverlay />
          </BarberCard>

          <BarberCard
            $active={activeCategoryId === 'eyes'}
            onClick={() => onSelectCategory('eyes')}
            aria-label="Olhos — Cor, íris e detalhes"
          >
            <CardImage src={imgOlhos} alt="Olhos — Cor, íris e detalhes" />
            <CardHoverOverlay />
          </BarberCard>
        </CardRow>

        {/* 3. BARBA (Full Width Card) */}
        <BarberCard
          $active={activeCategoryId === 'beard'}
          onClick={() => onSelectCategory('beard')}
          aria-label="Barba — Estilo e densidade"
        >
          <CardImage src={imgBarba} alt="Barba — Estilo e densidade" />
          <CardHoverOverlay />
        </BarberCard>

        {/* 4. MAQUIAGENS | PELE (Twin Cards Row) */}
        <CardRow>
          <BarberCard
            $active={activeCategoryId === 'makeUp'}
            onClick={() => onSelectCategory('makeUp')}
            aria-label="Maquiagens — Sombras, batons e mais"
          >
            <CardImage src={imgMaquiagens} alt="Maquiagens — Sombras, batons e mais" />
            <CardHoverOverlay />
          </BarberCard>

          <BarberCard
            $active={activeCategoryId === 'skin'}
            onClick={() => onSelectCategory('skin')}
            aria-label="Pele — Tons, textura e detalhes"
          >
            <CardImage src={imgPele} alt="Pele — Tons, textura e detalhes" />
            <CardHoverOverlay />
          </BarberCard>
        </CardRow>

        {/* 5. PELO CORPORAL (Full Width Card) */}
        <BarberCard
          $active={activeCategoryId === 'chestHair'}
          onClick={() => onSelectCategory('chestHair')}
          aria-label="Pelo Corporal — Intensidade e estilo"
        >
          <CardImage src={imgPeloCorporal} alt="Pelo Corporal — Intensidade e estilo" />
          <CardHoverOverlay />
        </BarberCard>
      </CardsGrid>
    </SectionWrapper>
  );
};

export default BarberMosaicCategoryGrid;
