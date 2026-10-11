import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, User, Palette } from 'lucide-react';

interface ClothStoreHeaderProps {
  title?: string;
  cameraType: string;
  onPrevCamera: () => void;
  onNextCamera: () => void;
  onToggleCamera: () => void;
  hasCustomization?: boolean;
  isCustomizationOpen?: boolean;
  onToggleCustomization?: () => void;
  onPrevVariation?: () => void;
  onNextVariation?: () => void;
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 12px 20px;
  background: rgba(14, 15, 20, 0.96);
  border-bottom: 1.5px solid rgba(229, 192, 88, 0.35);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 12px rgba(229, 192, 88, 0.08);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-sizing: border-box;
  user-select: none;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: rgba(20, 22, 28, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.3);
  border-radius: 9999px;
  padding: 2px 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const ArrowBtn = styled.button`
  background: transparent;
  border: none;
  color: rgba(229, 192, 88, 0.75);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease;
  outline: none;

  &:hover {
    color: #ffffff;
    background: rgba(229, 192, 88, 0.25);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const CircleIconBtn = styled.button<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? 'radial-gradient(circle, #f5d77f 0%, #e5c058 100%)' : 'rgba(30, 32, 40, 0.95)')};
  border: 1.5px solid ${({ $active }) => ($active ? '#ffffff' : 'rgba(229, 192, 88, 0.5)')};
  color: ${({ $active }) => ($active ? '#111111' : '#E5C058')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.15s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), ${({ $active }) => ($active ? '0 0 14px rgba(229, 192, 88, 0.5)' : 'none')};

  &:hover {
    border-color: #f5d77f;
    transform: scale(1.06);
    color: ${({ $active }) => ($active ? '#111111' : '#ffffff')};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: default;
  gap: 1px;
`;

const TitleSmall = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #E5C058;
  text-transform: uppercase;
`;

const TitleBig = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #FFFFFF 0%, #F5D77F 42%, #D4AF37 75%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9));
`;

export const ClothStoreHeader: React.FC<ClothStoreHeaderProps> = ({
  cameraType,
  onPrevCamera,
  onNextCamera,
  onToggleCamera,
  hasCustomization = true,
  isCustomizationOpen = false,
  onToggleCustomization,
  onPrevVariation,
  onNextVariation,
}) => {
  return (
    <HeaderContainer>
      {/* Left: Camera Controls < [🧍] > */}
      <ControlGroup>
        <ArrowBtn onClick={onPrevCamera} title="Câmera Anterior">
          <ChevronLeft size={16} />
        </ArrowBtn>
        <CircleIconBtn
          onClick={onToggleCamera}
          title={`Foco de Câmera: ${cameraType}`}
          $active={cameraType !== 'default'}
        >
          <User size={15} />
        </CircleIconBtn>
        <ArrowBtn onClick={onNextCamera} title="Próxima Câmera">
          <ChevronRight size={16} />
        </ArrowBtn>
      </ControlGroup>

      {/* Center: LOJA DE ROUPAS */}
      <TitleContainer>
        <TitleSmall>LOJA DE</TitleSmall>
        <TitleBig>ROUPAS</TitleBig>
      </TitleContainer>

      {/* Right: Texture Variation Controls < [🎨] > */}
      <ControlGroup>
        <ArrowBtn
          onClick={onPrevVariation}
          title="Variação de Textura Anterior"
        >
          <ChevronLeft size={16} />
        </ArrowBtn>
        <CircleIconBtn
          onClick={onToggleCustomization}
          $active={isCustomizationOpen}
          title="Variações de Textura & Cores"
        >
          <Palette size={15} />
        </CircleIconBtn>
        <ArrowBtn
          onClick={onNextVariation}
          title="Próxima Variação de Textura"
        >
          <ChevronRight size={16} />
        </ArrowBtn>
      </ControlGroup>
    </HeaderContainer>
  );
};

export default ClothStoreHeader;
