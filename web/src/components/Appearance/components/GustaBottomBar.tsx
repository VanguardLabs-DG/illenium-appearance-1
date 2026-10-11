import React from 'react';
import styled from 'styled-components';
import GustaSlider from './GustaSlider';
import { IconCameraBody, IconCameraHead, IconPalette, IconCart } from './GustaIcons';

interface GustaBottomBarProps {
  rotation: number;
  onRotationChange: (rot: number) => void;
  cameraType: 'body' | 'head';
  onToggleCamera: () => void;
  hasCustomization?: boolean;
  isCustomizationOpen?: boolean;
  onToggleCustomization?: () => void;
  onApply: () => void;
  onCancel?: () => void;
  price?: number;
  applyLabel?: string;
}

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 75px;
  margin-top: 1rem;
`;

const LeftRotationGroup = styled.div`
  display: flex;
  flex: 1;
  max-width: 220px;
`;

const RightControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SquareButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? '#e6cd00' : 'rgba(0, 0, 0, 0.25)')};
  color: ${({ $active }) => ($active ? '#111111' : '#ffffff')};
  border: 1px solid ${({ $active }) => ($active ? '#e6cd00' : 'rgba(255, 255, 255, 0.15)')};
  width: 50px;
  height: 50px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6cd00;
    color: #111111;
    border-color: #e6cd00;
  }

  svg {
    font-size: 1.4rem;
    transition: color 0.2s;
  }
`;

const ApplyButton = styled.button`
  background-color: #e6cd00;
  color: #111111;
  border: 0;
  height: 50px;
  padding: 0 1.2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 4px 14px rgba(230, 205, 0, 0.3);

  &:hover {
    background-color: #ffea1e;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.15rem;
  }
`;

const CancelButton = styled.button`
  background-color: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(220, 53, 69, 0.8);
    color: #ffffff;
    border-color: rgba(220, 53, 69, 0.8);
  }
`;

const GustaBottomBar: React.FC<GustaBottomBarProps> = ({
  rotation,
  onRotationChange,
  cameraType,
  onToggleCamera,
  hasCustomization = false,
  isCustomizationOpen = false,
  onToggleCustomization,
  onApply,
  onCancel,
  price,
  applyLabel = 'Aplicar',
}) => {
  return (
    <BottomContainer>
      <LeftRotationGroup>
        <GustaSlider
          label="Rotação"
          value={rotation}
          setValue={onRotationChange}
          min={0}
          max={360}
          step={1}
          ruler
        />
      </LeftRotationGroup>

      <RightControlsGroup>
        <SquareButton
          type="button"
          onClick={onToggleCamera}
          title={cameraType === 'head' ? 'Câmera: Cabeça' : 'Câmera: Corpo'}
        >
          {cameraType === 'head' ? <IconCameraHead /> : <IconCameraBody />}
        </SquareButton>

        {hasCustomization && onToggleCustomization && (
          <SquareButton
            type="button"
            onClick={onToggleCustomization}
            $active={isCustomizationOpen}
            title="Variações e Cores"
          >
            <IconPalette />
          </SquareButton>
        )}

        {onCancel && (
          <CancelButton type="button" onClick={onCancel}>
            Sair
          </CancelButton>
        )}

        <ApplyButton type="button" onClick={onApply}>
          <IconCart />
          {price && price > 0 ? `${applyLabel} ($${price})` : applyLabel}
        </ApplyButton>
      </RightControlsGroup>
    </BottomContainer>
  );
};

export default React.memo(GustaBottomBar);
