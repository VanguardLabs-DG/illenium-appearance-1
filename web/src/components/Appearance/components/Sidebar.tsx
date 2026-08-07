import React from 'react';
import styled from 'styled-components';
import {
  User,
  Smile,
  Eye,
  Droplet,
  Scissors,
  Brush,
  ScrollText,
  Shirt,
  Watch,
} from 'lucide-react';
import Locales from '../../../shared/interfaces/locales';
import { vp, vpClamp } from '../../../styles/scale';

interface SidebarConfig {
  ped?: boolean;
  headBlend?: boolean;
  faceFeatures?: boolean;
  headOverlays?: boolean;
  components?: boolean;
  props?: boolean;
  tattoos?: boolean;
}

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  config?: SidebarConfig;
  locales?: Locales;
}

// Floats independently on the left-center of the screen instead of being
// docked to the edge of the main panel, so it reads as its own toolbar.
const IconRail = styled.div`
  position: fixed;
  left: ${vpClamp(20, 14, 36)};
  top: 50%;
  transform: translateY(-50%);
  max-height: calc(100vh - ${vp(48)});
  width: ${vpClamp(60, 52, 72)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${vpClamp(12, 10, 16)} ${vpClamp(6, 4, 8)};
  gap: ${vpClamp(6, 4, 8)};
  box-sizing: border-box;
  border-radius: ${vpClamp(10, 8, 14)};
  border: ${({ theme }) => `1px solid rgb(${theme.borderColor || '68, 68, 68'})`};
  background: ${({ theme }) => `rgba(${theme.secondaryBackground || '13, 13, 13'}, 0.96)`};
  box-shadow: ${vp(4)} ${vp(8)} ${vp(24)} rgba(0, 0, 0, 0.55);
  z-index: 100;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

interface SidebarItemProps {
  active: boolean;
}

const SidebarItem = styled.button<SidebarItemProps>`
  width: ${vpClamp(48, 40, 58)};
  height: ${vpClamp(48, 40, 58)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: ${vpClamp(6, 5, 8)};
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease;
  background: ${({ active, theme }) =>
    active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.16)` : 'transparent'};
  border: ${({ active, theme }) =>
    active
      ? `1px solid rgba(${theme.accentColor || '66, 140, 255'}, 0.75)`
      : `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 0.5)`};

  svg {
    width: ${vpClamp(21, 18, 25)};
    height: ${vpClamp(21, 18, 25)};
    color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
    transition: color 0.15s ease;
  }

  &:hover {
    background: ${({ active, theme }) =>
      active ? `rgba(${theme.accentColor || '66, 140, 255'}, 0.2)` : 'rgba(255, 255, 255, 0.06)'};
    border-color: ${({ active, theme }) =>
      active ? `rgb(${theme.accentColor || '66, 140, 255'})` : `rgba(${theme.borderColorSoft || '55, 58, 64'}, 0.95)`};

    svg {
      color: ${({ active, theme }) =>
        active ? `rgb(${theme.accentColorHover || '120, 176, 255'})` : `rgb(${theme.fontColor || '193, 194, 197'})`};
    }
  }
`;

const SidebarCategories = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${vpClamp(6, 4, 8)};
  min-height: 0;
`;

const CATEGORY_IDS = [
  { id: 'ped', labelKey: 'ped', icon: User, configKey: 'ped' },
  { id: 'headBlend', labelKey: 'headBlend', icon: Smile, configKey: 'headBlend' },
  { id: 'faceFeatures', labelKey: 'faceFeatures', icon: Eye, configKey: 'faceFeatures' },
  { id: 'headOverlays', labelKey: 'headOverlays', icon: Droplet, configKey: 'headOverlays' },
  { id: 'hair', labelKey: 'hair', icon: Scissors, configKey: 'headOverlays' },
  { id: 'makeup', labelKey: 'makeup', icon: Brush, configKey: 'headOverlays' },
  { id: 'tattoos', labelKey: 'tattoos', icon: ScrollText, configKey: 'tattoos' },
  { id: 'components', labelKey: 'components', icon: Shirt, configKey: 'components' },
  { id: 'props', labelKey: 'props', icon: Watch, configKey: 'props' },
] as const;

const DEFAULT_LABELS: Record<string, string> = {
  ped: 'Characters', headBlend: 'Face', faceFeatures: 'Features', headOverlays: 'Skin',
  hair: 'Hair', makeup: 'Makeup', tattoos: 'Tattoos', components: 'Clothing', props: 'Accessories',
};

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange, config, locales }) => {
  // Filter categories based on config
  const categories = CATEGORY_IDS.filter(category => {
    if (!config) return true; // Show all if no config
    const configValue = config[category.configKey as keyof SidebarConfig];
    return configValue !== false; // Show if true or undefined
  });

  const getLabel = (key: string) => (locales?.sidebar as Record<string, string>)?.[key] ?? DEFAULT_LABELS[key] ?? key;

  return (
    <IconRail>
      <SidebarCategories>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <SidebarItem
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => onCategoryChange(category.id)}
              type="button"
              title={getLabel(category.labelKey)}
              aria-label={getLabel(category.labelKey)}
            >
              <Icon strokeWidth={1.5} stroke="currentColor" />
            </SidebarItem>
          );
        })}
      </SidebarCategories>
    </IconRail>
  );
};

export default Sidebar;
