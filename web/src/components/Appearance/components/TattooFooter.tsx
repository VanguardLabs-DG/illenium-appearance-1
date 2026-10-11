import React from 'react';
import styled from 'styled-components';
import { CornerDownLeft, Check, ChevronLeft } from 'lucide-react';
import { IconTattooRazor, IconTattooRose } from './TattooIcons';

interface TattooFooterProps {
  isDetailView?: boolean;
  onBackToMosaic?: () => void;
  onExit: () => void;
  onClear: () => void;
  onSave?: () => void;
  isMale?: boolean;
  onRotateLeft?: () => void;
  onRotateRight?: () => void;
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 12px 16px 14px 16px;
  background: rgba(12, 13, 17, 0.96);
  border-top: 1.5px solid rgba(229, 192, 88, 0.2);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  user-select: none;
  position: relative;
`;

const VoltarBtn = styled.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(55, 15, 22, 0.95), rgba(28, 8, 12, 0.98));
  border: 1.5px solid rgba(239, 68, 68, 0.85);
  box-shadow: 0 0 18px rgba(239, 68, 68, 0.35), inset 0 0 10px rgba(239, 68, 68, 0.15);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  outline: none;

  svg {
    color: #ef4444;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(75, 20, 30, 0.98), rgba(38, 12, 18, 0.98));
    border-color: #f87171;
    box-shadow: 0 0 24px rgba(239, 68, 68, 0.5), inset 0 0 14px rgba(239, 68, 68, 0.25);
    transform: translateY(-1px);

    svg {
      transform: translateX(-2px);
    }
  }

  &:active {
    transform: scale(0.96);
  }
`;

const LimparBtn = styled.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: rgba(20, 24, 32, 0.92);
  border: 1.5px solid rgba(229, 192, 88, 0.6);
  box-shadow: 0 0 14px rgba(229, 192, 88, 0.25), inset 0 0 8px rgba(229, 192, 88, 0.1);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: rgba(30, 36, 48, 0.98);
    border-color: #f5d77f;
    box-shadow: 0 0 20px rgba(229, 192, 88, 0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const RightDecor = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 90px;
`;

const SaveBtn = styled.button`
  height: 38px;
  padding: 0 18px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(22, 55, 30, 0.95), rgba(12, 35, 18, 0.98));
  border: 1.5px solid rgba(34, 197, 94, 0.85);
  box-shadow: 0 0 16px rgba(34, 197, 94, 0.3), inset 0 0 10px rgba(34, 197, 94, 0.15);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  outline: none;

  svg {
    color: #4ade80;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(30, 75, 40, 0.98), rgba(16, 45, 24, 0.98));
    border-color: #4ade80;
    box-shadow: 0 0 22px rgba(34, 197, 94, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const TattooFooter: React.FC<TattooFooterProps> = ({
  isDetailView = false,
  onBackToMosaic,
  onExit,
  onClear,
  onSave,
}) => {
  return (
    <FooterContainer>
      {/* Left: Voltar / Categorias Button */}
      {isDetailView ? (
        <VoltarBtn onClick={onBackToMosaic} style={{ height: '38px', padding: '0 16px', fontSize: '12px' }}>
          <ChevronLeft size={16} />
          CATEGORIAS
        </VoltarBtn>
      ) : (
        <VoltarBtn onClick={onExit}>
          <CornerDownLeft size={18} />
          VOLTAR
        </VoltarBtn>
      )}

      {/* Center: Limpar Button */}
      <LimparBtn onClick={onClear} title="Remover / Limpar Tatuagens">
        <IconTattooRazor size={18} color="#E5C058" />
        LIMPAR
      </LimparBtn>

      {/* Right: Rose Watermark or Save Button */}
      <RightDecor>
        {isDetailView && onSave ? (
          <SaveBtn onClick={onSave}>
            <Check size={16} />
            SALVAR
          </SaveBtn>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', opacity: 0.6 }}>
            <span style={{ color: 'rgba(229, 192, 88, 0.5)', fontSize: '18px', marginRight: '6px', letterSpacing: '2px' }}>...</span>
            <IconTattooRose size={38} opacity={0.6} />
          </div>
        )}
      </RightDecor>
    </FooterContainer>
  );
};

export default TattooFooter;
