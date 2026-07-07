import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PortfolioScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-gray-900">Portfolio</Text>
        <Text className="mt-2 text-base text-gray-500 text-center">
          Your virtual stock holdings will live here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
