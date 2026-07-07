import { View } from 'react-native';
import { shadows } from '../../theme';
import { cn } from '../../utils/cn';

// The base surface every screen is built from — bg/border/radius/padding
// as one component means a design tweak (e.g. radius.2xl -> radius.xl)
// happens in one place, not in every screen that drew its own <View>.
export function Card({ children, className, style, elevation = 'sm' }) {
  return (
    <View
      className={cn('rounded-2xl border border-gray-100 bg-white p-4', className)}
      style={[shadows[elevation], style]}
    >
      {children}
    </View>
  );
}
