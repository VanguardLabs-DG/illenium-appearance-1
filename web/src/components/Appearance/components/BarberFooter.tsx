import React from 'react';
import styled from 'styled-components';
import { IconChevronLeft, IconChevronRight, IconAdjustmentSliders } from './BarberIcons';
import { IconCart } from './GustaIcons';

interface BarberFooterProps {
  isDetailView?: boolean;
  onBackToMosaic?: () => void;
  onExit: () => void;
  onSave?: () => void;
  isCustomizationOpen?: boolean;
  onToggleCustomization?: () => void;
  activeDotIndex?: number;
  totalDots?: number;
  onDotSelect?: (index: number) => void;
}

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: clamp(40px, 5.8vh, 50px);
  padding: 0 2px;
  box-sizing: border-box;
  user-select: none;
  gap: 12px;
  flex-shrink: 0;
`;

const ExitButton = styled.button`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  padding: 0 clamp(10px, 1.2vw, 16px);
  height: clamp(38px, 5.5vh, 46px);
  background: rgba(32, 14, 18, 0.92);
  border: 1.5px solid rgba(239, 68, 68, 0.65);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);

  &:hover {
    background: rgba(48, 18, 24, 0.98);
    border-color: #ef4444;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4), 0 0 12px rgba(239, 68, 68, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BackArrowIcon = styled.div`
  font-size: clamp(14px, 2vh, 17px);
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  transition: transform 0.2s ease;

  ${ExitButton}:hover & {
    transform: translateX(-2px);
  }
`;

const ExitTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`;

const ExitTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 12px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;

const ExitSubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.85vh, 7.5px);
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
`;

const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  background: rgba(16, 18, 24, 0.92);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 0 clamp(8px, 1vw, 14px);
  height: clamp(34px, 5vh, 42px);
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
`;

const StepperArrow = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.55);
  font-size: clamp(13px, 1.8vh, 16px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: all 0.18s ease;
  outline: none;

  &:hover {
    color: #e5c058;
    transform: scale(1.18);
  }
`;

const DotsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(5px, 0.6vw, 7px);
`;

const StepperDot = styled.button<{ $active?: boolean }>`
  width: ${({ $active }) => ($active ? 'clamp(7px, 1vh, 8px)' : 'clamp(5px, 0.7vh, 6px)')};
  height: ${({ $active }) => ($active ? 'clamp(7px, 1vh, 8px)' : 'clamp(5px, 0.7vh, 6px)')};
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#e5c058' : 'rgba(255, 255, 255, 0.28)')};
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: all 0.2s ease;
  outline: none;
  box-shadow: ${({ $active }) => ($active ? '0 0 8px #e5c058' : 'none')};

  &:hover {
    background: #e5c058;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const SlidersButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(38px, 5.5vh, 46px);
  height: clamp(38px, 5.5vh, 46px);
  min-width: clamp(38px, 5.5vh, 46px);
  background: ${({ $active }) => ($active ? 'rgba(229, 192, 88, 0.22)' : 'rgba(18, 20, 26, 0.92)')};
  border: 1.5px solid ${({ $active }) => ($active ? '#e5c058' : 'rgba(229, 192, 88, 0.35)')};
  border-radius: 12px;
  color: ${({ $active }) => ($active ? '#e5c058' : '#ffffff')};
  font-size: clamp(16px, 2.2vh, 19px);
  cursor: pointer;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $active }) =>
    $active ? '0 0 14px rgba(229, 192, 88, 0.4)' : '0 4px 14px rgba(0, 0, 0, 0.6)'};

  &:hover {
    border-color: #e5c058;
    color: #e5c058;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7), 0 0 14px rgba(229, 192, 88, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 clamp(10px, 1.2vw, 16px);
  height: clamp(38px, 5.5vh, 46px);
  background: linear-gradient(135deg, #e5c058 0%, #b89127 100%);
  border: 1px solid #e5c058;
  border-radius: 12px;
  color: #111111;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 11.5px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(229, 192, 88, 0.35);

  &:hover {
    background: linear-gradient(135deg, #f3d47a 0%, #c8a135 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 192, 88, 0.55);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BarberFooter: React.FC<BarberFooterProps> = ({
  isDetailView = false,
  onBackToMosaic,
  onExit,
  onSave,
  isCustomizationOpen = false,
  onToggleCustomization,
  activeDotIndex = 0,
  totalDots = 4,
  onDotSelect,
}) => {
  return (
    <FooterContainer>
      {/* Left Back / Exit Button */}
      <ExitButton
        onClick={() => {
          if (isDetailView && onBackToMosaic) {
            onBackToMosaic();
          } else {
            onExit();
          }
        }}
        title={isDetailView ? 'Voltar para as Categorias' : 'Sair da Barbearia'}
      >
        <BackArrowIcon>←</BackArrowIcon>
        <ExitTextGroup>
          <ExitTitle>VOLTAR</ExitTitle>
          <ExitSubtitle>
            {isDetailView ? 'CATEGORIAS' : 'SAIR DA BARBEARIA'}
          </ExitSubtitle>
        </ExitTextGroup>
      </ExitButton>

      {/* Center Stepper Dots */}
      <StepperContainer>
        <StepperArrow
          onClick={() => {
            if (onDotSelect) {
              const next = activeDotIndex - 1 < 0 ? totalDots - 1 : activeDotIndex - 1;
              onDotSelect(next);
            }
          }}
          title="Página Anterior"
        >
          <IconChevronLeft />
        </StepperArrow>
        <DotsGroup>
          {Array.from({ length: totalDots }).map((_, idx) => (
            <StepperDot
              key={idx}
              $active={idx === activeDotIndex}
              onClick={() => onDotSelect && onDotSelect(idx)}
              title={`Página ${idx + 1}`}
            />
          ))}
        </DotsGroup>
        <StepperArrow
          onClick={() => {
            if (onDotSelect) {
              const next = (activeDotIndex + 1) % totalDots;
              onDotSelect(next);
            }
          }}
          title="Próxima Página"
        >
          <IconChevronRight />
        </StepperArrow>
      </StepperContainer>

      {/* Right Controls: Filters & Save */}
      <RightControls>
        {onToggleCustomization && (
          <SlidersButton
            $active={isCustomizationOpen}
            onClick={onToggleCustomization}
            title="Ajustes Rápidos de Cores e Tons"
          >
            <IconAdjustmentSliders />
          </SlidersButton>
        )}

        {isDetailView && onSave && (
          <SaveButton onClick={onSave} title="Confirmar e Salvar Visual">
            <IconCart style={{ fontSize: '14px' }} />
            <span>SALVAR</span>
          </SaveButton>
        )}
      </RightControls>
    </FooterContainer>
  );
};

export default BarberFooter;
