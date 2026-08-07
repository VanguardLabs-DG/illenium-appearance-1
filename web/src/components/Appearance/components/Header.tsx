import React from 'react';
import styled from 'styled-components';
import { vp } from '../../../styles/scale';
import LocaleSwitcher, { LocaleCode } from './LocaleSwitcher';

const HeaderBar = styled.div`
  padding: ${vp(14)} ${vp(16)} ${vp(12)};
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: ${vp(12)};
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 0.9)`};
`;

const TitleStack = styled.div`
  flex: 1;
  min-width: 0;
  padding-top: ${vp(2)};

  h1 {
    font-size: ${vp(13)};
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(252, 252, 253, 0.98);
    margin: 0 0 ${vp(4)} 0;
    font-family: 'Nexa-Book', sans-serif;
    line-height: 1.2;
  }

  p {
    font-size: ${vp(10)};
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${({ theme }) => `rgb(${theme.mutedTextColor || '144, 146, 150'})`};
    margin: 0;
    font-family: 'Nexa-Book', sans-serif;
    line-height: 1.3;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${vp(6)};
  flex-shrink: 0;
  padding-top: ${vp(1)};
`;

interface HeaderProps {
  title?: string;
  subtitle?: string;
  currentLocale?: string;
  onLocaleChange?: (code: LocaleCode) => void;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Appearance Editor',
  subtitle = 'Customize your character',
  currentLocale,
  onLocaleChange,
}) => {
  return (
    <HeaderBar>
      <TitleStack>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </TitleStack>
      {currentLocale && onLocaleChange ? (
        <Actions>
          <LocaleSwitcher current={currentLocale} onChange={onLocaleChange} />
        </Actions>
      ) : null}
    </HeaderBar>
  );
};

export default Header;
