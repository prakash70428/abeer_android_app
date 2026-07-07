import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '../../utils/cn';

// Used for both the settings menu and any future tappable list (search
// results, notification list) — Wrapper swaps between View and Pressable
// so a non-interactive row doesn't get touch-feedback styling for nothing.
export function ListRow({ left, title, subtitle, right, onPress, className }) {
  const Wrapper = onPress ? Pressable : View;
  return (
    <Wrapper onPress={onPress} className={cn('flex-row items-center gap-3 py-3', className)}>
      {left}
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-900">{title}</Text>
        {subtitle ? <Text className="text-sm font-regular text-gray-500">{subtitle}</Text> : null}
      </View>
      {right !== undefined ? right : onPress ? (
        <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
      ) : null}
    </Wrapper>
  );
}
