import styled from 'styled-components';
import { ReactNode } from 'react';
import { vp, vpClamp } from '../../../styles/scale';

interface ItemProps {
  title?: string;
  children?: ReactNode;
}

const Container = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid rgba(${theme.borderColor || '44, 46, 51'}, 1)`};
`;

const Header = styled.div`
  width: 100%;
  padding: ${vpClamp(12, 10, 16)} ${vpClamp(16, 12, 20)};
  display: flex;
  align-items: center;
  font-family: 'Nexa-Book', sans-serif;

  span {
    font-size: ${vpClamp(12, 11, 14)};
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => `rgb(${theme.fontColor || '193, 194, 197'})`};
  }
`;

const Content = styled.div`
  padding: ${vp(16)} ${vp(16)} ${vp(18)};
  display: flex;
  flex-direction: column;
  gap: ${vp(16)};
`;

// No accordion here on purpose — every category's contents render at once
// so the whole clothing menu is just one continuous scrollable list.
const Item: React.FC<ItemProps> = ({ children, title }) => (
  <Container>
    {title && (
      <Header>
        <span>{title}</span>
      </Header>
    )}
    <Content>{children}</Content>
  </Container>
);

export default Item;
