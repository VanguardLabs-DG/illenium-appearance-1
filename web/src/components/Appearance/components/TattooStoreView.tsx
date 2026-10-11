import React, { useState } from 'react';
import styled from 'styled-components';
import TattooHeader from './TattooHeader';
import TattooMosaicCategoryGrid, { TattooCategoryKey } from './TattooMosaicCategoryGrid';
import TattooCategoryDetail from './TattooCategoryDetail';
import TattooFooter from './TattooFooter';
import { PedAppearance, AppearanceSettings, Tattoo, TattooList } from '../interfaces';
import Nui from '../../../Nui';

interface TattooStoreViewProps {
  data: PedAppearance;
  storedData: PedAppearance;
  appearanceSettings: AppearanceSettings;
  isMale: boolean;
  activeCamera: string;
  onToggleCamera: () => void;
  handleApplyTattoo: (value: Tattoo, opacity: number) => void;
  handlePreviewTattoo: (value: Tattoo, opacity: number) => void;
  handleDeleteTattoo: (value: Tattoo) => void;
  handleClearTattoos: () => void;
  onExit: () => void;
  onSave: () => void;
  isDev?: boolean;
}

const TattooCardContainer = styled.div`
  width: 440px;
  max-width: 92vw;
  background: rgba(14, 15, 20, 0.96);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85), 0 0 25px rgba(229, 192, 88, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  margin-right: 5rem;
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
    width: 410px;
    margin-right: 3.5rem;
  }

  @media (max-width: 1024px) {
    width: 365px;
    margin-right: 1.5rem;
  }
`;

const TattooCardBody = styled.div`
  width: 100%;
  padding: 10px 12px 14px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 440px;
  overflow: hidden;
`;

export const TattooStoreView: React.FC<TattooStoreViewProps> = ({
  data,
  storedData,
  appearanceSettings,
  isMale,
  activeCamera,
  onToggleCamera,
  handleApplyTattoo,
  handlePreviewTattoo,
  handleDeleteTattoo,
  handleClearTattoos,
  onExit,
  onSave,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TattooCategoryKey | null>(null);

  const handleSelectCategory = (cat: TattooCategoryKey) => {
    setSelectedCategory(cat);

    // Auto camera switch based on selected tattoo body zone
    if (cat === 'ZONE_HEAD' || cat === 'ZONE_HAIR') {
      Nui.post('appearance_set_camera', 'head');
    } else if (cat === 'ZONE_LEGS') {
      Nui.post('appearance_set_camera', 'bottom');
    } else {
      Nui.post('appearance_set_camera', 'body');
    }
  };

  const handleBackToMosaic = () => {
    setSelectedCategory(null);
    Nui.post('appearance_set_camera', 'body');
  };

  return (
    <TattooCardContainer>
      {/* Golden Tattoo Studio Header */}
      <TattooHeader
        title="TATUAGEM"
        subtitle="ESTÚDIO DE"
        tagline="ARTE NA SUA HISTÓRIA"
      />

      {/* Card Body (Mosaic Grid or Category Detail) */}
      <TattooCardBody>
        {selectedCategory ? (
          <TattooCategoryDetail
            category={selectedCategory}
            onBack={handleBackToMosaic}
            data={data.tattoos}
            storedData={storedData.tattoos}
            settings={appearanceSettings.tattoos}
            isMale={isMale}
            handleApplyTattoo={handleApplyTattoo}
            handlePreviewTattoo={handlePreviewTattoo}
            handleDeleteTattoo={handleDeleteTattoo}
            handleClearTattoos={handleClearTattoos}
          />
        ) : (
          <TattooMosaicCategoryGrid
            onSelectCategory={handleSelectCategory}
            activeCategoryId={selectedCategory || undefined}
          />
        )}
      </TattooCardBody>

      {/* Footer Navigation (Voltar, Limpar, Rose Watermark / Salvar) */}
      <TattooFooter
        isDetailView={!!selectedCategory}
        onBackToMosaic={handleBackToMosaic}
        onExit={onExit}
        onClear={handleClearTattoos}
        onSave={onSave}
        isMale={isMale}
      />
    </TattooCardContainer>
  );
};

export default TattooStoreView;
