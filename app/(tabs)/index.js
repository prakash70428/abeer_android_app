import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import {
  ScreenHeader,
  SectionHeader,
  StatTile,
  Card,
  Badge,
  ProgressBar,
} from '../../src/components/ui';
import { currentUser, learningPath, dailyChallenge } from '../../src/constants/mockData';

const LESSON_STATUS_ICON = {
  completed: { name: 'checkmark-circle', color: '#22B858' },
  in_progress: { name: 'play-circle', color: '#5B3BDB' },
  locked: { name: 'lock-closed', color: '#C3C3CC' },
};

export default function LearnScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-screenY">
          <ScreenHeader title="Learn" subtitle="Continue where you left off" />
        </View>

        <View className="mt-5 flex-row gap-3">
          <StatTile icon="flame" iconColor="#E0A100" value={currentUser.streak} label="Day streak" />
          <StatTile icon="flash" iconColor="#5B3BDB" value={currentUser.xp} label="Total XP" />
          <StatTile icon="book" iconColor="#22B858" value={currentUser.lessonsCompleted} label="Lessons" />
        </View>

        <Card className="mt-5 border-0 bg-primary-600" elevation="md">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="text-sm font-medium text-primary-100">{dailyChallenge.title}</Text>
              <Text className="mt-1 text-lg font-bold text-white">{dailyChallenge.subtitle}</Text>
            </View>
            <Badge tone="accent">+{dailyChallenge.xp} XP</Badge>
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title="Your Path" />
        </View>

        <View className="mt-3 gap-4">
          {learningPath.map((unit) => (
            <Card key={unit.id} elevation="sm">
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-bold text-gray-900">{unit.title}</Text>
                <Text className="text-xs font-semibold text-gray-400">
                  {Math.round(unit.progress * 100)}%
                </Text>
              </View>
              <ProgressBar progress={unit.progress} className="mt-3" />
              <View className="mt-4 gap-3">
                {unit.lessons.map((lesson) => {
                  const iconMeta = LESSON_STATUS_ICON[lesson.status];
                  return (
                    <View key={lesson.id} className="flex-row items-center gap-3">
                      <Ionicons name={iconMeta.name} size={20} color={iconMeta.color} />
                      <Text
                        className={
                          lesson.status === 'locked'
                            ? 'flex-1 text-sm font-medium text-gray-400'
                            : 'flex-1 text-sm font-medium text-gray-800'
                        }
                      >
                        {lesson.title}
                      </Text>
                      <Text className="text-xs font-semibold text-gray-400">+{lesson.xp} XP</Text>
                    </View>
                  );
                })}
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
