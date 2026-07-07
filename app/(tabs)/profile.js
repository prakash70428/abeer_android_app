import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SectionHeader, Card, Avatar, ListRow } from '../../src/components/ui';
import { currentUser, achievements, settingsMenu } from '../../src/constants/mockData';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center pt-screenY">
          <Avatar name={currentUser.name} size="lg" />
          <Text className="mt-3 text-xl font-bold text-gray-900">{currentUser.name}</Text>
          <Text className="text-sm font-regular text-gray-500">
            {currentUser.league} · Rank #{currentUser.rank}
          </Text>
        </View>

        <Card className="mt-5 flex-row" elevation="sm">
          <View className="flex-1 items-center border-r border-gray-100">
            <Text className="text-lg font-bold text-gray-900">{currentUser.xp}</Text>
            <Text className="text-xs font-medium text-gray-500">Total XP</Text>
          </View>
          <View className="flex-1 items-center border-r border-gray-100">
            <Text className="text-lg font-bold text-gray-900">{currentUser.streak}</Text>
            <Text className="text-xs font-medium text-gray-500">Day streak</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-gray-900">{currentUser.lessonsCompleted}</Text>
            <Text className="text-xs font-medium text-gray-500">Lessons</Text>
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title="Achievements" />
        </View>
        <View className="mt-3 flex-row flex-wrap gap-3">
          {achievements.map((achievement) => (
            <View
              key={achievement.id}
              className={
                achievement.unlocked
                  ? 'w-[47%] items-center rounded-2xl border border-accent-500 bg-accent-50 p-4'
                  : 'w-[47%] items-center rounded-2xl border border-gray-100 bg-gray-50 p-4'
              }
            >
              <Ionicons
                name={achievement.icon}
                size={24}
                color={achievement.unlocked ? '#E0A100' : '#C3C3CC'}
              />
              <Text
                className={
                  achievement.unlocked
                    ? 'mt-2 text-center text-xs font-semibold text-gray-900'
                    : 'mt-2 text-center text-xs font-semibold text-gray-400'
                }
              >
                {achievement.label}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-6">
          <SectionHeader title="Settings" />
        </View>
        <Card className="mt-3" elevation="sm">
          {settingsMenu.map((item, index) => (
            <ListRow
              key={item.title}
              left={<Ionicons name={item.icon} size={20} color="#5B3BDB" />}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => {}}
              className={index !== settingsMenu.length - 1 ? 'border-b border-gray-100' : ''}
            />
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
