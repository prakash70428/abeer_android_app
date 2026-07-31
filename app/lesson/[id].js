import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Badge, Button } from '../../src/components/ui';
import { learningPath } from '../../src/constants/mockData';
import { useProgressStore } from '../../src/store/useProgressStore';
import { getLessonStatus } from '../../src/utils/learningPath';

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
  const router = useRouter();
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const completeLesson = useProgressStore((state) => state.completeLesson);

  const unit = learningPath.find((path) => path.lessons.some((lesson) => lesson.id === id));
  const lessonIndex = unit ? unit.lessons.findIndex((item) => item.id === id) : -1;
  const lesson = lessonIndex >= 0 ? unit.lessons[lessonIndex] : null;

  if (!lesson) {
    return null;
  }

  const status = getLessonStatus(unit, lessonIndex, completedLessonIds);

  if (status === 'locked') {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-screenX dark:bg-gray-900">
        <Stack.Screen options={{ title: unit.title }} />
        <Text className="text-center text-base font-medium text-gray-400">
          Complete the previous lesson to unlock this one.
        </Text>
      </SafeAreaView>
    );
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
            <Badge tone={STATUS_TONE[status]}>{STATUS_LABEL[status]}</Badge>
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

        {status !== 'completed' && (
          <Button
            className="mt-8"
            fullWidth
            onPress={() => {
              completeLesson(lesson.id);
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace('/');
              }
            }}
          >
            Mark as Complete
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
