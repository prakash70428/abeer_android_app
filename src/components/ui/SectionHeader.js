import { View, Text, Pressable } from 'react-native';

export function SectionHeader({ title, actionLabel, onActionPress }) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-lg font-bold text-gray-900">{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onActionPress}>
          <Text className="text-sm font-semibold text-primary-600">{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
