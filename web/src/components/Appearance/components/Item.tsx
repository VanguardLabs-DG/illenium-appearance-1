import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface ItemProps {
  title?: string;
  children?: ReactNode;
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(230, 205, 0, 0.2);
  margin-bottom: 0.5rem;
`;

const Header = styled.div`
  width: 100%;
  padding: 0.6rem 0.2rem 0.4rem 0.2rem;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  span {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #e6cd00;
  }
`;

const Content = styled.div`
  padding: 0.4rem 0.2rem 0.8rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

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
