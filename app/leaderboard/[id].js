import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Avatar, Card, Badge } from '../../src/components/ui';
import { leaderboard } from '../../src/constants/mockData';

const RANK_COLOR = { 1: '#FFB800', 2: '#9494A1', 3: '#E0A100' };

export default function PlayerDetailScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams();
  const player = leaderboard.users.find((user) => user.id === id);

  if (!player) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: player.name }} />
      <View className="flex-1 px-screenX">
        <View className="items-center pt-8">
          <Avatar name={player.name} size="lg" />
          <Text className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-50">{player.name}</Text>
          <View className="mt-2 flex-row items-center gap-2">
            <Text
              className="text-sm font-bold"
              style={{ color: RANK_COLOR[player.rank] ?? '#6B6B78' }}
            >
              #{player.rank}
            </Text>
            <Badge tone="neutral">{leaderboard.league}</Badge>
          </View>
        </View>

        <Card className="mt-6 flex-row" elevation="sm">
          <View className="flex-1 items-center border-r border-gray-100 dark:border-gray-700">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{player.xp}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('leaderboard.totalXp')}</Text>
          </View>
          <View className="flex-1 items-center border-r border-gray-100 dark:border-gray-700">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{player.streak}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('leaderboard.dayStreak')}</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{player.lessonsCompleted}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('leaderboard.lessons')}</Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
