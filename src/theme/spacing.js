// Tailwind's default 4px-based spacing scale (space-1, space-2, ...) already
// covers most needs, so we only add semantic aliases for values that repeat
// across many screens — this avoids "px-6" showing up 40 times where a
// design change would mean touching 40 files instead of one.
export const spacing = {
  screenX: 24, // horizontal screen padding, used on nearly every screen
  screenY: 16,
  cardGap: 12, // gap between stacked cards in a list
};
