import React, { useCallback, useId, useState, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';

interface GustaSliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  middle?: string | number | null;
  ruler?: boolean;
  value: number;
  setValue: (value: number) => void;
  disabled?: boolean;
}

const Container = styled.div<{ $ruler?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: ${({ $ruler }) => ($ruler ? '0.8rem' : '0.4rem')};
`;

const Label = styled.label`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const NumberInput = styled.input`
  background-color: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 2.2rem;
  width: 2.5rem;
  height: 2rem;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    border-color: #e6cd00;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

const NativeRange = styled.input<{ $progress: number }>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 20px;
  background: transparent;
  cursor: pointer;
  outline: none;
  margin: 0;

  /* Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: linear-gradient(
      to right,
      #ffffff 0%,
      #ffffff ${({ $progress }) => $progress}%,
      rgba(0, 0, 0, 0.5) ${({ $progress }) => $progress}%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 9999px;
    border: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 6px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 9999px;
  }

  &::-moz-range-progress {
    height: 6px;
    background: #ffffff;
    border-radius: 9999px;
  }

  /* Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    margin-top: -3px;
    background-color: #e6cd00;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
      transform: scale(1.15);
    }
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background-color: #e6cd00;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }
`;

const RulerRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 0.35rem;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const GustaSlider: React.FC<GustaSliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  middle = null,
  ruler = false,
  value,
  setValue,
  disabled = false,
}) => {
  const inputId = useId();
  const [localVal, setLocalVal] = useState<number>(value);
  const isDraggingRef = useRef(false);
  const latestValRef = useRef(value);
  const throttleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastEmitTimeRef = useRef(0);
  const setValueRef = useRef(setValue);
  setValueRef.current = setValue;

  useEffect(() => {
    if (!isDraggingRef.current) {
      setLocalVal(value);
      latestValRef.current = value;
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
    };
  }, []);

  const emitThrottled = useCallback((val: number) => {
    latestValRef.current = val;
    const now = Date.now();
    const THROTTLE_MS = 40; // ~25 updates/sec, ideal for CEF and FiveM main thread

    if (now - lastEmitTimeRef.current >= THROTTLE_MS) {
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
        throttleTimerRef.current = null;
      }
      lastEmitTimeRef.current = now;
      setValueRef.current(val);
    } else if (!throttleTimerRef.current) {
      const wait = THROTTLE_MS - (now - lastEmitTimeRef.current);
      throttleTimerRef.current = setTimeout(() => {
        throttleTimerRef.current = null;
        lastEmitTimeRef.current = Date.now();
        setValueRef.current(latestValRef.current);
      }, wait);
    }
  }, []);

  const flushValue = useCallback(() => {
    if (throttleTimerRef.current) {
      clearTimeout(throttleTimerRef.current);
      throttleTimerRef.current = null;
    }
    lastEmitTimeRef.current = Date.now();
    setValueRef.current(latestValRef.current);
  }, []);

  const handleRangeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val)) {
        setLocalVal(val);
        emitThrottled(val);
      }
    },
    [emitThrottled]
  );

  const handlePointerDown = useCallback(() => {
    isDraggingRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    flushValue();
  }, [flushValue]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val)) {
        const clamped = Math.min(max, Math.max(min, val));
        setLocalVal(clamped);
        latestValRef.current = clamped;
        setValueRef.current(clamped);
      }
    },
    [max, min]
  );

  const safeVal = isNaN(localVal) ? min : localVal;
  const progressPercent = max > min ? Math.max(0, Math.min(100, ((safeVal - min) / (max - min)) * 100)) : 0;

  const middleLabel = middle !== null ? middle : Math.round((min + max) / 2);

  return (
    <Container $ruler={ruler}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <ControlsRow>
        <NumberInput
          id={inputId}
          type="number"
          min={min}
          max={max}
          step={step}
          value={Number(safeVal.toFixed(step < 0.1 ? 2 : step < 1 ? 1 : 0))}
          onChange={handleInputChange}
          disabled={disabled}
        />
        <SliderWrapper>
          <NativeRange
            type="range"
            min={min}
            max={max}
            step={step}
            value={safeVal}
            onChange={handleRangeChange}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchEnd={handlePointerUp}
            $progress={progressPercent}
            disabled={disabled}
          />
          {ruler && (
            <RulerRow>
              <span>{min}</span>
              {middle !== null && middle !== undefined && <span>{middleLabel}</span>}
              <span>{max}</span>
            </RulerRow>
          )}
        </SliderWrapper>
      </ControlsRow>
    </Container>
  );
};

export default memo(GustaSlider);
