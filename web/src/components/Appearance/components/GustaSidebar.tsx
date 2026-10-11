import React, { memo } from 'react';
import styled from 'styled-components';

export interface CategoryItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface GustaSidebarProps {
  categories: CategoryItem[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.65rem;
  list-style: none;
  margin: 0;
  padding: 0.2rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  width: 3.2rem;
  flex-shrink: 0;

  /* Sleek scrollbar */
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(230, 205, 0, 0.4);
    border-radius: 2px;
  }
`;

const SidebarItem = styled.li<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? '#e6cd00' : 'rgba(0, 0, 0, 0.55)')};
  border: 1px solid ${({ $active }) => ($active ? '#e6cd00' : 'rgba(230, 205, 0, 0.25)')};
  border-radius: 5px;
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  position: relative;

  svg {
    font-size: 1.25rem;
    color: ${({ $active }) => ($active ? '#111111' : '#ffffff')};
    transition: color 0.15s ease;
  }

  &:hover {
    background-color: #e6cd00;
    border-color: #e6cd00;

    svg {
      color: #111111;
    }
  }

  /* Tooltip on hover */
  &:hover::after {
    content: attr(data-title);
    position: absolute;
    left: 3.2rem;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(10, 10, 10, 0.95);
    color: #ffffff;
    border: 1px solid rgba(230, 205, 0, 0.6);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 700;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1000;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
  }
`;

const GustaSidebar: React.FC<GustaSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  return (
    <SidebarList>
      {categories.map(cat => (
        <SidebarItem
          key={cat.id}
          $active={cat.id === activeCategoryId}
          onClick={() => onSelectCategory(cat.id)}
          data-title={cat.title}
          title={cat.title}
        >
          {cat.icon}
        </SidebarItem>
      ))}
    </SidebarList>
  );
};

export default memo(GustaSidebar);
