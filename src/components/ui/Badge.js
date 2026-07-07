import { View, Text } from 'react-native';
import { cn } from '../../utils/cn';

const TONES = {
  accent: { container: 'bg-accent-500', label: 'text-gray-900' },
  success: { container: 'bg-success-50 dark:bg-success-500/20', label: 'text-success-600 dark:text-success-400' },
  danger: { container: 'bg-danger-50 dark:bg-danger-500/20', label: 'text-danger-600 dark:text-danger-400' },
  neutral: { container: 'bg-gray-100 dark:bg-gray-700', label: 'text-gray-600 dark:text-gray-300' },
};

export function Badge({ children, tone = 'neutral' }) {
  const t = TONES[tone];
  return (
    <View className={cn('self-start rounded-full px-2.5 py-1', t.container)}>
      <Text className={cn('text-xs font-semibold', t.label)}>{children}</Text>
    </View>
  );
}
