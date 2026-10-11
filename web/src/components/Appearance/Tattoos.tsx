import { useNuiState } from '../../hooks/nuiState';
import { ActionButton, TattoosLayout, TattoosScrollArea, TattoosBottomBar, TattoosTitle, TattoosZoneBlock, TattoosZoneLabel } from './styles';
import SelectTattoo from './components/SelectTattoo';

import { TattoosSettings, TattooList, Tattoo } from './interfaces';

interface TattoosProps {
  settings: TattoosSettings;
  data: TattooList;
  storedData: TattooList;
  handleApplyTattoo: (value: Tattoo, opacity: number) => void;
  handlePreviewTattoo: (value: Tattoo, opacity: number) => void;
  handleDeleteTattoo: (value: Tattoo) => void;
  handleClearTattoos: () => void;
  activeZone?: string;
}

const Tattoos = ({
  settings,
  data,
  storedData,
  handleApplyTattoo,
  handlePreviewTattoo,
  handleDeleteTattoo,
  handleClearTattoos,
  activeZone
}: TattoosProps) => {
  const { locales } = useNuiState();

  const { items } = settings;
  const keys = activeZone && items[activeZone] !== undefined
    ? [activeZone]
    : Object.keys(items).filter(key => key !== 'ZONE_HAIR');

  if (!locales) {
    return null;
  }

  return (
    <TattoosLayout>
      <TattoosScrollArea>
        {!activeZone && <TattoosTitle>{locales.tattoos?.title || 'Tatuagens'}</TattoosTitle>}
        {keys.map(key => {
          const zoneItems = items[key] || [];
          const zoneLabel = locales.tattoos?.items?.[key] || (key === 'ZONE_HAIR' ? 'Micropigmentação' : key);
          return (
            <TattoosZoneBlock key={key}>
              {!activeZone && <TattoosZoneLabel>{zoneLabel}</TattoosZoneLabel>}
              <SelectTattoo
                handlePreviewTattoo={handlePreviewTattoo}
                handleApplyTattoo={handleApplyTattoo}
                handleDeleteTattoo={handleDeleteTattoo}
                items={zoneItems}
                tattoosApplied={data[key] ?? null}
                settings={settings}
              />
            </TattoosZoneBlock>
          );
        })}
      </TattoosScrollArea>
      <TattoosBottomBar>
        <ActionButton variant="primary" onClick={() => handleClearTattoos()} style={{ width: '100%' }}>
          {locales.tattoos?.deleteAll || 'Remover Todas as Tatuagens'}
        </ActionButton>
      </TattoosBottomBar>
    </TattoosLayout>
  );
};

export default Tattoos;
