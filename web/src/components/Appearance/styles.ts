import styled, { css } from 'styled-components';
import { vp, vpClamp } from '../../styles/scale';

/* Appearance layout styles – now fully driven by the theme palette */

export const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  background: transparent !important;
`;

export const FullScreenOverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 1000;
  font-family: 'Montserrat', sans-serif;
  background: transparent !important;
  user-select: none;
`;

export const ClothStoreFloatingCard = styled.div`
  width: clamp(480px, 34vw, 550px);
  max-width: 94vw;
  max-height: 92vh;
  background: rgba(14, 15, 20, 0.96);
  border: 1.5px solid rgba(229, 192, 88, 0.45);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.92), 0 0 32px rgba(229, 192, 88, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-right: clamp(24px, 3.5vw, 60px);
  box-sizing: border-box;
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1440px) {
    width: clamp(440px, 35vw, 490px);
    margin-right: clamp(16px, 2.5vw, 40px);
  }

  @media (max-width: 1024px) {
    width: clamp(400px, 44vw, 450px);
    margin-right: 16px;
  }
`;

export const ClothStoreBody = styled.div`
  width: 100%;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  max-height: clamp(520px, 76vh, 690px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.35);
    border-radius: 3px;
  }
`;

export const GustaDrawer = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    zoom: 0.85;
  }
  @media (max-width: 1024px) {
    zoom: 0.72;
  }
  @media (max-width: 800px) {
    zoom: 0.55;
  }
`;

export const GustaContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 2.8rem 1.8rem 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const GustaWorkArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 1.2rem;
  height: calc(100% - 110px);
  margin-top: 0.8rem;
  overflow: hidden;
`;

export const GustaContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  height: 100%;
  overflow: hidden;
`;

export const GustaScrollArea = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  contain: content;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: #e6cd00;
  }
`;

export const GustaHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  flex-shrink: 0;
`;

export const GustaTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 1.15rem;
    background-color: #e6cd00;
    border-radius: 2px;
  }
`;

export const GustaDomainTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.2rem;
`;

export const GustaDomainTab = styled.button<{ $active: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 5px;
  border: 1px solid ${({ $active }) => ($active ? '#e6cd00' : 'rgba(255, 255, 255, 0.12)')};
  background: ${({ $active }) => ($active ? '#e6cd00' : 'rgba(0, 0, 0, 0.4)')};
  color: ${({ $active }) => ($active ? '#111111' : 'rgba(255, 255, 255, 0.75)')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e6cd00;
    color: ${({ $active }) => ($active ? '#111111' : '#ffffff')};
    background: ${({ $active }) => ($active ? '#ffea1e' : 'rgba(230, 205, 0, 0.2)')};
  }
`;

export const GustaCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  gap: 0.8rem;
  flex-shrink: 0;
`;

export const GustaCategoryTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
`;

export const GustaFloatingPopoverWrapper = styled.div`
  position: absolute;
  left: calc(100% + 1rem);
  bottom: 2rem;
  z-index: 999;
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

const PANEL_HEIGHT = `calc(100vh - ${vp(24)})`;

export const MainPanel = styled.div`
  display: flex;
  align-items: flex-start;
  height: ${PANEL_HEIGHT};
  max-height: ${PANEL_HEIGHT};
  margin: ${vpClamp(12, 10, 18)} ${vpClamp(12, 10, 18)} ${vpClamp(12, 10, 18)} 0;
  box-sizing: border-box;
  overflow: hidden;
`;

/** Main panel: flat dark surface (ox_lib-style), no texture or glass gradient. */
export const UnifiedShell = styled.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: ${PANEL_HEIGHT};
  max-height: ${PANEL_HEIGHT};
  min-height: 0;
  background: ${({ theme }) => `rgba(${theme.primaryBackground || '20, 20, 20'}, 0.96)`};
  border: ${({ theme }) => `1px solid rgb(${theme.borderColor || '68, 68, 68'})`};
  border-radius: ${vp(8)};
  box-shadow: ${vp(4)} ${vp(4)} ${vp(28)} rgba(0, 0, 0, 0.65);
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: ${vpClamp(280, 240, 340)};
  width: ${vpClamp(400, 300, 540)};
  min-height: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: ${vp(16)} ${vp(16)} ${vp(14)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${vp(12)};
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
`;

export const HeaderIcon = styled.div`
  width: ${vp(40)};
  height: ${vp(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColorSoft || '55, 58, 64'}, 1)`};
  border-radius: ${vp(8)};
  
  svg {
    color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
    width: ${vp(20)};
    height: ${vp(20)};
  }
`;

export const HeaderText = styled.div`
  flex: 1;
  
  h1 {
    font-size: ${vp(14)};
    font-weight: 600;
    color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
    margin: 0 0 ${vp(2)} 0;
  }
  
  p {
    font-size: ${vp(11)};
    color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
    margin: 0;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => `rgb(${theme.secondaryBackground || '16, 17, 19'})`};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `rgb(${theme.borderColorSoft || '55, 58, 64'})`};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`};
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: ${vp(8)};
  padding: ${vp(16)} ${vp(16)} ${vp(20)};
  flex-shrink: 0;
  background: ${({ theme }) => `rgb(${theme.surfaceBackgroundAlt || '20, 21, 23'})`};
  border-top: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
`;

interface ActionButtonProps {
  variant?: 'primary' | 'secondary';
}

/* Primary: tinted accent surface + accent border/text (accent is white in default theme). */
export const ActionButton = styled.button<ActionButtonProps>`
  flex: 1;
  padding: ${vp(8)} ${vp(14)};
  border-radius: ${vp(4)};
  font-size: ${vp(12)};
  font-weight: 600;
  font-family: 'Nexa-Book', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({ variant, theme }) =>
    variant === 'primary'
      ? `
    background-color: rgba(${theme.accentColor || '66, 140, 255'}, 0.2);
    border: 1px solid rgb(${theme.accentColor || '66, 140, 255'});
    color: rgb(${theme.accentColor || '66, 140, 255'});
    
    &:hover {
      background-color: rgba(${theme.accentColor || '66, 140, 255'}, 0.25);
      border-color: rgb(${theme.accentColor || '66, 140, 255'});
    }
    
    &:active {
      transform: scale(0.98);
    }
  `
      : `
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(${theme.fontColor || '193, 194, 197'});
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgb(${theme.accentColor || '66, 140, 255'});
      color: rgb(${theme.accentColor || '66, 140, 255'});
    }
    
    &:active {
      transform: scale(0.98);
    }
  `}
`;

export const Sidebar = styled.div`
  width: ${vp(72)};
  flex-shrink: 0;
  height: ${PANEL_HEIGHT};
  max-height: ${PANEL_HEIGHT};
  min-height: 0;
  background: ${({ theme }) => `rgb(${theme.primaryBackground || '20, 20, 20'})`};
  border: ${({ theme }) => `1px solid rgb(${theme.borderColor || '68, 68, 68'})`};
  border-radius: ${vp(12)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${vp(16)} 0 ${vp(16)} 0;
  gap: ${vp(4)};
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.5);
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

interface SidebarItemProps {
  active?: boolean;
}

export const SidebarItem = styled.button<SidebarItemProps>`
  width: ${vp(56)};
  height: ${vp(56)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${vp(4)};
  border-radius: ${vp(8)};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ active, theme }) =>
    active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'transparent'};
  border: ${({ active, theme }) =>
    active
      ? `1px solid rgb(${theme.accentColor || '66, 140, 255'})`
      : `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
  box-shadow: ${({ active, theme }) =>
    active ? `0 0 0 1px rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'none'};
  
  svg {
    width: ${vp(18)};
    height: ${vp(18)};
    color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.mutedTextColorSoft || '92, 95, 102'})`};
    transition: color 0.2s ease;
  }
  
  span {
    font-size: ${vp(9)};
    font-weight: 500;
    color: ${({ active, theme }) =>
      active ? `rgb(${theme.fontColor || '193, 194, 197'})` : `rgb(${theme.mutedTextColorSoft || '92, 95, 102'})`};
    transition: color 0.2s ease;
  }
  
  &:hover {
    background: ${({ active, theme }) =>
      active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
    border-color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.borderColorSoft || '55, 58, 64'})`};
    
    svg {
      color: ${({ active, theme }) =>
        active ? `rgb(${theme.accentColorHover || '120, 176, 255'})` : `rgb(${theme.accentColor || '66, 140, 255'})`};
    }
    
    span {
      color: ${({ active, theme }) =>
        active ? `rgb(${theme.fontColor || '193, 194, 197'})` : `rgb(${theme.accentColor || '66, 140, 255'})`};
    }
  }
`;

export const SectionWrapper = styled.div`
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
`;

interface SectionHeaderProps {
  expanded?: boolean;
}

export const SectionHeader = styled.button<SectionHeaderProps>`
  width: 100%;
  padding: ${vp(12)} ${vp(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
    
    span { color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`}; }
    svg { color: ${({ theme }) => `rgb(${theme.accentColor || '66, 140, 255'})`}; }
  }
  
  span {
    font-size: ${vp(12)};
    font-weight: 500;
    color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
    transition: color 0.2s ease;
  }
  
  svg {
    width: ${vp(14)};
    height: ${vp(14)};
    color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
    transition: transform 0.25s ease, color 0.2s ease;
    transform: ${({ expanded }) => expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

export const SectionContent = styled.div`
  padding: ${vp(16)} ${vp(16)} ${vp(18)};
  display: flex;
  flex-direction: column;
  gap: ${vp(16)};
`;

export const ControlRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${vp(6)};
`;

export const ControlLabel = styled.label`
  font-size: ${vp(11)};
  color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  font-weight: 500;
  font-family: 'Nexa-Book', sans-serif;
`;

export const NumberInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColorSoft || '55, 58, 64'}, 1)`};
  border-radius: ${vp(6)};
  overflow: hidden;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: ${({ theme }) => `rgb(${theme.primaryBackgroundSelected || '55, 58, 64'})`};
    border-color: ${({ theme }) => `rgb(${theme.mutedTextColorSoft || '92, 95, 102'})`};
  }
`;

export const NumberButton = styled.button`
  width: ${vp(32)};
  height: ${vp(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Nexa-Book', sans-serif;
  
  svg {
    width: ${vp(12)};
    height: ${vp(12)};
    color: ${({ theme }) => `rgb(${theme.mutedTextColorSoft || '92, 95, 102'})`};
  }
  
  &:hover {
    background: ${({ theme }) => `rgb(${theme.borderColorSoft || '55, 58, 64'})`};
    
    svg {
      color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
    }
  }
`;

export const NumberValue = styled.span`
  flex: 1;
  text-align: center;
  font-size: ${vp(12)};
  color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  font-weight: 500;
  font-family: 'Nexa-Book', sans-serif;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${vp(8)};

  > div {
    flex: 1;
  }
`;

/* Card-style block for tattoo (and similar) content - matches clothing Item content */
export const CardBlock = styled.div`
  width: 100%;
  padding: ${vp(14)} ${vp(16)};
  background-color: ${({ theme }) => `rgb(${theme.surfaceBackground || '37, 38, 43'})`};
  border: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
  border-radius: ${vp(8)};
  display: flex;
  flex-direction: column;
  gap: ${vp(14)};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => `rgb(${theme.primaryBackgroundSelected || '55, 58, 64'})`};
    border-color: ${({ theme }) => `rgb(${theme.borderColorSoft || '55, 58, 64'})`};
  }
`;

export const CardActionRow = styled.div`
  display: flex;
  gap: ${vp(8)};
  width: 100%;
  margin-top: ${vp(4)};
`;

/* Full-height layout for tattoos: scrollable list + Remove all pinned at bottom */
export const TattoosLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`;

export const TattoosTitle = styled.div`
  padding: ${vp(14)} ${vp(16)};
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
  font-size: ${vp(13)};
  font-weight: 600;
  color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  font-family: 'Nexa-Book', sans-serif;
`;

export const TattoosZoneBlock = styled.div`
  padding: ${vp(12)} ${vp(16)} ${vp(16)};
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TattoosZoneLabel = styled.div`
  font-size: ${vp(11)};
  font-weight: 500;
  color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  margin-bottom: ${vp(10)};
  font-family: 'Nexa-Book', sans-serif;
`;

export const TattoosScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => `rgb(${theme.secondaryBackground || '16, 17, 19'})`};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `rgb(${theme.borderColorSoft || '55, 58, 64'})`};
    border-radius: 4px;
  }
`;

/* Same as FooterButtons - no card, matches main panel footer */
export const TattoosBottomBar = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: ${vp(8)};
  padding: ${vp(16)} ${vp(16)} ${vp(20)};
  background: ${({ theme }) => `rgb(${theme.surfaceBackgroundAlt || '20, 21, 23'})`};
  border-top: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
`;

/** Shared chrome for top/bottom viewport tool docks (column: caption + controls row). */
const floatingDockStyles = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${vpClamp(8, 6, 12)};
  padding: ${vpClamp(10, 8, 14)} ${vpClamp(16, 12, 22)} ${vpClamp(12, 10, 16)};
  background: ${props => `rgba(${props.theme.primaryBackground || '20, 20, 20'}, 0.96)`};
  border: ${props => `1px solid rgb(${props.theme.borderColor || '68, 68, 68'})`};
  border-radius: ${vpClamp(8, 6, 12)};
  box-shadow: ${vp(4)} ${vp(8)} ${vp(24)} rgba(0, 0, 0, 0.55);
  z-index: 100;
`;

export const ToolDockHeading = styled.h2`
  margin: 0;
  padding: 0 ${vp(4)};
  font-size: ${vp(10)};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
  text-align: center;
  font-family: 'Nexa-Book', sans-serif;
  line-height: 1.2;
`;

/** Centers the interactive row beneath the dock caption. */
export const DockControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BottomToolDock = styled.div`
  ${floatingDockStyles};
  bottom: ${vpClamp(20, 14, 36)};
  top: auto;
`;

export const DockDivider = styled.div`
  height: 1px;
  margin: ${vp(2)} 0;
  background: ${props => `rgba(${props.theme.borderColorSoft || '85, 85, 85'}, 0.6)`};
`;

export const CameraButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${vp(8)};
`;

interface CameraButtonProps {
  active?: boolean;
}

/* Same light blue style as Hat/Torso/Pants sidebar buttons */
export const CameraButton = styled.button<CameraButtonProps>`
  width: ${vp(44)};
  height: ${vp(44)};
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: ${({ active, theme }) =>
    active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'rgba(255, 255, 255, 0.05)'};
  border: ${({ active, theme }) =>
    active
      ? `1px solid rgb(${theme.accentColor || '66, 140, 255'})`
      : '1px solid rgba(255, 255, 255, 0.1)'};
  border-radius: ${vp(4)};
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Nexa-Book', sans-serif;

  svg {
    width: ${vp(21)};
    height: ${vp(21)};
    color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
    transition: color 0.15s ease;
  }

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : 'rgba(255, 255, 255, 0.2)'};

    svg {
      color: ${({ active, theme }) =>
        active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.fontColor || '193, 194, 197'})`};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const RotateHintCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${vp(28)};
    height: ${vp(28)};
    padding: 0 ${vp(8)};
    background: ${props => `rgb(${props.theme.surfaceBackground || '37, 38, 43'})`};
    border: ${props => `1px solid rgba(${props.theme.borderColorSoft || '55, 58, 64'}, 1)`};
    border-radius: ${vp(4)};
    font-size: ${vp(12)};
    font-weight: 600;
    color: ${props => `rgb(${props.theme.accentColor || '66, 140, 255'})`};
    font-family: 'Nexa-Book', sans-serif;
    line-height: 1;
    cursor: default;
  }
`;

export const RotateKeyRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${vp(24)};
`;
