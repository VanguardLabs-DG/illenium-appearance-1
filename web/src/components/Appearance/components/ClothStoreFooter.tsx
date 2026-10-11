import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, CornerDownLeft, Check } from 'lucide-react';

interface ClothStoreFooterProps {
  page: 1 | 2;
  onPageChange: (page: 1 | 2) => void;
  isDetailView?: boolean;
  onBackToMosaic?: () => void;
  onExit: () => void;
  onSave?: () => void;
  onRotateLeft?: () => void;
  onRotateRight?: () => void;
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 12px 16px 14px 16px;
  background: rgba(14, 15, 20, 0.96);
  border-top: 1.5px solid rgba(229, 192, 88, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  user-select: none;
`;

const PaginationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const PaginationPill = styled.div`
  display: flex;
  align-items: center;
  background: rgba(22, 24, 32, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.3);
  border-radius: 9999px;
  padding: 3px 8px;
  gap: 4px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
`;

const PageArrowBtn = styled.button`
  background: transparent;
  border: none;
  color: rgba(229, 192, 88, 0.7);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease;
  outline: none;

  &:hover {
    color: #ffffff;
    background: rgba(229, 192, 88, 0.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const PageItemBtn = styled.button<{ $active: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 3px 8px;
  border-radius: 9999px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $active }) =>
    $active
      ? `
    background: rgba(229, 192, 88, 0.2);
    border: 1.5px solid #E5C058;
    color: #ffffff;
    box-shadow: 0 0 12px rgba(229, 192, 88, 0.45);
  `
      : `
    background: transparent;
    border: 1.5px solid transparent;
    color: rgba(255, 255, 255, 0.4);

    &:hover {
      color: #E5C058;
      background: rgba(255, 255, 255, 0.05);
    }
  `}
`;

const SlideDotsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SlideDot = styled.div<{ $active: boolean }>`
  height: 3px;
  border-radius: 9999px;
  transition: all 0.25s ease;

  ${({ $active }) =>
    $active
      ? `
    width: 14px;
    background: #E5C058;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.6);
  `
      : `
    width: 6px;
    background: rgba(255, 255, 255, 0.2);
  `}
`;

const VoltarBtn = styled.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(38, 30, 18, 0.95), rgba(20, 16, 10, 0.98));
  border: 1.5px solid #E5C058;
  box-shadow: 0 0 20px rgba(229, 192, 88, 0.35), inset 0 0 10px rgba(229, 192, 88, 0.15);
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
    color: #E5C058;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(55, 44, 25, 0.98), rgba(30, 24, 15, 0.98));
    border-color: #F5D77F;
    box-shadow: 0 0 26px rgba(229, 192, 88, 0.55), inset 0 0 14px rgba(229, 192, 88, 0.25);
    transform: translateY(-1px);

    svg {
      transform: translateX(-2px);
    }
  }

  &:active {
    transform: scale(0.96);
  }
`;

const DetailActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const LargeFooterBtn = styled.button<{ $variant?: 'dark' | 'gold' }>`
  flex: 1;
  height: clamp(40px, 5.2vh, 46px);
  padding: 0 clamp(8px, 1vw, 14px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10.5px, 1.35vh, 12px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;

  ${({ $variant }) =>
    $variant === 'gold'
      ? `
    background: linear-gradient(135deg, #F5D77F 0%, #E5C058 50%, #C8A135 100%);
    border: 1.5px solid #F5D77F;
    color: #111111;
    box-shadow: 0 4px 18px rgba(229, 192, 88, 0.4);

    svg {
      color: #111111;
      stroke-width: 3px;
    }

    &:hover {
      background: linear-gradient(135deg, #ffffff 0%, #F5D77F 50%, #E5C058 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(229, 192, 88, 0.6);
    }
  `
      : `
    background: rgba(16, 18, 24, 0.95);
    border: 1.5px solid rgba(229, 192, 88, 0.38);
    color: #E5C058;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);

    svg {
      color: #E5C058;
    }

    &:hover {
      background: rgba(26, 28, 38, 0.98);
      border-color: #F5D77F;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.3);

      svg {
        color: #ffffff;
      }
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

export const ClothStoreFooter: React.FC<ClothStoreFooterProps> = ({
  page,
  onPageChange,
  isDetailView = false,
  onBackToMosaic,
  onExit,
  onSave,
}) => {
  return (
    <FooterContainer>
      {isDetailView ? (
        <DetailActionsGroup>
          <LargeFooterBtn $variant="dark" onClick={onBackToMosaic} title="Voltar para Categorias">
            <ChevronLeft size={16} />
            <span>CATEGORIAS</span>
          </LargeFooterBtn>

          <LargeFooterBtn $variant="dark" onClick={onExit} title="Sair da Loja de Roupas">
            <CornerDownLeft size={16} />
            <span>SAIR</span>
          </LargeFooterBtn>

          {onSave && (
            <LargeFooterBtn $variant="gold" onClick={onSave} title="Salvar e Aplicar Roupa">
              <Check size={16} />
              <span>SALVAR</span>
            </LargeFooterBtn>
          )}
        </DetailActionsGroup>
      ) : (
        <>
          {/* Left: Pagination Controls < 01 02 > and slide dots */}
          <PaginationSection>
            <PaginationPill>
              <PageArrowBtn
                onClick={() => onPageChange(page === 1 ? 2 : 1)}
                title="Página Anterior"
              >
                <ChevronLeft size={16} />
              </PageArrowBtn>
              <PageItemBtn
                $active={page === 1}
                onClick={() => onPageChange(1)}
              >
                01
              </PageItemBtn>
              <PageItemBtn
                $active={page === 2}
                onClick={() => onPageChange(2)}
              >
                02
              </PageItemBtn>
              <PageArrowBtn
                onClick={() => onPageChange(page === 1 ? 2 : 1)}
                title="Próxima Página"
              >
                <ChevronRight size={16} />
              </PageArrowBtn>
            </PaginationPill>
            <SlideDotsRow>
              <SlideDot $active={page === 1} />
              <SlideDot $active={page === 2} />
            </SlideDotsRow>
          </PaginationSection>

          {/* Right: Glowing Gold VOLTAR Button */}
          <VoltarBtn onClick={onExit}>
            <CornerDownLeft size={18} />
            VOLTAR
          </VoltarBtn>
        </>
      )}
    </FooterContainer>
  );
};

export default ClothStoreFooter;
