import React from 'react';
import styled from 'styled-components';
import { IconTattooMachine } from './TattooIcons';
import { Crown } from 'lucide-react';

interface TattooHeaderProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 18px;
  background: rgba(12, 13, 17, 0.96);
  border-bottom: 1.5px solid rgba(229, 192, 88, 0.25);
  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  user-select: none;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 25%;
`;

const MachineIconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(229, 192, 88, 0.15) 0%, rgba(20, 22, 28, 0.8) 100%);
  border: 1.5px solid rgba(229, 192, 88, 0.5);
  box-shadow: 0 0 14px rgba(229, 192, 88, 0.25);
  flex-shrink: 0;
`;

const CenterTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`;

const SubtitleSmall = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E5C058;
  margin-bottom: 1px;
`;

const MainTitle = styled.h1`
  font-family: 'Montserrat', 'Cinzel', serif;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.05;
  background: linear-gradient(180deg, #FFFFFF 0%, #F5D77F 40%, #D4AF37 75%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
`;

const SubtitleLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: rgba(229, 192, 88, 0.5);
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: rgba(229, 192, 88, 0.85);
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 25%;
  text-align: right;
  gap: 2px;
`;

const SloganScript = styled.span`
  font-family: 'Caveat', 'Brush Script MT', 'Montserrat', cursive;
  font-size: 13px;
  font-style: italic;
  color: rgba(229, 192, 88, 0.75);
  line-height: 1.2;
`;

const CrownBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(229, 192, 88, 0.85);

  svg {
    stroke-width: 1.8;
  }
`;

export const TattooHeader: React.FC<TattooHeaderProps> = ({
  title = 'TATUAGEM',
  subtitle = 'ESTÚDIO DE',
  tagline = 'ARTE NA SUA HISTÓRIA',
}) => {
  return (
    <HeaderContainer>
      {/* Left side tattoo gun icon */}
      <LeftSide>
        <MachineIconBadge>
          <IconTattooMachine size={26} color="#E5C058" />
        </MachineIconBadge>
      </LeftSide>

      {/* Center Title with gold gradient & brackets */}
      <CenterTitle>
        <SubtitleSmall>{subtitle}</SubtitleSmall>
        <MainTitle>{title}</MainTitle>
        <SubtitleLine>
          <span>{tagline}</span>
        </SubtitleLine>
      </CenterTitle>

      {/* Right side slogan with crown doodle */}
      <RightSide>
        <SloganScript>Mais que tatuagens,</SloganScript>
        <CrownBadge>
          <SloganScript style={{ color: '#E5C058' }}>identidade.</SloganScript>
          <Crown size={12} color="#E5C058" />
        </CrownBadge>
      </RightSide>
    </HeaderContainer>
  );
};

export default TattooHeader;
