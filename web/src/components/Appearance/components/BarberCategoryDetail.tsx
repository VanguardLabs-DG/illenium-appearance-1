import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BarberCategoryKey } from './BarberMosaicCategoryGrid';
import { IconChevronLeft } from './BarberIcons';
import ThumbnailGrid from './ThumbnailGrid';
import GustaSlider from './GustaSlider';
import GustaColorPicker from './GustaColorPicker';
import { PedAppearance, AppearanceSettings, PedHeadOverlays, PedHair, PedHeadOverlayValue } from '../interfaces';

interface BarberCategoryDetailProps {
  category: BarberCategoryKey;
  onBack: () => void;
  data: PedAppearance;
  storedData: PedAppearance;
  appearanceSettings: AppearanceSettings;
  isMale: boolean;
  onHairChange: (key: keyof PedHair, val: number) => void;
  onHeadOverlayChange: (key: keyof PedHeadOverlays, prop: keyof PedHeadOverlayValue, val: number) => void;
  onEyeColorChange: (val: number) => void;
}

export const GTA_EYE_COLORS = [
  { index: 0, label: 'Verde', hex: '#2E7D32' },
  { index: 1, label: 'Esmeralda', hex: '#00897B' },
  { index: 2, label: 'Azul Claro', hex: '#039BE5' },
  { index: 3, label: 'Azul Oceano', hex: '#1565C0' },
  { index: 4, label: 'Castanho Claro', hex: '#8D6E63' },
  { index: 5, label: 'Castanho Médio', hex: '#6D4C41' },
  { index: 6, label: 'Castanho Escuro', hex: '#3E2723' },
  { index: 7, label: 'Avelã', hex: '#A1887F' },
  { index: 8, label: 'Cinza Escuro', hex: '#455A64' },
  { index: 9, label: 'Cinza Claro', hex: '#90A4AE' },
  { index: 10, label: 'Rosa', hex: '#EC407A' },
  { index: 11, label: 'Amarelo', hex: '#FDD835' },
  { index: 12, label: 'Roxo', hex: '#8E24AA' },
  { index: 13, label: 'Preto', hex: '#1A1A1A' },
  { index: 14, label: 'Verde Claro', hex: '#7CB342' },
  { index: 15, label: 'Azul Celeste', hex: '#00ACC1' },
  { index: 16, label: 'Âmbar', hex: '#FFB300' },
  { index: 17, label: 'Mel', hex: '#FB8C00' },
  { index: 18, label: 'Violeta', hex: '#5E35B1' },
  { index: 19, label: 'Rubi', hex: '#C2185B' },
  { index: 20, label: 'Ciano', hex: '#00E5FF' },
  { index: 21, label: 'Dourado', hex: '#FFD700' },
  { index: 22, label: 'Prata', hex: '#CFD8DC' },
  { index: 23, label: 'Turquesa', hex: '#26A69A' },
  { index: 24, label: 'Safira', hex: '#0D47A1' },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(30, 32, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e5c058;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    background: #e5c058;
    color: #111111;
    transform: scale(1.05);
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const CategoryTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
`;

const CategorySubtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.7);
`;

const TabsRow = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.3);
    border-radius: 3px;
  }
`;

const SubTabButton = styled.button<{ $active?: boolean }>`
  padding: 6px 14px;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? '#e5c058' : 'rgba(26, 28, 36, 0.85)')};
  border: 1px solid ${({ $active }) => ($active ? '#e5c058' : 'rgba(255, 255, 255, 0.1)')};
  color: ${({ $active }) => ($active ? '#111111' : 'rgba(255, 255, 255, 0.75)')};
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e5c058;
    color: ${({ $active }) => ($active ? '#111111' : '#ffffff')};
  }
`;

const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.4);
    border-radius: 4px;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  background: rgba(20, 22, 28, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
`;

const SectionLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e5c058;
`;

const EyeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
`;

const EyeCard = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${({ $active }) => ($active ? 'rgba(229, 192, 88, 0.15)' : 'rgba(28, 30, 40, 0.85)')};
  border: 1.5px solid ${({ $active }) => ($active ? '#e5c058' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e5c058;
    transform: translateY(-2px);
  }
`;

const EyeColorCircle = styled.div<{ $color: string; $active?: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, ${({ $color }) => $color} 0%, #111111 100%);
  border: 2px solid ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.2)')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
`;

const EyeNumber = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 800;
  color: #ffffff;
`;

export const BarberCategoryDetail: React.FC<BarberCategoryDetailProps> = ({
  category,
  onBack,
  data,
  appearanceSettings,
  isMale,
  onHairChange,
  onHeadOverlayChange,
  onEyeColorChange,
}) => {
  // Sub-tabs for Maquiagens (makeUp, blush, lipstick)
  const [makeupTab, setMakeupTab] = useState<'makeUp' | 'lipstick' | 'blush'>('makeUp');

  // Sub-tabs for Pele (blemishes, ageing, complexion, sunDamage, moleAndFreckles)
  const [skinTab, setSkinTab] = useState<'blemishes' | 'ageing' | 'complexion' | 'sunDamage' | 'moleAndFreckles'>('blemishes');

  // Color Tab for Hair (primary vs highlight)
  const [hairColorMode, setHairColorMode] = useState<'primary' | 'highlight'>('primary');

  const eyeColorRef = useRef(data.eyeColor);
  eyeColorRef.current = data.eyeColor;

  // Arrow keys navigation for 5-column Eye colors grid
  useEffect(() => {
    if (category !== 'eyes') return;

    const handleEyeKeyDown = (e: KeyboardEvent) => {
      const targetEl = e.target as HTMLElement | null;
      const tag = targetEl?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || targetEl?.isContentEditable) return;

      const key = e.key;
      if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'ArrowLeft' && key !== 'ArrowRight') return;

      const total = GTA_EYE_COLORS.length;
      const curIndex = GTA_EYE_COLORS.findIndex(item => item.index === eyeColorRef.current);
      let idx = curIndex === -1 ? 0 : curIndex;

      if (key === 'ArrowLeft') {
        if (idx <= 0) return;
        idx -= 1;
      } else if (key === 'ArrowRight') {
        if (idx >= total - 1) return;
        idx += 1;
      } else if (key === 'ArrowUp') {
        if (idx - 5 < 0) return;
        idx -= 5;
      } else if (key === 'ArrowDown') {
        if (idx + 5 >= total) return;
        idx += 5;
      }

      if (idx !== curIndex && idx >= 0 && idx < total) {
        e.preventDefault();
        onEyeColorChange(GTA_EYE_COLORS[idx].index);
      }
    };

    window.addEventListener('keydown', handleEyeKeyDown);
    return () => window.removeEventListener('keydown', handleEyeKeyDown);
  }, [category, onEyeColorChange]);

  const titles: Record<BarberCategoryKey, { title: string; subtitle: string }> = {
    hair: { title: 'CABELO', subtitle: 'CORTE, ESTILO E COR' },
    eyebrows: { title: 'SOBRANCELHAS', subtitle: 'FORMATO E COR' },
    eyes: { title: 'OLHOS', subtitle: 'COR, ÍRIS E DETALHES' },
    beard: { title: 'BARBA', subtitle: 'ESTILO E DENSIDADE' },
    makeUp: { title: 'MAQUIAGENS', subtitle: 'SOMBRAS, BATONS E MAIS' },
    skin: { title: 'PELE', subtitle: 'TONS, TEXTURA E DETALHES' },
    chestHair: { title: 'PELO CORPORAL', subtitle: 'INTENSIDADE E ESTILO' },
  };

  return (
    <Container>
      <HeaderRow>
        <LeftHeader>
          <BackButton onClick={onBack} title="Voltar para as Categorias">
            <IconChevronLeft />
          </BackButton>
          <TitleGroup>
            <CategoryTitle>{titles[category].title}</CategoryTitle>
            <CategorySubtitle>{titles[category].subtitle}</CategorySubtitle>
          </TitleGroup>
        </LeftHeader>
      </HeaderRow>

      {/* 1. CABELO */}
      {category === 'hair' && (
        <ScrollContent>
          <CardSection>
            <SectionLabel>ESTILO DO CORTE</SectionLabel>
            <ThumbnailGrid
              target={{ kind: 'component', id: 2, gender: isMale ? 'male' : 'female' }}
              min={appearanceSettings.hair.style.min}
              max={appearanceSettings.hair.style.max}
              selected={data.hair.style}
              blacklisted={appearanceSettings.hair.blacklist?.drawables ?? []}
              onSelect={(val: number) => onHairChange('style', val)}
            />
          </CardSection>

          <CardSection>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <SectionLabel>PALETA DE CORES</SectionLabel>
              <div style={{ display: 'flex', gap: '4px' }}>
                <SubTabButton
                  $active={hairColorMode === 'primary'}
                  onClick={() => setHairColorMode('primary')}
                >
                  COR PRIMÁRIA
                </SubTabButton>
                <SubTabButton
                  $active={hairColorMode === 'highlight'}
                  onClick={() => setHairColorMode('highlight')}
                >
                  MECHAS
                </SubTabButton>
              </div>
            </div>

            {hairColorMode === 'primary' ? (
              <GustaColorPicker
                label="Cor Principal"
                paletteType="colors_type_1"
                value={data.hair.color}
                onChange={(val: number) => onHairChange('color', val)}
              />
            ) : (
              <GustaColorPicker
                label="Cor das Mechas"
                paletteType="colors_type_1"
                value={data.hair.highlight}
                onChange={(val: number) => onHairChange('highlight', val)}
              />
            )}
          </CardSection>
        </ScrollContent>
      )}

      {/* 2. SOBRANCELHAS */}
      {category === 'eyebrows' && (
        <ScrollContent>
          <CardSection>
            <GustaSlider
              label="Formato da Sobrancelha"
              min={appearanceSettings.headOverlays.eyebrows.style.min}
              max={appearanceSettings.headOverlays.eyebrows.style.max}
              value={data.headOverlays.eyebrows.style}
              setValue={(val: number) => onHeadOverlayChange('eyebrows', 'style', val)}
            />
            <GustaSlider
              label="Densidade / Opacidade"
              min={0}
              max={1}
              step={0.05}
              value={data.headOverlays.eyebrows.opacity}
              setValue={(val: number) => onHeadOverlayChange('eyebrows', 'opacity', val)}
            />
          </CardSection>

          <CardSection>
            <GustaColorPicker
              label="Cor da Sobrancelha"
              paletteType="colors_type_1"
              value={data.headOverlays.eyebrows.color ?? 0}
              onChange={(val: number) => onHeadOverlayChange('eyebrows', 'color', val)}
            />
          </CardSection>
        </ScrollContent>
      )}

      {/* 3. OLHOS */}
      {category === 'eyes' && (
        <ScrollContent>
          <CardSection>
            <SectionLabel>COR DA ÍRIS</SectionLabel>
            <EyeGrid>
              {GTA_EYE_COLORS.map(eye => (
                <EyeCard
                  key={eye.index}
                  $active={data.eyeColor === eye.index}
                  onClick={() => onEyeColorChange(eye.index)}
                >
                  <EyeColorCircle $color={eye.hex} $active={data.eyeColor === eye.index} />
                  <EyeNumber>{eye.label}</EyeNumber>
                </EyeCard>
              ))}
            </EyeGrid>
          </CardSection>
        </ScrollContent>
      )}

      {/* 4. BARBA */}
      {category === 'beard' && (
        <ScrollContent>
          <CardSection>
            <GustaSlider
              label="Estilo da Barba"
              min={appearanceSettings.headOverlays.beard.style.min}
              max={appearanceSettings.headOverlays.beard.style.max}
              value={data.headOverlays.beard.style}
              setValue={(val: number) => onHeadOverlayChange('beard', 'style', val)}
            />
            <GustaSlider
              label="Densidade / Volume"
              min={0}
              max={1}
              step={0.05}
              value={data.headOverlays.beard.opacity}
              setValue={(val: number) => onHeadOverlayChange('beard', 'opacity', val)}
            />
          </CardSection>

          <CardSection>
            <GustaColorPicker
              label="Cor da Barba"
              paletteType="colors_type_1"
              value={data.headOverlays.beard.color ?? 0}
              onChange={(val: number) => onHeadOverlayChange('beard', 'color', val)}
            />
          </CardSection>
        </ScrollContent>
      )}

      {/* 5. MAQUIAGENS */}
      {category === 'makeUp' && (
        <ScrollContent>
          <TabsRow>
            <SubTabButton
              $active={makeupTab === 'makeUp'}
              onClick={() => setMakeupTab('makeUp')}
            >
              SOMBRA DOS OLHOS
            </SubTabButton>
            <SubTabButton
              $active={makeupTab === 'lipstick'}
              onClick={() => setMakeupTab('lipstick')}
            >
              BATOM
            </SubTabButton>
            <SubTabButton
              $active={makeupTab === 'blush'}
              onClick={() => setMakeupTab('blush')}
            >
              BLUSH
            </SubTabButton>
          </TabsRow>

          <CardSection>
            <GustaSlider
              label={`Estilo de ${makeupTab === 'makeUp' ? 'Sombra' : makeupTab === 'lipstick' ? 'Batom' : 'Blush'}`}
              min={appearanceSettings.headOverlays[makeupTab].style.min}
              max={appearanceSettings.headOverlays[makeupTab].style.max}
              value={data.headOverlays[makeupTab].style}
              setValue={(val: number) => onHeadOverlayChange(makeupTab, 'style', val)}
            />
            <GustaSlider
              label="Intensidade"
              min={0}
              max={1}
              step={0.05}
              value={data.headOverlays[makeupTab].opacity}
              setValue={(val: number) => onHeadOverlayChange(makeupTab, 'opacity', val)}
            />
          </CardSection>

          <CardSection>
            <GustaColorPicker
              label="Cor Principal"
              paletteType="colors_type_2"
              value={data.headOverlays[makeupTab].color ?? 0}
              onChange={(val: number) => onHeadOverlayChange(makeupTab, 'color', val)}
            />
          </CardSection>

          {makeupTab !== 'blush' && (
            <CardSection>
              <GustaColorPicker
                label="Cor Secundária"
                paletteType="colors_type_2"
                value={data.headOverlays[makeupTab].secondColor ?? 0}
                onChange={(val: number) => onHeadOverlayChange(makeupTab, 'secondColor', val)}
              />
            </CardSection>
          )}
        </ScrollContent>
      )}

      {/* 6. PELE */}
      {category === 'skin' && (
        <ScrollContent>
          <TabsRow>
            <SubTabButton
              $active={skinTab === 'blemishes'}
              onClick={() => setSkinTab('blemishes')}
            >
              MANCHAS
            </SubTabButton>
            <SubTabButton
              $active={skinTab === 'ageing'}
              onClick={() => setSkinTab('ageing')}
            >
              RUGAS
            </SubTabButton>
            <SubTabButton
              $active={skinTab === 'complexion'}
              onClick={() => setSkinTab('complexion')}
            >
              ASPECTO
            </SubTabButton>
            <SubTabButton
              $active={skinTab === 'sunDamage'}
              onClick={() => setSkinTab('sunDamage')}
            >
              SOL
            </SubTabButton>
            <SubTabButton
              $active={skinTab === 'moleAndFreckles'}
              onClick={() => setSkinTab('moleAndFreckles')}
            >
              SARDAS
            </SubTabButton>
          </TabsRow>

          <CardSection>
            <GustaSlider
              label={`Tipo de ${skinTab === 'blemishes' ? 'Manchas' : skinTab === 'ageing' ? 'Rugas' : skinTab === 'complexion' ? 'Aspecto' : skinTab === 'sunDamage' ? 'Danos do Sol' : 'Sardas'}`}
              min={appearanceSettings.headOverlays[skinTab].style.min}
              max={appearanceSettings.headOverlays[skinTab].style.max}
              value={data.headOverlays[skinTab].style}
              setValue={(val: number) => onHeadOverlayChange(skinTab, 'style', val)}
            />
            <GustaSlider
              label="Intensidade / Visibilidade"
              min={0}
              max={1}
              step={0.05}
              value={data.headOverlays[skinTab].opacity}
              setValue={(val: number) => onHeadOverlayChange(skinTab, 'opacity', val)}
            />
          </CardSection>
        </ScrollContent>
      )}

      {/* 7. PELO CORPORAL */}
      {category === 'chestHair' && (
        <ScrollContent>
          <CardSection>
            <GustaSlider
              label="Estilo dos Pelos do Peito"
              min={appearanceSettings.headOverlays.chestHair.style.min}
              max={appearanceSettings.headOverlays.chestHair.style.max}
              value={data.headOverlays.chestHair.style}
              setValue={(val: number) => onHeadOverlayChange('chestHair', 'style', val)}
            />
            <GustaSlider
              label="Densidade / Volume"
              min={0}
              max={1}
              step={0.05}
              value={data.headOverlays.chestHair.opacity}
              setValue={(val: number) => onHeadOverlayChange('chestHair', 'opacity', val)}
            />
          </CardSection>

          <CardSection>
            <GustaColorPicker
              label="Cor do Pelo Corporal"
              paletteType="colors_type_1"
              value={data.headOverlays.chestHair.color ?? 0}
              onChange={(val: number) => onHeadOverlayChange('chestHair', 'color', val)}
            />
          </CardSection>
        </ScrollContent>
      )}
    </Container>
  );
};

export default BarberCategoryDetail;
