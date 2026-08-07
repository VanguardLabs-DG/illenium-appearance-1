import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import { vpClamp } from '../../../styles/scale';

// Every entry here must have a matching locales/xx.lua with a complete
// `.UI` table (header/sidebar/camera/footer/controls) — otherwise the menu
// silently falls back to English strings for anything that's missing.
export const AVAILABLE_LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'th', label: 'ไทย' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es-ES', label: 'Español' },
  { code: 'pt-BR', label: 'Português (BR)' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'hu', label: 'Magyar' },
  { code: 'cs', label: 'Čeština' },
  { code: 'ro-RO', label: 'Română' },
  { code: 'bg', label: 'Български' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
] as const;

export type LocaleCode = (typeof AVAILABLE_LOCALES)[number]['code'];

interface LocaleSwitcherProps {
  current: string;
  onChange: (code: LocaleCode) => void;
}

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    position: absolute;
    right: ${vpClamp(8, 6, 10)};
    width: ${vpClamp(12, 10, 14)};
    height: ${vpClamp(12, 10, 14)};
    pointer-events: none;
    color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  }
`;

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  height: ${vpClamp(28, 24, 34)};
  padding: 0 ${vpClamp(26, 22, 30)} 0 ${vpClamp(10, 8, 12)};
  border-radius: ${vpClamp(4, 3, 6)};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColorSoft || '55, 58, 64'}, 0.95)`};
  background: transparent;
  color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  font-family: 'Nexa-Book', sans-serif;
  font-size: ${vpClamp(11, 10, 13)};
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
    color: rgba(252, 252, 253, 0.98);
    outline: none;
  }

  option {
    background: ${({ theme }) => `rgb(${theme.secondaryBackground || '13, 13, 13'})`};
    color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  }
`;

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ current, onChange }) => (
  <Wrap>
    <Select
      value={current}
      onChange={event => onChange(event.target.value as LocaleCode)}
      aria-label="Language"
    >
      {AVAILABLE_LOCALES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </Select>
    <ChevronDown strokeWidth={2} stroke="currentColor" />
  </Wrap>
);

export default LocaleSwitcher;
