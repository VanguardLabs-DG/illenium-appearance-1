import React from 'react';
import styled from 'styled-components';
import { Image, List } from 'lucide-react';
import { vp, vpClamp } from '../../../styles/scale';
import serverLogo from '../../../assets/server-logo.png';
import { usePreviewMode, togglePreviewMode } from '../../../utils/thumbnails';

interface TopLeftLogoProps {
  previewLabel?: string;
  normalLabel?: string;
}

const Wrap = styled.div`
  position: fixed;
  top: ${vpClamp(20, 14, 36)};
  left: ${vpClamp(20, 14, 36)};
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${vpClamp(10, 8, 14)};
`;

const LogoImg = styled.img`
  height: ${vpClamp(38, 30, 48)};
  width: auto;
  display: block;
  filter: drop-shadow(0 ${vp(2)} ${vp(8)} rgba(0, 0, 0, 0.6));
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${vpClamp(6, 5, 8)};
  height: ${vpClamp(32, 27, 38)};
  padding: 0 ${vpClamp(12, 9, 15)};
  border-radius: ${vpClamp(6, 5, 8)};
  cursor: pointer;
  font-family: 'Nexa-Book', sans-serif;
  font-size: ${vpClamp(11, 10, 13)};
  font-weight: 600;
  letter-spacing: 0.03em;
  background: ${({ theme }) => `rgba(${theme.secondaryBackground || '13, 13, 13'}, 0.96)`};
  border: ${({ theme }) => `1px solid rgb(${theme.borderColor || '68, 68, 68'})`};
  color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  box-shadow: ${vp(4)} ${vp(6)} ${vp(20)} rgba(0, 0, 0, 0.5);
  transition: border-color 0.15s ease, color 0.15s ease;

  svg {
    width: ${vpClamp(14, 12, 16)};
    height: ${vpClamp(14, 12, 16)};
  }

  &:hover {
    border-color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
    color: rgba(252, 252, 253, 0.98);
  }
`;

const TopLeftLogo: React.FC<TopLeftLogoProps> = ({
  previewLabel = 'Preview mode',
  normalLabel = 'Normal mode',
}) => {
  const previewMode = usePreviewMode();

  return (
    <Wrap>
      <LogoImg src={serverLogo} alt="Server logo" />
      <ToggleButton type="button" onClick={togglePreviewMode} title="Toggle image previews for every category">
        {previewMode ? <Image strokeWidth={2} stroke="currentColor" /> : <List strokeWidth={2} stroke="currentColor" />}
        {previewMode ? previewLabel : normalLabel}
      </ToggleButton>
    </Wrap>
  );
};

export default TopLeftLogo;
