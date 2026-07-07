import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorScheme } from 'nativewind';

// NativeWind's `colorScheme` is its own runtime store, separate from
// Zustand's persisted state — setting our `mode` here does nothing to the
// actual UI unless we also call colorScheme.set(). Keeping both in sync in
// one place (this store) means every screen just reads `mode`/`setMode`
// and never has to think about NativeWind directly.
export const useThemeStore = create(
  persist(
    (set) => ({
      mode: 'system', // 'light' | 'dark' | 'system'
      setMode: (mode) => {
        colorScheme.set(mode);
        set({ mode });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // AsyncStorage reads are async, so on cold start NativeWind is still
      // showing whatever the OS reported until this rehydration callback
      // fires — this replays the user's saved preference once it arrives.
      onRehydrateStorage: () => (state) => {
        if (state?.mode) {
          colorScheme.set(state.mode);
        }
      },
    },
  ),
);
