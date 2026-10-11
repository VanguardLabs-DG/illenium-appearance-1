import React, { useState } from 'react';
import styled from 'styled-components';

interface GustaSearchBoxProps {
  onSearch?: (id: number) => void;
  onSubmit?: (id: number) => void;
  placeholder?: string;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 9px;
  border: 1px solid rgba(235, 214, 0, 0.65);
  border-radius: 7px;
  background: rgba(10, 10, 10, 0.92);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  box-sizing: border-box;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
`;

const SearchLabel = styled.span`
  color: #ead600;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0.5px;
`;

const SearchInput = styled.input`
  width: 80px;
  height: 28px;
  box-sizing: border-box;
  border: 1px solid rgba(235, 214, 0, 0.55);
  border-radius: 5px;
  outline: none;
  background: rgba(25, 25, 25, 0.96);
  color: #ffffff;
  padding: 0 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    border-color: #ead600;
  }
`;

const SearchButton = styled.button`
  height: 28px;
  border: 0;
  border-radius: 5px;
  padding: 0 10px;
  background: #ead600;
  color: #111111;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #ffea1e;
  }
`;

const GustaSearchBox: React.FC<GustaSearchBoxProps> = ({ onSearch, onSubmit, placeholder = 'Nº' }) => {
  const [val, setVal] = useState('');

  const submit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      if (onSubmit) onSubmit(num);
      else if (onSearch) onSearch(num);
    }
  };

  return (
    <SearchContainer as="form" onSubmit={submit} id="dp-appearance-search">
      <SearchLabel>Buscar ID:</SearchLabel>
      <SearchInput
        type="number"
        placeholder={placeholder}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <SearchButton type="submit">Ir</SearchButton>
    </SearchContainer>
  );
};

export default React.memo(GustaSearchBox);
