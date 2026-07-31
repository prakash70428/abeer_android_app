import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { learningPath } from '../constants/mockData';

// mockData still hardcodes `status: 'completed'` on the first few lessons of
// each unit as demo seed content. We read that once, here, to seed real
// tracked progress — after this, `lesson.status` in mockData is never read
// again; getLessonStatus() below is the only source of truth going forward.
function seedCompletedLessonIds() {
  const seed = {};
  learningPath.forEach((unit) => {
    unit.lessons.forEach((lesson) => {
      if (lesson.status === 'completed') {
        seed[lesson.id] = true;
      }
    });
  });
  return seed;
}

export const useProgressStore = create(
  persist(
    (set, get) => ({
      completedLessonIds: seedCompletedLessonIds(),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessonIds: { ...state.completedLessonIds, [lessonId]: true },
        })),
      isLessonCompleted: (lessonId) => Boolean(get().completedLessonIds[lessonId]),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
