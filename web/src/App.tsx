import { NuiStateProvider } from './hooks/nuiState';
import GlobalStyles from './styles/global';

import Appearance from './components/Appearance';
import { ThemeProvider } from 'styled-components';
import Nui from './Nui';
import { useCallback, useEffect, useState } from 'react';
import defaultAppearanceTheme from './theme/defaultAppearanceTheme';

const defaultTheme: any = { ...defaultAppearanceTheme };

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const loadTheme = useCallback(async () => {
    // In dev, use the local defaultTheme so edits here apply live
    if (!import.meta.env.PROD) {
      setCurrentTheme(defaultTheme);
      return;
    }

    // theme.json (resource root) can override any of these fields without
    // touching code or rebuilding — see game/nui.lua's get_theme_configuration.
    // Anything it doesn't specify falls back to defaultTheme below.
    const serverTheme = await Nui.post('get_theme_configuration');
    const nextTheme =
      serverTheme && typeof serverTheme === 'object' && !Array.isArray(serverTheme)
        ? { ...defaultTheme, ...serverTheme }
        : defaultTheme;

    setCurrentTheme(nextTheme);
  }, []);

  useEffect(() => {
    loadTheme().catch(console.error);
  }, [loadTheme]);

  return (
    <NuiStateProvider>
      <ThemeProvider theme={currentTheme}>
        <Appearance />
        <GlobalStyles />
      </ThemeProvider>
    </NuiStateProvider>
  );
};

export default App;
