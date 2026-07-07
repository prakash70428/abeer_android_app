import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { shadows } from '../../src/theme';

export default function LearnScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-screenX pt-screenY">
        <Text className="text-3xl font-bold text-gray-900">Learn</Text>
        <Text className="mt-1 text-base font-regular text-gray-500">
          Daily lessons will live here.
        </Text>

        <View
          className="mt-6 rounded-2xl bg-primary-600 p-6"
          style={shadows.lg}
        >
          <Text className="text-sm font-medium text-primary-100">
            Today&apos;s streak
          </Text>
          <Text className="mt-1 text-4xl font-bold text-white">7 days</Text>
          <View className="mt-4 self-start rounded-full bg-accent-500 px-3 py-1">
            <Text className="text-xs font-semibold text-gray-900">
              +20 XP
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
