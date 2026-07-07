// Raw palette — do not use these directly in components, use the semantic
// aliases below instead. This indirection is what lets a future rebrand
// (or a per-tenant theme) change one file instead of every screen.
const palette = {
  indigo: {
    50: '#F0EEFE',
    100: '#E1DDFD',
    200: '#C3BAFB',
    300: '#A597F7',
    400: '#8B79F1',
    500: '#6D4FEA',
    600: '#5B3BDB',
    700: '#4A2EB8',
    800: '#3A2390',
    900: '#2C1A6E',
  },
  amber: {
    50: '#FFF8E6',
    100: '#FFEBB0',
    400: '#FFC633',
    500: '#FFB800',
    600: '#E0A100',
  },
  green: {
    50: '#E8F9EE',
    400: '#3FCE73',
    500: '#22B858',
    600: '#189347',
  },
  red: {
    50: '#FDECEC',
    400: '#F26D6D',
    500: '#E94343',
    600: '#C82D2D',
  },
  gray: {
    0: '#FFFFFF',
    50: '#F7F7F9',
    100: '#EEEEF2',
    200: '#DEDEE4',
    300: '#C3C3CC',
    400: '#9494A1',
    500: '#6B6B78',
    600: '#4D4D59',
    700: '#35353F',
    800: '#212128',
    900: '#121216',
  },
};

// Semantic tokens — this is what components/screens should import.
// "primary" means brand, not "indigo" — if the brand color changes,
// this line changes and nothing downstream does.
export const colors = {
  ...palette,
  primary: palette.indigo,
  accent: palette.amber, // used for XP, streaks, badges
  success: palette.green,
  danger: palette.red,
  background: {
    light: palette.gray[0],
    dark: palette.gray[900],
  },
  surface: {
    light: palette.gray[50],
    dark: palette.gray[800],
  },
  border: {
    light: palette.gray[200],
    dark: palette.gray[700],
  },
  text: {
    primaryLight: palette.gray[900],
    primaryDark: palette.gray[50],
    secondaryLight: palette.gray[500],
    secondaryDark: palette.gray[400],
  },
};
