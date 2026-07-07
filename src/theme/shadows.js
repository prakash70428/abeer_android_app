import { Platform } from 'react-native';

// Plain style objects, not Tailwind classes — spread directly onto a
// component's style prop, e.g. style={shadows.md}. iOS and Android render
// shadows through entirely different APIs, so each preset defines both and
// Platform.select picks the right one at runtime.
function shadow({ elevation, opacity, radius, offsetY }) {
  return Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: { elevation },
    // RN Web has no shadow*/elevation renderer — it needs a real CSS
    // boxShadow string instead, so the dev-time browser preview matches
    // what ships on device rather than silently dropping shadows.
    web: { boxShadow: `0 ${offsetY}px ${radius}px rgba(0, 0, 0, ${opacity})` },
    default: {},
  });
}

export const shadows = {
  sm: shadow({ elevation: 2, opacity: 0.06, radius: 4, offsetY: 1 }),
  md: shadow({ elevation: 4, opacity: 0.08, radius: 8, offsetY: 2 }),
  lg: shadow({ elevation: 8, opacity: 0.12, radius: 16, offsetY: 4 }),
};
