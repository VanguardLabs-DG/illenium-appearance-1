import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, Search } from 'lucide-react';
import { IconShirt } from './GustaIcons';

interface ItemSelectionViewProps {
  categoryTitle: string;
  categoryIcon?: React.ReactNode;
  totalItems?: number;
  onBack: () => void;
  onSearchSubmit: (value: number) => void;
  children: React.ReactNode;
}

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.1vh, 12px);
  box-sizing: border-box;
  padding: 4px 2px;
  overflow: hidden;
`;

const CategoryHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  padding: 2px 2px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const LeftCategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  min-width: 0;
`;

const CategoryBackBtn = styled.button`
  width: clamp(34px, 4.8vh, 40px);
  height: clamp(34px, 4.8vh, 40px);
  border-radius: 12px;
  background: rgba(18, 20, 26, 0.95);
  border: 1.5px solid rgba(229, 192, 88, 0.45);
  color: #E5C058;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);

  &:hover {
    border-color: #F5D77F;
    background: rgba(229, 192, 88, 0.2);
    color: #ffffff;
    transform: translateX(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.35);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CategoryIconWrapper = styled.div`
  font-size: clamp(24px, 3.4vh, 32px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
`;

const CategoryTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  gap: 2px;
`;

const CategoryMainTitle = styled.h2`
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: clamp(17px, 2.4vh, 22px);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  line-height: 1.05;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
`;

const CategorySubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(7px, 0.95vh, 8.5px);
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.85);
  white-space: nowrap;
`;

const ItemsCountBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: clamp(5px, 0.7vh, 7px) clamp(10px, 1.2vw, 14px);
  background: rgba(22, 24, 32, 0.92);
  border: 1.5px solid rgba(229, 192, 88, 0.4);
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(9px, 1.2vh, 11px);
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #ffffff;
    white-space: nowrap;
  }
`;

const ShirtBadgeIcon = styled.div`
  color: #E5C058;
  font-size: clamp(13px, 1.7vh, 15px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarRow = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  height: clamp(34px, 4.6vh, 40px);
  background: rgba(18, 20, 26, 0.95);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #E5C058;
    box-shadow: 0 0 12px rgba(229, 192, 88, 0.3);
    background: rgba(24, 26, 34, 0.98);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 12px);
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  &::placeholder {
    color: rgba(255, 255, 255, 0.38);
    font-weight: 600;
  }
`;


const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(34px, 4.6vh, 40px);
  padding: 0 clamp(16px, 1.8vw, 24px);
  background: linear-gradient(135deg, #F5D77F 0%, #E5C058 50%, #C8A135 100%);
  border: 1.5px solid #F5D77F;
  border-radius: 10px;
  color: #111111;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(11px, 1.4vh, 13px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(229, 192, 88, 0.35);

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #F5D77F 50%, #E5C058 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(229, 192, 88, 0.55);
  }

  &:active {
    transform: translateY(0);
  }
`;

const GridArea = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ItemSelectionView: React.FC<ItemSelectionViewProps> = ({
  categoryTitle,
  categoryIcon,
  totalItems = 0,
  onBack,
  onSearchSubmit,
  children,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(searchValue.trim(), 10);
    if (!isNaN(num) && num >= 0) {
      onSearchSubmit(num);
    }
  };

  return (
    <DetailContainer>
      {/* 1. Category Title Bar */}
      <CategoryHeaderRow>
        <LeftCategoryInfo>
          <CategoryBackBtn onClick={onBack} title="Voltar para Categorias">
            <ChevronLeft size={20} />
          </CategoryBackBtn>
          {categoryIcon && (
            <CategoryIconWrapper>
              {categoryIcon}
            </CategoryIconWrapper>
          )}
          <CategoryTextGroup>
            <CategoryMainTitle>{categoryTitle}</CategoryMainTitle>
            <CategorySubtitle>SELECIONE UMA PEÇA PARA EXPERIMENTAR</CategorySubtitle>
          </CategoryTextGroup>
        </LeftCategoryInfo>

        <ItemsCountBadge>
          <ShirtBadgeIcon>
            <IconShirt />
          </ShirtBadgeIcon>
          <span>{totalItems} ITENS</span>
        </ItemsCountBadge>
      </CategoryHeaderRow>

      {/* 2. Search by ID Bar */}
      <SearchBarRow onSubmit={handleSubmit}>
        <SearchInputBox>
          <Search size={15} color="#E5C058" />
          <SearchInput
            type="text"
            placeholder="BUSCAR POR ID"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </SearchInputBox>

        <GoButton type="submit">IR</GoButton>
      </SearchBarRow>

      {/* 3. Grid of Clothes (3 columns) */}
      <GridArea>{children}</GridArea>
    </DetailContainer>
  );
};

export default ItemSelectionView;
