import { ScrollView, View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Card, SectionHeader } from '../../src/components/ui';
import { useNotificationPreferencesStore } from '../../src/store/useNotificationPreferencesStore';
import { colors } from '../../src/theme';

const CATEGORY_TOGGLES = [
  { key: 'dailyReminder', title: 'Daily Reminder', subtitle: "A nudge if you haven't practiced today" },
  { key: 'streakAlerts', title: 'Streak Alerts', subtitle: 'Warn me before my streak breaks' },
  { key: 'lessonRecommendations', title: 'Lesson Recommendations', subtitle: 'Suggested lessons based on your progress' },
  { key: 'marketNews', title: 'Market News', subtitle: 'Major market-moving headlines' },
  { key: 'achievementUnlocks', title: 'Achievement Unlocks', subtitle: 'When you earn a new badge' },
];

export default function NotificationsScreen() {
  const preferences = useNotificationPreferencesStore();
  const switchTrackColor = { false: colors.gray[300], true: colors.primary[500] };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: 'Notifications' }} />
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-5">
          <Card elevation="sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-base font-semibold text-gray-900 dark:text-gray-50">
                  Push Notifications
                </Text>
                <Text className="mt-0.5 text-sm font-regular text-gray-500 dark:text-gray-400">
                  Master switch for every alert below
                </Text>
              </View>
              <Switch
                value={preferences.pushEnabled}
                onValueChange={(value) => preferences.setPreference('pushEnabled', value)}
                trackColor={switchTrackColor}
                thumbColor="#FFFFFF"
              />
            </View>
          </Card>
        </View>

        <View className="mt-6">
          <SectionHeader title="Notify me about" />
        </View>
        <Card className="mt-3" elevation="sm">
          {CATEGORY_TOGGLES.map((item, index) => (
            <View
              key={item.key}
              className={
                index !== CATEGORY_TOGGLES.length - 1
                  ? 'flex-row items-center justify-between border-b border-gray-100 py-3 dark:border-gray-700'
                  : 'flex-row items-center justify-between py-3'
              }
            >
              <View className="flex-1 pr-3">
                <Text
                  className={
                    preferences.pushEnabled
                      ? 'text-base font-medium text-gray-900 dark:text-gray-50'
                      : 'text-base font-medium text-gray-400'
                  }
                >
                  {item.title}
                </Text>
                <Text className="mt-0.5 text-sm font-regular text-gray-500 dark:text-gray-400">
                  {item.subtitle}
                </Text>
              </View>
              <Switch
                disabled={!preferences.pushEnabled}
                value={preferences.pushEnabled && preferences[item.key]}
                onValueChange={(value) => preferences.setPreference(item.key, value)}
                trackColor={switchTrackColor}
                thumbColor="#FFFFFF"
              />
            </View>
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
