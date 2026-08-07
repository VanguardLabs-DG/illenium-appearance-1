import React from 'react';
import styled from 'styled-components';
import { Check, X } from 'lucide-react';
import { FaHatCowboy, FaTshirt } from 'react-icons/fa';
import { GiTrousers } from 'react-icons/gi';
import { ClothesState } from '../interfaces';
import Locales from '../../../shared/interfaces/locales';
import { vp, vpClamp } from '../../../styles/scale';

interface BottomLeftClusterProps {
  clothes: ClothesState;
  onSetClothes: (key: keyof ClothesState) => void;
  locales?: Locales;
  saveLabel?: string;
  closeLabel?: string;
  onSave: () => void;
  onClose: () => void;
}

// Everything anchored to the bottom-left corner lives in ONE fixed box,
// stacked with plain flexbox (column, last child = bottom of the screen).
// Two separate fixed-position docks with calc()-guessed offsets were fragile
// and could overlap at some resolutions — a single flow container can't.
const Cluster = styled.div`
  position: fixed;
  left: ${vpClamp(20, 14, 36)};
  bottom: ${vpClamp(20, 14, 36)};
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${vpClamp(12, 8, 16)};
`;

const ClothesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${vpClamp(6, 4, 8)};
  padding: ${vpClamp(8, 6, 10)};
  box-sizing: border-box;
  border-radius: ${vpClamp(10, 8, 14)};
  border: ${({ theme }) => `1px solid rgb(${theme.borderColor || '68, 68, 68'})`};
  background: ${({ theme }) => `rgba(${theme.secondaryBackground || '13, 13, 13'}, 0.96)`};
  box-shadow: ${vp(4)} ${vp(8)} ${vp(24)} rgba(0, 0, 0, 0.55);
`;

interface ClothesButtonProps {
  active: boolean;
}

const ClothesButton = styled.button<ClothesButtonProps>`
  width: ${vpClamp(44, 38, 52)};
  height: ${vpClamp(44, 38, 52)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: ${vpClamp(6, 5, 8)};
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  background: ${({ active, theme }) =>
    active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.16)` : 'transparent'};
  border: ${({ active, theme }) =>
    active
      ? `1px solid rgba(${theme.accentColor || '66, 140, 255'}, 0.75)`
      : `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 0.5)`};

  svg {
    width: ${vpClamp(18, 15, 21)};
    height: ${vpClamp(18, 15, 21)};
    color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  }

  &:hover {
    background: ${({ active, theme }) =>
      active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'rgba(255, 255, 255, 0.06)'};

    svg {
      color: ${({ active, theme }) =>
        active ? `rgb(${theme.accentColorHover || '120, 176, 255'})` : `rgb(${theme.fontColor || '193, 194, 197'})`};
    }
  }
`;

// Save and Close now sit as two clearly separate buttons side by side,
// instead of a badge overlapping the Save button's corner.
const SaveCloseRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: ${vpClamp(8, 6, 10)};
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${vpClamp(8, 6, 12)};
  height: ${vpClamp(52, 44, 64)};
  padding: 0 ${vpClamp(22, 16, 30)};
  border-radius: ${vpClamp(8, 6, 10)};
  cursor: pointer;
  font-family: 'Nexa-Book', sans-serif;
  font-size: ${vpClamp(14, 12, 17)};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: ${({ theme }) => `rgba(${theme.accentColor || '66, 140, 255'}, 0.16)`};
  border: ${({ theme }) => `1px solid rgba(${theme.accentColor || '66, 140, 255'}, 0.7)`};
  color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
  box-shadow: ${vp(4)} ${vp(6)} ${vp(20)} rgba(0, 0, 0, 0.55);
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease,
    transform 0.15s ease;

  svg {
    width: ${vpClamp(20, 16, 24)};
    height: ${vpClamp(20, 16, 24)};
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ theme }) => `rgba(${theme.accentColor || '66, 140, 255'}, 0.26)`};
    border-color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
    color: rgba(252, 252, 253, 0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${vpClamp(52, 44, 64)};
  height: ${vpClamp(52, 44, 64)};
  flex-shrink: 0;
  border-radius: ${vpClamp(8, 6, 10)};
  cursor: pointer;
  background: ${({ theme }) => `rgba(${theme.secondaryBackground || '13, 13, 13'}, 0.96)`};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColorSoft || '55, 58, 64'}, 0.95)`};
  color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  box-shadow: ${vp(4)} ${vp(6)} ${vp(20)} rgba(0, 0, 0, 0.55);
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease,
    transform 0.15s ease;

  svg {
    width: ${vpClamp(20, 16, 24)};
    height: ${vpClamp(20, 16, 24)};
  }

  &:hover {
    background: rgba(220, 60, 60, 0.16);
    border-color: rgba(220, 60, 60, 0.7);
    color: rgb(255, 120, 120);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const BottomLeftCluster: React.FC<BottomLeftClusterProps> = ({
  clothes,
  onSetClothes,
  locales,
  saveLabel = 'Save',
  closeLabel = 'Close',
  onSave,
  onClose,
}) => {
  const clothesLabels = locales?.sidebar?.clothes;

  return (
    <Cluster>
      <ClothesRow>
        <ClothesButton
          type="button"
          active={!!clothes.head}
          onClick={() => onSetClothes('head')}
          title={clothesLabels?.hat ?? 'Hat'}
          aria-label={clothesLabels?.hat ?? 'Hat'}
        >
          <FaHatCowboy size={17} />
        </ClothesButton>
        <ClothesButton
          type="button"
          active={!!clothes.body}
          onClick={() => onSetClothes('body')}
          title={clothesLabels?.torso ?? 'Torso'}
          aria-label={clothesLabels?.torso ?? 'Torso'}
        >
          <FaTshirt size={17} />
        </ClothesButton>
        <ClothesButton
          type="button"
          active={!!clothes.bottom}
          onClick={() => onSetClothes('bottom')}
          title={clothesLabels?.pants ?? 'Pants'}
          aria-label={clothesLabels?.pants ?? 'Pants'}
        >
          <GiTrousers size={17} />
        </ClothesButton>
      </ClothesRow>
      <SaveCloseRow>
        <SaveButton type="button" onClick={onSave} title={saveLabel} aria-label={saveLabel}>
          <Check strokeWidth={2} stroke="currentColor" />
          {saveLabel}
        </SaveButton>
        <CloseButton type="button" onClick={onClose} title={closeLabel} aria-label={closeLabel}>
          <X strokeWidth={2} stroke="currentColor" />
        </CloseButton>
      </SaveCloseRow>
    </Cluster>
  );
};

export default BottomLeftCluster;
