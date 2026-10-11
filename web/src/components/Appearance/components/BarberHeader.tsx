import React from 'react';
import styled from 'styled-components';
import { IconBarberScissors, IconBarberPole } from './BarberIcons';

interface BarberHeaderProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: clamp(8px, 1.1vh, 12px) clamp(12px, 1.4vw, 16px);
  background: rgba(14, 15, 20, 0.94);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 16px rgba(229, 192, 88, 0.08);
  box-sizing: border-box;
  user-select: none;
  gap: 10px;
  flex-shrink: 0;
`;

const LeftBrand = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  min-width: 0;
`;

const ScissorsIconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(32px, 4.2vh, 38px);
  height: clamp(32px, 4.2vh, 38px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(229, 192, 88, 0.22) 0%, rgba(20, 22, 28, 0.95) 100%);
  border: 1.5px solid rgba(229, 192, 88, 0.55);
  box-shadow: 0 0 12px rgba(229, 192, 88, 0.28);
  color: #e5c058;
  font-size: clamp(16px, 2.2vh, 20px);
  flex-shrink: 0;
`;

const BrandTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  min-width: 0;
`;

const MainTitle = styled.h1`
  font-family: 'Cinzel', 'Playfair Display', 'Georgia', serif;
  font-size: clamp(16px, 2.2vh, 20px);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.05;
  background: linear-gradient(180deg, #ffffff 0%, #f7df99 45%, #d4af37 80%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.9));
  white-space: nowrap;
`;

const SubtitleText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.85vh, 7.5px);
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #e5c058;
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RightBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  text-align: right;
  flex-shrink: 0;
`;

const BadgeIcon = styled.div`
  font-size: clamp(14px, 2vh, 18px);
  color: #e5c058;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0px;
`;

const BadgeTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.9vh, 8px);
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #ffffff;
`;

const BadgeSubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(5.5px, 0.75vh, 7px);
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.8);
`;

export const BarberHeader: React.FC<BarberHeaderProps> = () => {
  return (
    <HeaderContainer>
      <LeftBrand>
        <ScissorsIconBadge>
          <IconBarberScissors />
        </ScissorsIconBadge>
        <BrandTextGroup>
          <MainTitle>BARBEARIA</MainTitle>
          <SubtitleText>ESTILO É UMA FORMA DE IDENTIDADE</SubtitleText>
        </BrandTextGroup>
      </LeftBrand>

      <RightBadge>
        <BadgeIcon>
          <IconBarberPole />
        </BadgeIcon>
        <BadgeTextGroup>
          <BadgeTitle>NOVO ESTILO</BadgeTitle>
          <BadgeSubtitle>MAIS HISTÓRIAS</BadgeSubtitle>
        </BadgeTextGroup>
      </RightBadge>
    </HeaderContainer>
  );
};

export default BarberHeader;
