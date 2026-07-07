import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { FlashList } from '@shopify/flash-list';
import { ScreenHeader, Avatar, Card, Badge, AnimatedPressable } from '../../src/components/ui';
import { leaderboard } from '../../src/constants/mockData';
import { cn } from '../../src/utils/cn';

const RANK_COLOR = { 1: '#FFB800', 2: '#9494A1', 3: '#E0A100' };

export default function LeaderboardScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['top']}>
      <View className="flex-1 px-screenX">
        <View className="pt-screenY">
          <ScreenHeader
            title={t('tabs.leaderboard')}
            subtitle={`${leaderboard.league} · ${t('leaderboard.resetsIn')} ${leaderboard.resetsIn}`}
          />
        </View>

        <FlashList
          data={leaderboard.users}
          keyExtractor={(item) => item.id}
          contentContainerClassName="pt-5 pb-10"
          renderItem={({ item }) => (
            <AnimatedPressable onPress={() => router.push(`/leaderboard/${item.id}`)} className="mb-3">
              <Card
                elevation="sm"
                className={cn(
                  'flex-row items-center gap-3',
                  item.isCurrentUser && 'border-2 border-primary-200 bg-primary-50 dark:border-primary-500 dark:bg-primary-900/30',
                )}
              >
                <Text
                  className="w-6 text-center text-base font-bold"
                  style={{ color: RANK_COLOR[item.rank] ?? '#6B6B78' }}
                >
                  {item.rank}
                </Text>
                <Avatar name={item.name} size="sm" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-900 dark:text-gray-50">
                    {item.name}
                    {item.isCurrentUser ? ` (${t('leaderboard.you')})` : ''}
                  </Text>
                </View>
                <Badge tone="neutral">{item.xp} XP</Badge>
              </Card>
            </AnimatedPressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
