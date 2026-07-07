import { View, Text } from 'react-native';

export function ScreenHeader({ title, subtitle, right }) {
  return (
    <View className="flex-row items-start justify-between">
      <View className="flex-1 pr-3">
        <Text className="text-3xl font-bold text-gray-900">{title}</Text>
        {subtitle ? (
          <Text className="mt-1 text-base font-regular text-gray-500">{subtitle}</Text>
        ) : null}
      </View>
      {right}
    </View>
  );
}
