// Font family names must match the keys passed to useFonts() in
// src/hooks/useAppFonts.js exactly — React Native resolves fonts by string
// name, with no compile-time check, so a typo here fails silently at runtime
// (falls back to the system font instead of erroring).
export const fontFamily = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
};

// A constrained type scale (not arbitrary font sizes per screen) is what
// keeps "premium" typography consistent instead of accidental. Every size
// pairs a fixed lineHeight so text never looks cramped or overly loose.
export const fontSize = {
  xs: { size: 12, lineHeight: 16 },
  sm: { size: 14, lineHeight: 20 },
  base: { size: 16, lineHeight: 24 },
  lg: { size: 18, lineHeight: 26 },
  xl: { size: 20, lineHeight: 28 },
  '2xl': { size: 24, lineHeight: 32 },
  '3xl': { size: 30, lineHeight: 38 },
  '4xl': { size: 36, lineHeight: 44 },
};
