import React, { useState } from 'react';
import styled from 'styled-components';

export interface ColorSwatchItem {
  hex: string;
  index: number;
  color_type?: number;
}

export const GTA_HAIR_COLORS: ColorSwatchItem[] = [
  { hex: '#1C1F21', index: 0 },
  { hex: '#272A2C', index: 1 },
  { hex: '#312E2C', index: 2 },
  { hex: '#35261C', index: 3 },
  { hex: '#4B321F', index: 4 },
  { hex: '#5C3B24', index: 5 },
  { hex: '#6D4C35', index: 6 },
  { hex: '#6B503B', index: 7 },
  { hex: '#765C45', index: 8 },
  { hex: '#7F684E', index: 9 },
  { hex: '#99815D', index: 10 },
  { hex: '#A79369', index: 11 },
  { hex: '#AF9C70', index: 12 },
  { hex: '#BBA063', index: 13 },
  { hex: '#D6B97B', index: 14 },
  { hex: '#DAC38E', index: 15 },
  { hex: '#9F7F59', index: 16 },
  { hex: '#845039', index: 17 },
  { hex: '#682B1F', index: 18 },
  { hex: '#61120C', index: 19 },
  { hex: '#640F0A', index: 20 },
  { hex: '#7C140F', index: 21 },
  { hex: '#A02E19', index: 22 },
  { hex: '#B64B28', index: 23 },
  { hex: '#A2502F', index: 24 },
  { hex: '#AA4E2B', index: 25 },
  { hex: '#626262', index: 26 },
  { hex: '#808080', index: 27 },
  { hex: '#AAAAAA', index: 28 },
  { hex: '#C5C5C5', index: 29 },
  { hex: '#463955', index: 30 },
  { hex: '#5A3F6B', index: 31 },
  { hex: '#763C76', index: 32 },
  { hex: '#ED74E3', index: 33 },
  { hex: '#EB4B93', index: 34 },
  { hex: '#F299BC', index: 35 },
  { hex: '#04959E', index: 36 },
  { hex: '#025F86', index: 37 },
  { hex: '#023974', index: 38 },
  { hex: '#3FA16A', index: 39 },
  { hex: '#217C61', index: 40 },
  { hex: '#185C55', index: 41 },
  { hex: '#B6C034', index: 42 },
  { hex: '#70A90B', index: 43 },
  { hex: '#439D13', index: 44 },
  { hex: '#DCB857', index: 45 },
  { hex: '#E5B103', index: 46 },
  { hex: '#E69102', index: 47 },
  { hex: '#F28831', index: 48 },
  { hex: '#FB8057', index: 49 },
  { hex: '#E28B58', index: 50 },
  { hex: '#D1593C', index: 51 },
  { hex: '#CE3120', index: 52 },
  { hex: '#AD0903', index: 53 },
  { hex: '#880302', index: 54 },
  { hex: '#1F1814', index: 55 },
  { hex: '#291F19', index: 56 },
  { hex: '#2E221B', index: 57 },
  { hex: '#37291E', index: 58 },
  { hex: '#2E2218', index: 59 },
  { hex: '#231B15', index: 60 },
  { hex: '#020202', index: 61 },
  { hex: '#706C66', index: 62 },
  { hex: '#9D7A50', index: 63 },
];

export const GTA_MAKEUP_COLORS: ColorSwatchItem[] = [
  { hex: '#992532', index: 0 },
  { hex: '#c8395d', index: 1 },
  { hex: '#bd516c', index: 2 },
  { hex: '#b8637a', index: 3 },
  { hex: '#a6526b', index: 4 },
  { hex: '#b1434c', index: 5 },
  { hex: '#7f3133', index: 6 },
  { hex: '#a4645d', index: 7 },
  { hex: '#c18779', index: 8 },
  { hex: '#cba096', index: 9 },
  { hex: '#c6918f', index: 10 },
  { hex: '#ab6f63', index: 11 },
  { hex: '#b06050', index: 12 },
  { hex: '#a84c33', index: 13 },
  { hex: '#b47178', index: 14 },
  { hex: '#ca7f92', index: 15 },
  { hex: '#ed9cbe', index: 16 },
  { hex: '#e775a4', index: 17 },
  { hex: '#de3e81', index: 18 },
  { hex: '#b34c6e', index: 19 },
  { hex: '#712739', index: 20 },
  { hex: '#4f1f2a', index: 21 },
  { hex: '#aa222f', index: 22 },
  { hex: '#de2034', index: 23 },
  { hex: '#cf0813', index: 24 },
  { hex: '#e55470', index: 25 },
  { hex: '#dc3fb5', index: 26 },
  { hex: '#c227b2', index: 27 },
  { hex: '#a01ca9', index: 28 },
  { hex: '#6e1875', index: 29 },
  { hex: '#731465', index: 30 },
  { hex: '#56165c', index: 31 },
  { hex: '#6d1a9d', index: 32 },
  { hex: '#1b3771', index: 33 },
  { hex: '#1d4ea7', index: 34 },
  { hex: '#1e74bb', index: 35 },
  { hex: '#21a3ce', index: 36 },
  { hex: '#25c2d2', index: 37 },
  { hex: '#23cca5', index: 38 },
  { hex: '#27c07d', index: 39 },
  { hex: '#1b9c32', index: 40 },
  { hex: '#148604', index: 41 },
  { hex: '#70d041', index: 42 },
  { hex: '#c5ea34', index: 43 },
  { hex: '#e1e32f', index: 44 },
  { hex: '#ffdd26', index: 45 },
  { hex: '#fac026', index: 46 },
  { hex: '#f78a27', index: 47 },
  { hex: '#fe5910', index: 48 },
  { hex: '#be6e19', index: 49 },
  { hex: '#f7c97f', index: 50 },
  { hex: '#fbe5c0', index: 51 },
  { hex: '#f5f5f5', index: 52 },
  { hex: '#b3b4b3', index: 53 },
  { hex: '#919191', index: 54 },
  { hex: '#564e4e', index: 55 },
  { hex: '#180e0e', index: 56 },
  { hex: '#58969e', index: 57 },
  { hex: '#4d6f8c', index: 58 },
  { hex: '#1a2b55', index: 59 },
  { hex: '#a07e6b', index: 60 },
  { hex: '#826355', index: 61 },
  { hex: '#6d5346', index: 62 },
  { hex: '#3e2d27', index: 63 },
];

export const COLOR_PALETTES = {
  colors_type_1: GTA_HAIR_COLORS,
  colors_type_2: GTA_MAKEUP_COLORS,
  colors_type_3: GTA_MAKEUP_COLORS,
};

interface GustaColorPickerProps {
  label: string;
  value: number;
  paletteType?: 'colors_type_1' | 'colors_type_2' | 'colors_type_3';
  onChange: (index: number, colorType?: number) => void;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
`;

const Label = styled.label`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const SwatchTrigger = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(230, 205, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  position: relative;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.25rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #e6cd00;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ColorPreview = styled.div<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
`;

const SwatchMenu = styled.ul`
  background-color: rgba(10, 10, 10, 0.98);
  border: 1px solid rgba(230, 205, 0, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.85);
  width: 100%;
  padding: 0.8rem;
  position: absolute;
  top: 45px;
  border-radius: 4px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;
`;

const SwatchItem = styled.li<{ $bgColor: string; $active: boolean }>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3px;
  cursor: pointer;
  border: ${({ $active }) => ($active ? '2px solid #e6cd00' : '1px solid rgba(255, 255, 255, 0.15)')};
  transition: transform 0.1s, border-color 0.1s;

  &:hover {
    transform: scale(1.15);
    border-color: #e6cd00;
  }
`;

const GustaColorPicker: React.FC<GustaColorPickerProps> = ({
  label,
  value,
  paletteType = 'colors_type_1',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const palette = COLOR_PALETTES[paletteType] || GTA_HAIR_COLORS;

  const currentSwatch = palette[value] || palette[0];
  const currentColorHex = currentSwatch ? currentSwatch.hex : '#1C1F21';

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SwatchTrigger onClick={() => setIsOpen(prev => !prev)}>
        <ColorPreview $bgColor={currentColorHex} />
      </SwatchTrigger>
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <SwatchMenu>
            {palette.map((item, idx) => (
              <SwatchItem
                key={`${item.index}-${idx}`}
                $bgColor={item.hex}
                $active={item.index === value}
                onClick={() => {
                  onChange(item.index, item.color_type);
                  setIsOpen(false);
                }}
              />
            ))}
          </SwatchMenu>
        </>
      )}
    </Wrapper>
  );
};

export default GustaColorPicker;
