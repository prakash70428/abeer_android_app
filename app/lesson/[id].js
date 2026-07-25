import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Badge } from '../../src/components/ui';
import { learningPath } from '../../src/constants/mockData';

const STATUS_TONE = {
  completed: 'success',
  in_progress: 'accent',
  locked: 'neutral',
};

const STATUS_LABEL = {
  completed: 'Completed',
  in_progress: 'In Progress',
  locked: 'Not Started',
};

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams();
  const unit = learningPath.find((path) => path.lessons.some((lesson) => lesson.id === id));
  const lesson = unit?.lessons.find((item) => item.id === id);

  if (!lesson) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: unit.title }} />
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-6">
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">{unit.title}</Text>
          <Text className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-50">{lesson.title}</Text>
          <View className="mt-3 flex-row items-center gap-2">
            <Badge tone={STATUS_TONE[lesson.status]}>{STATUS_LABEL[lesson.status]}</Badge>
            <Badge tone="neutral">+{lesson.xp} XP</Badge>
          </View>
        </View>

        <View className="mt-6 gap-4">
          {(lesson.content ?? []).map((paragraph, index) => (
            <Text
              key={index}
              className="text-base leading-7 text-gray-700 dark:text-gray-200"
            >
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
