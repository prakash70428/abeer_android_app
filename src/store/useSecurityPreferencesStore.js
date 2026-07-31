import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSecurityPreferencesStore = create(
  persist(
    (set) => ({
      biometricLockEnabled: false,
      setBiometricLockEnabled: (value) => set({ biometricLockEnabled: value }),
    }),
    {
      name: 'security-preferences-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
