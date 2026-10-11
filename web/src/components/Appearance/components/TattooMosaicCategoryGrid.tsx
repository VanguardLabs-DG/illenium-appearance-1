import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import {
  IconTattooHead,
  IconTattooTorso,
  IconTattooArm,
  IconTattooLegs,
  IconTattooMicropig,
} from './TattooIcons';

import cabecaImg from '../../../assets/categories/tattoo/cabeca.png';
import torsoImg from '../../../assets/categories/tattoo/torso.png';
import bracosImg from '../../../assets/categories/tattoo/bracos.png';
import pernasImg from '../../../assets/categories/tattoo/pernas.png';
import micropigImg from '../../../assets/categories/tattoo/micropigmentacao.png';

export type TattooCategoryKey =
  | 'ZONE_HEAD'
  | 'ZONE_TORSO'
  | 'ZONE_ARMS'
  | 'ZONE_LEGS'
  | 'ZONE_HAIR';

export interface TattooCategoryItem {
  id: TattooCategoryKey;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  gridArea?: string;
  isFullWidth?: boolean;
}

interface TattooMosaicCategoryGridProps {
  onSelectCategory: (categoryId: TattooCategoryKey) => void;
  activeCategoryId?: TattooCategoryKey;
}

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  user-select: none;
`;

const TwinRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
`;

const CategoryCard = styled.div<{ $isFullWidth?: boolean; $active?: boolean }>`
  position: relative;
  height: ${({ $isFullWidth }) => ($isFullWidth ? '78px' : '142px')};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1.5px solid ${({ $active }) => ($active ? '#E5C058' : 'rgba(229, 192, 88, 0.28)')};
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 16px rgba(229, 192, 88, 0.45), inset 0 0 10px rgba(229, 192, 88, 0.2)'
      : '0 4px 14px rgba(0, 0, 0, 0.6)'};
  background-color: #121318;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    border-color: #f5d77f;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 18px rgba(229, 192, 88, 0.4);

    .bg-image {
      transform: scale(1.04);
      filter: brightness(1.05);
    }

    .chevron-icon {
      transform: translateX(3px);
      color: #ffffff;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CardBgImage = styled.div<{ $src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${({ $src }) => $src}') center center / cover no-repeat;
  transition: transform 0.3s ease, filter 0.3s ease;
  z-index: 1;
`;

const CardGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(10, 11, 15, 0.95) 0%,
    rgba(10, 11, 15, 0.6) 50%,
    rgba(10, 11, 15, 0.2) 100%
  );
  z-index: 2;
`;

const CardFooterContent = styled.div`
  position: relative;
  z-index: 3;
  padding: 8px 10px 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background: rgba(14, 15, 20, 0.85);
  border-top: 1px solid rgba(229, 192, 88, 0.15);
`;

const InfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`;

const IconBadge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid rgba(229, 192, 88, 0.6);
  background: rgba(20, 22, 28, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1.1;
  white-space: nowrap;
`;

const CardSubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.85);
  line-height: 1.1;
  margin-top: 2px;
  white-space: nowrap;
`;

const ChevronWrap = styled.div`
  color: rgba(229, 192, 88, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.2s ease;
`;

export const TATTOO_CATEGORIES: TattooCategoryItem[] = [
  {
    id: 'ZONE_HEAD',
    title: 'CABEÇA',
    subtitle: 'TATUAGENS NO ROSTO E CRÂNIO',
    image: cabecaImg,
    icon: <IconTattooHead size={16} color="#E5C058" />,
  },
  {
    id: 'ZONE_TORSO',
    title: 'TORSO',
    subtitle: 'TATUAGENS NO PEITO E ABDÔMEN',
    image: torsoImg,
    icon: <IconTattooTorso size={16} color="#E5C058" />,
  },
  {
    id: 'ZONE_ARMS',
    title: 'BRAÇOS',
    subtitle: 'TATUAGENS NOS BRAÇOS',
    image: bracosImg,
    icon: <IconTattooArm size={16} color="#E5C058" />,
  },
  {
    id: 'ZONE_LEGS',
    title: 'PERNAS',
    subtitle: 'TATUAGENS NAS PERNAS',
    image: pernasImg,
    icon: <IconTattooLegs size={16} color="#E5C058" />,
  },
  {
    id: 'ZONE_HAIR',
    title: 'MICROPIGMENTAÇÃO',
    subtitle: 'DETALHES E MICROPIGMENTAÇÃO',
    image: micropigImg,
    icon: <IconTattooMicropig size={16} color="#E5C058" />,
    isFullWidth: true,
  },
];

export const TattooMosaicCategoryGrid: React.FC<TattooMosaicCategoryGridProps> = ({
  onSelectCategory,
  activeCategoryId,
}) => {
  return (
    <GridContainer>
      {/* Row 1: Cabeça & Torso */}
      <TwinRow>
        <CategoryCard
          $active={activeCategoryId === 'ZONE_HEAD'}
          onClick={() => onSelectCategory('ZONE_HEAD')}
        >
          <CardBgImage className="bg-image" $src={cabecaImg} />
          <CardGradientOverlay />
          <CardFooterContent>
            <InfoLeft>
              <IconBadge>
                <IconTattooHead size={16} color="#E5C058" />
              </IconBadge>
              <TextBlock>
                <CardTitle>CABEÇA</CardTitle>
                <CardSubtitle>TATUAGENS NO ROSTO E CRÂNIO</CardSubtitle>
              </TextBlock>
            </InfoLeft>
            <ChevronWrap className="chevron-icon">
              <ChevronRight size={16} />
            </ChevronWrap>
          </CardFooterContent>
        </CategoryCard>

        <CategoryCard
          $active={activeCategoryId === 'ZONE_TORSO'}
          onClick={() => onSelectCategory('ZONE_TORSO')}
        >
          <CardBgImage className="bg-image" $src={torsoImg} />
          <CardGradientOverlay />
          <CardFooterContent>
            <InfoLeft>
              <IconBadge>
                <IconTattooTorso size={16} color="#E5C058" />
              </IconBadge>
              <TextBlock>
                <CardTitle>TORSO</CardTitle>
                <CardSubtitle>TATUAGENS NO PEITO E ABDÔMEN</CardSubtitle>
              </TextBlock>
            </InfoLeft>
            <ChevronWrap className="chevron-icon">
              <ChevronRight size={16} />
            </ChevronWrap>
          </CardFooterContent>
        </CategoryCard>
      </TwinRow>

      {/* Row 2: Braços & Pernas */}
      <TwinRow>
        <CategoryCard
          $active={activeCategoryId === 'ZONE_ARMS'}
          onClick={() => onSelectCategory('ZONE_ARMS')}
        >
          <CardBgImage className="bg-image" $src={bracosImg} />
          <CardGradientOverlay />
          <CardFooterContent>
            <InfoLeft>
              <IconBadge>
                <IconTattooArm size={16} color="#E5C058" />
              </IconBadge>
              <TextBlock>
                <CardTitle>BRAÇOS</CardTitle>
                <CardSubtitle>TATUAGENS NOS BRAÇOS</CardSubtitle>
              </TextBlock>
            </InfoLeft>
            <ChevronWrap className="chevron-icon">
              <ChevronRight size={16} />
            </ChevronWrap>
          </CardFooterContent>
        </CategoryCard>

        <CategoryCard
          $active={activeCategoryId === 'ZONE_LEGS'}
          onClick={() => onSelectCategory('ZONE_LEGS')}
        >
          <CardBgImage className="bg-image" $src={pernasImg} />
          <CardGradientOverlay />
          <CardFooterContent>
            <InfoLeft>
              <IconBadge>
                <IconTattooLegs size={16} color="#E5C058" />
              </IconBadge>
              <TextBlock>
                <CardTitle>PERNAS</CardTitle>
                <CardSubtitle>TATUAGENS NAS PERNAS</CardSubtitle>
              </TextBlock>
            </InfoLeft>
            <ChevronWrap className="chevron-icon">
              <ChevronRight size={16} />
            </ChevronWrap>
          </CardFooterContent>
        </CategoryCard>
      </TwinRow>

      {/* Row 3: Micropigmentação (Full Width Card) */}
      <CategoryCard
        $isFullWidth={true}
        $active={activeCategoryId === 'ZONE_HAIR'}
        onClick={() => onSelectCategory('ZONE_HAIR')}
      >
        <CardBgImage className="bg-image" $src={micropigImg} />
        <CardGradientOverlay />
        <CardFooterContent>
          <InfoLeft>
            <IconBadge>
              <IconTattooMicropig size={16} color="#E5C058" />
            </IconBadge>
            <TextBlock>
              <CardTitle>MICROPIGMENTAÇÃO</CardTitle>
              <CardSubtitle>DETALHES E MICROPIGMENTAÇÃO</CardSubtitle>
            </TextBlock>
          </InfoLeft>
          <ChevronWrap className="chevron-icon">
            <ChevronRight size={16} />
          </ChevronWrap>
        </CardFooterContent>
      </CategoryCard>
    </GridContainer>
  );
};

export default TattooMosaicCategoryGrid;
