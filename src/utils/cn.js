import { twMerge } from 'tailwind-merge';

// A plain string join isn't enough here: when a component's default classes
// (e.g. Card's "bg-white") and a caller's override (e.g. "bg-primary-600")
// are both present, Tailwind has no built-in "last one wins" rule — both
// rules exist in the stylesheet and whichever the CSS engine picks first
// silently wins, which is how the "Today's Challenge" card rendered
// transparent instead of indigo. twMerge resolves same-property conflicts
// by property group, keeping only the last class for each one.
export function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(' '));
}
