import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useNotificationPreferencesStore = create(
  persist(
    (set) => ({
      pushEnabled: true,
      dailyReminder: true,
      streakAlerts: true,
      lessonRecommendations: true,
      marketNews: false,
      achievementUnlocks: true,
      setPreference: (key, value) => set({ [key]: value }),
    }),
    {
      name: 'notification-preferences-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
