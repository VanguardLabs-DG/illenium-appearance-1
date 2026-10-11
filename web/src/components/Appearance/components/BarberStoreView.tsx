import React, { useState } from 'react';
import styled from 'styled-components';
import BarberHeader from './BarberHeader';
import BarberMosaicCategoryGrid, { BarberCategoryKey } from './BarberMosaicCategoryGrid';
import BarberCategoryDetail from './BarberCategoryDetail';
import BarberFooter from './BarberFooter';
import GustaCustomizationPopover from './GustaCustomizationPopover';
import { GustaFloatingPopoverWrapper } from '../styles';
import { PedAppearance, AppearanceSettings, PedHeadOverlays, PedHair, PedHeadOverlayValue } from '../interfaces';
import Nui from '../../../Nui';

interface BarberStoreViewProps {
  data: PedAppearance;
  storedData: PedAppearance;
  appearanceSettings: AppearanceSettings;
  isMale: boolean;
  activeCamera: string;
  onToggleCamera: () => void;
  onToggleGender?: () => void;
  onStartDrag?: (e: React.MouseEvent) => void;
  onHairChange: (key: keyof PedHair, val: number) => void;
  onHeadOverlayChange: (key: keyof PedHeadOverlays, prop: keyof PedHeadOverlayValue, val: number) => void;
  onEyeColorChange: (val: number) => void;
  onExit: () => void;
  onSave: () => void;
  isDev?: boolean;
}

const BarberFloatingSuite = styled.div`
  position: absolute;
  right: clamp(20px, 3vw, 48px);
  top: 50%;
  transform: translateY(-50%);
  width: clamp(380px, 31vw, 540px);
  height: min(88vh, 840px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.2vh, 12px);
  box-sizing: border-box;
  z-index: 1000;
  pointer-events: auto;
  user-select: none;
  animation: slideInRight 0.22s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  @media (max-width: 1440px) {
    width: clamp(360px, 33vw, 480px);
  }

  @media (max-width: 1024px) {
    width: clamp(340px, 40vw, 440px);
    right: 16px;
  }
`;

const BarberContentCard = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  background: rgba(14, 15, 20, 0.94);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 192, 88, 0.1);
  display: flex;
  flex-direction: column;
  padding: clamp(10px, 1.2vw, 14px);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

export const BarberStoreView: React.FC<BarberStoreViewProps> = ({
  data,
  storedData,
  appearanceSettings,
  isMale,
  activeCamera,
  onToggleCamera,
  onToggleGender,
  onHairChange,
  onHeadOverlayChange,
  onEyeColorChange,
  onExit,
  onSave,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BarberCategoryKey | null>(null);
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  const handleSelectCategory = (cat: BarberCategoryKey) => {
    setSelectedCategory(cat);
    if (
      cat === 'hair' ||
      cat === 'eyebrows' ||
      cat === 'eyes' ||
      cat === 'beard' ||
      cat === 'makeUp' ||
      cat === 'skin'
    ) {
      Nui.post('appearance_set_camera', 'head');
    } else {
      Nui.post('appearance_set_camera', 'body');
    }
  };

  const handleBackToMosaic = () => {
    setSelectedCategory(null);
    Nui.post('appearance_set_camera', 'head');
  };

  const handleDotSelect = (index: number) => {
    setActiveDot(index);
    const categoryKeys: BarberCategoryKey[] = [
      'hair',
      'eyebrows',
      'beard',
      'makeUp',
    ];
    if (categoryKeys[index]) {
      handleSelectCategory(categoryKeys[index]);
    }
  };

  return (
    <BarberFloatingSuite
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* 1. Header (Integrated directly on top of the right panel) */}
      <BarberHeader
        title="BARBEARIA"
        subtitle="ESTILO É UMA FORMA DE IDENTIDADE"
      />

      {/* 2. Categories Content Card (Mosaic Grid or Detail Customization) */}
      <BarberContentCard>
        {selectedCategory ? (
          <BarberCategoryDetail
            category={selectedCategory}
            onBack={handleBackToMosaic}
            data={data}
            storedData={storedData}
            appearanceSettings={appearanceSettings}
            isMale={isMale}
            onHairChange={onHairChange}
            onHeadOverlayChange={onHeadOverlayChange}
            onEyeColorChange={onEyeColorChange}
          />
        ) : (
          <BarberMosaicCategoryGrid
            onSelectCategory={handleSelectCategory}
            activeCategoryId={selectedCategory || undefined}
          />
        )}
      </BarberContentCard>

      {/* 3. Footer Navigation (Voltar, Pagination, Settings) */}
      <BarberFooter
        isDetailView={!!selectedCategory}
        onBackToMosaic={handleBackToMosaic}
        onExit={onExit}
        onSave={onSave}
        isCustomizationOpen={isCustomizationOpen}
        onToggleCustomization={() => setIsCustomizationOpen(prev => !prev)}
        activeDotIndex={activeDot}
        totalDots={4}
        onDotSelect={handleDotSelect}
      />

      {/* Floating Color & Opacity Quick Popover (Floats next to footer) */}
      {isCustomizationOpen && (
        <GustaFloatingPopoverWrapper style={{ left: 'auto', right: 'calc(100% + 12px)', bottom: '0' }}>
          <GustaCustomizationPopover
            hasMainColor={true}
            mainColor={data.hair.color}
            onMainColorChange={val => onHairChange('color', val)}
            colorPickerType="colors_type_1"
            hasSecondaryColor={true}
            secondaryColor={data.hair.highlight}
            onSecondaryColorChange={val => onHairChange('highlight', val)}
            hasOpacity={false}
            opacity={1}
            onOpacityChange={() => {}}
            hasVariation={false}
            variation={0}
            maxVariation={0}
            onVariationChange={() => {}}
          />
        </GustaFloatingPopoverWrapper>
      )}
    </BarberFloatingSuite>
  );
};

export default BarberStoreView;
