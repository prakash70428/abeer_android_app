import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  ScreenHeader,
  SectionHeader,
  StatTile,
  Card,
  Badge,
  ProgressBar,
  AnimatedPressable,
} from '../../src/components/ui';
import { currentUser, learningPath, dailyChallenge } from '../../src/constants/mockData';
import { useProgressStore } from '../../src/store/useProgressStore';
import { getLessonStatus, getUnitProgress } from '../../src/utils/learningPath';

const LESSON_STATUS_ICON = {
  completed: { name: 'checkmark-circle', color: '#22B858' },
  in_progress: { name: 'play-circle', color: '#5B3BDB' },
  locked: { name: 'lock-closed', color: '#C3C3CC' },
};

export default function LearnScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-screenY">
          <ScreenHeader title={t('tabs.learn')} subtitle={t('learn.subtitle')} />
        </View>

        <Animated.View entering={FadeInDown.duration(400)} className="mt-5 flex-row gap-3">
          <StatTile icon="flame" iconColor="#E0A100" value={currentUser.streak} label={t('learn.dayStreak')} />
          <StatTile icon="flash" iconColor="#5B3BDB" value={currentUser.xp} label={t('learn.totalXp')} />
          <StatTile icon="book" iconColor="#22B858" value={currentUser.lessonsCompleted} label={t('learn.lessons')} />
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(400).delay(80)}>
          <Card className="mt-5 border-0 bg-primary-600" elevation="md">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-sm font-medium text-primary-100">{dailyChallenge.title}</Text>
                <Text className="mt-1 text-lg font-bold text-white">{dailyChallenge.subtitle}</Text>
              </View>
              <Badge tone="accent">+{dailyChallenge.xp} XP</Badge>
            </View>
          </Card>
        </Animated.View>

        <View className="mt-6">
          <SectionHeader title={t('learn.yourPath')} />
        </View>

        <View className="mt-3 gap-4">
          {learningPath.map((unit, index) => {
            const unitProgress = getUnitProgress(unit, completedLessonIds);
            return (
              <Animated.View key={unit.id} entering={FadeInDown.duration(400).delay(120 + index * 80)}>
                <Card elevation="sm">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-base font-bold text-gray-900 dark:text-gray-50">{unit.title}</Text>
                    <Text className="text-xs font-semibold text-gray-400">
                      {Math.round(unitProgress * 100)}%
                    </Text>
                  </View>
                  <ProgressBar progress={unitProgress} className="mt-3" />
                  <View className="mt-4 gap-3">
                    {unit.lessons.map((lesson, lessonIndex) => {
                      const status = getLessonStatus(unit, lessonIndex, completedLessonIds);
                      const iconMeta = LESSON_STATUS_ICON[status];
                      const isLocked = status === 'locked';
                      return (
                        <AnimatedPressable
                          key={lesson.id}
                          onPress={() => {
                            if (isLocked) return;
                            router.push(`/lesson/${lesson.id}`);
                          }}
                          className="flex-row items-center gap-3"
                        >
                          <Ionicons name={iconMeta.name} size={20} color={iconMeta.color} />
                          <Text
                            className={
                              isLocked
                                ? 'flex-1 text-sm font-medium text-gray-400'
                                : 'flex-1 text-sm font-medium text-gray-800 dark:text-gray-100'
                            }
                          >
                            {lesson.title}
                          </Text>
                          <Text className="text-xs font-semibold text-gray-400">+{lesson.xp} XP</Text>
                        </AnimatedPressable>
                      );
                    })}
                  </View>
                </Card>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
