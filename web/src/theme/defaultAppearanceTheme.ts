/**
 * Dark UI with a light-blue accent matching the server logo.
 * Surfaces mirror Mantine overrides in ox_lib/web/src/theme (e.g. modal rgba(20,20,20,0.96), #444 borders).
 */
const defaultAppearanceTheme = {
  id: 'default',
  fontFamily: 'Nexa-Book',

  fontColor: '255, 255, 255',
  fontColorHover: '255, 255, 255',
  /** Text/icons on accent-filled surfaces (solid blue buttons etc.) */
  fontColorSelected: '13, 13, 13',

  mutedTextColor: '160, 160, 160',
  mutedTextColorSoft: '136, 136, 136',

  primaryBackground: '20, 20, 20',
  secondaryBackground: '13, 13, 13',
  surfaceBackground: '42, 42, 42',
  surfaceBackgroundAlt: '20, 20, 20',
  primaryBackgroundSelected: '51, 51, 51',

  borderColor: '68, 68, 68',
  borderColorSoft: '85, 85, 85',

  accentColor: '66, 140, 255',
  accentColorHover: '120, 176, 255',

  borderRadius: '8px',
  scaleOnHover: false,
  sectionFontWeight: 'normal',
  smoothBackgroundTransition: false,
} as const;

export default defaultAppearanceTheme;
