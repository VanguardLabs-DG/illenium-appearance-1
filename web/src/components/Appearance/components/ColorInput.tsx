import { useCallback } from 'react';
import styled from 'styled-components';
import { vpClamp } from '../../../styles/scale';

interface ColorInputProps {
  title?: string;
  colors?: number[][];
  defaultValue?: number;
  clientValue?: number;
  onChange: (value: number) => void;
}

interface ButtonProps {
  selected: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${vpClamp(8, 6, 10)};
`;

const Label = styled.span`
  font-size: ${vpClamp(11, 10, 13)};
  color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  font-weight: 500;
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${vpClamp(7, 5, 10)};
  padding: ${vpClamp(10, 8, 14)};
  background-color: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColorSoft || '55, 58, 64'}, 1)`};
  border-radius: ${vpClamp(6, 5, 8)};
`;

const ColorButton = styled.button<ButtonProps>`
  width: ${vpClamp(34, 28, 42)};
  height: ${vpClamp(34, 28, 42)};
  flex-shrink: 0;
  border-radius: ${vpClamp(3, 2, 4)};
  border: 2px solid
    ${({ selected, theme }) =>
      selected
        ? `rgb(${theme.accentColor || '66, 140, 255'})`
        : `rgba(${theme.borderColorSoft || '55, 58, 64'}, 1)`};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ selected, theme }) =>
    selected ? `0 0 8px rgba(${theme.accentColor || '66, 140, 255'}, 0.4)` : 'none'};

  &:hover {
    border-color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
    transform: scale(1.08);
  }
`;

const ColorInput: React.FC<ColorInputProps> = ({ title, colors = [], defaultValue, onChange }) => {
  const selectColor = useCallback(
    (color: number) => {
      onChange(color);
    },
    [onChange],
  );

  return (
    <Container>
      {title && <Label>{title}</Label>}
      <ColorsWrapper>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
            selected={defaultValue === index}
            onClick={() => selectColor(index)}
          />
        ))}
      </ColorsWrapper>
    </Container>
  );
};

export default ColorInput;
