import React, { memo } from 'react';
import GustaSlider from './GustaSlider';

interface RangeInputProps {
  title?: string;
  min: number;
  max: number;
  factor?: number;
  defaultValue?: number;
  clientValue?: number;
  onChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = memo(({
  min,
  max,
  factor = 1,
  title,
  defaultValue = 0,
  onChange,
}) => {
  return (
    <GustaSlider
      label={title}
      min={min}
      max={max}
      step={factor}
      value={defaultValue}
      setValue={onChange}
      ruler={true}
    />
  );
});

RangeInput.displayName = 'RangeInput';

export default RangeInput;
