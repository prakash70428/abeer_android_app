import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';
import { useAppFonts } from '../src/hooks/useAppFonts';
import { colors } from '../src/theme';
import '../src/localization/i18n';
// Bare imports so Zustand's persist middleware starts reading AsyncStorage
// the instant the JS bundle loads, not whenever some deep screen first
// happens to call the hook — rehydration is a module-level side effect of
// create(), it doesn't need a component to "use" it to begin.
import '../src/store/useThemeStore';
import '../src/store/useLocaleStore';
import '../global.css';

// Keep the native splash screen visible until fonts are ready — without
// this, the app renders one frame with the system font, then swaps to
// Plus Jakarta Sans, producing a visible "flash of unstyled text."
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useAppFonts();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <Stack
          screenOptions={{
            headerShown: false,
            headerTintColor: colors.primary[600],
            headerStyle: { backgroundColor: isDark ? colors.gray[900] : colors.gray[0] },
            headerShadowVisible: false,
            headerTitleStyle: { fontFamily: 'PlusJakartaSans_600SemiBold' },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="leaderboard/[id]"
            options={{ headerShown: true, headerBackTitle: 'Back' }}
          />
          <Stack.Screen
            name="portfolio/[symbol]"
            options={{ headerShown: true, headerBackTitle: 'Back' }}
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
