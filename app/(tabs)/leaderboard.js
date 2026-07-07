import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { ScreenHeader, Avatar, Card, Badge } from '../../src/components/ui';
import { leaderboard } from '../../src/constants/mockData';
import { cn } from '../../src/utils/cn';

const RANK_COLOR = { 1: '#FFB800', 2: '#9494A1', 3: '#E0A100' };

export default function LeaderboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View className="flex-1 px-screenX">
        <View className="pt-screenY">
          <ScreenHeader
            title="Leaderboard"
            subtitle={`${leaderboard.league} · resets in ${leaderboard.resetsIn}`}
          />
        </View>

        <FlashList
          data={leaderboard.users}
          keyExtractor={(item) => String(item.rank)}
          contentContainerClassName="pt-5 pb-10"
          renderItem={({ item }) => (
            <Card
              elevation="sm"
              className={cn(
                'mb-3 flex-row items-center gap-3',
                item.isCurrentUser && 'border-2 border-primary-200 bg-primary-50',
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
                <Text className="text-base font-semibold text-gray-900">
                  {item.name}
                  {item.isCurrentUser ? ' (You)' : ''}
                </Text>
              </View>
              <Badge tone="neutral">{item.xp} XP</Badge>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
