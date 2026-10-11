/**
 * Gusta Appearance 1:1 Theme
 * Font: Montserrat
 * Primary Accent: Yellow / Gold (230, 205, 0 / #E6CD00)
 * Deep dark surfaces fading into the FiveM viewport
 */
const defaultAppearanceTheme = {
  id: 'gusta',
  fontFamily: "'Montserrat', sans-serif",

  fontColor: '255, 255, 255',
  fontColorHover: '255, 255, 255',
  /** Text/icons on accent-filled surfaces (solid yellow buttons etc.) */
  fontColorSelected: '17, 17, 17',

  mutedTextColor: '255, 255, 255, 0.7',
  mutedTextColorSoft: '255, 255, 255, 0.4',

  primaryBackground: '10, 10, 10',
  secondaryBackground: '0, 0, 0',
  surfaceBackground: '22, 22, 22',
  surfaceBackgroundAlt: '10, 10, 10',
  primaryBackgroundSelected: '230, 205, 0',

  borderColor: '230, 205, 0',
  borderColorSoft: '230, 205, 0, 0.2',

  accentColor: '230, 205, 0',
  accentColorHover: '212, 188, 0',

  borderRadius: '5px',
  scaleOnHover: false,
  sectionFontWeight: '500',
  smoothBackgroundTransition: false,
} as const;

export default defaultAppearanceTheme;
