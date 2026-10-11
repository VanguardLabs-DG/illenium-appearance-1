import React from 'react';
import styled from 'styled-components';
import GustaColorPicker from './GustaColorPicker';
import GustaSlider from './GustaSlider';

interface GustaCustomizationPopoverProps {
  hasMainColor?: boolean;
  mainColor?: number;
  onMainColorChange?: (color: number, colorType?: number) => void;
  colorPickerType?: 'colors_type_1' | 'colors_type_2' | 'colors_type_3';

  hasSecondaryColor?: boolean;
  secondaryColor?: number;
  onSecondaryColorChange?: (color: number) => void;

  hasOpacity?: boolean;
  opacity?: number;
  onOpacityChange?: (opacity: number) => void;

  hasVariation?: boolean;
  variation?: number;
  maxVariation?: number;
  onVariationChange?: (variation: number) => void;
}

const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(14, 14, 14, 0.96);
  border: 1px solid rgba(230, 205, 0, 0.4);
  width: 300px;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
  z-index: 50;
  contain: content;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GustaCustomizationPopover: React.FC<GustaCustomizationPopoverProps> = ({
  hasMainColor,
  mainColor = 0,
  onMainColorChange,
  colorPickerType = 'colors_type_1',

  hasSecondaryColor,
  secondaryColor = 0,
  onSecondaryColorChange,

  hasOpacity,
  opacity = 1,
  onOpacityChange,

  hasVariation,
  variation = 0,
  maxVariation = 0,
  onVariationChange,
}) => {
  return (
    <PopoverContainer>
      {hasMainColor && onMainColorChange && (
        <GustaColorPicker
          label="Cor 1"
          value={mainColor}
          paletteType={colorPickerType}
          onChange={onMainColorChange}
        />
      )}

      {hasSecondaryColor && onSecondaryColorChange && (
        <GustaColorPicker
          label="Cor 2"
          value={secondaryColor}
          paletteType={colorPickerType}
          onChange={onSecondaryColorChange}
        />
      )}

      {hasOpacity && onOpacityChange && (
        <GustaSlider
          label="Opacidade"
          min={0}
          max={1}
          step={0.01}
          ruler
          value={opacity}
          setValue={onOpacityChange}
        />
      )}

      {hasVariation && onVariationChange && maxVariation > 0 && (
        <GustaSlider
          label="Variação"
          min={0}
          max={maxVariation}
          step={1}
          ruler
          value={variation}
          setValue={onVariationChange}
        />
      )}
    </PopoverContainer>
  );
};

export default React.memo(GustaCustomizationPopover);
