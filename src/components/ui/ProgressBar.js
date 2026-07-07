import { View } from 'react-native';
import { cn } from '../../utils/cn';

// Width is set via inline style, not a className, because the value is
// continuous (0–100%) — Tailwind can't generate a utility class for every
// possible percentage, only the fixed ones in its scale.
export function ProgressBar({ progress = 0, className }) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  return (
    <View className={cn('h-2 w-full overflow-hidden rounded-full bg-gray-100', className)}>
      <View className="h-full rounded-full bg-primary-600" style={{ width: `${pct}%` }} />
    </View>
  );
}
