import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { cn } from '../../utils/cn';

// Width is animated on the UI thread instead of set directly, so a lesson
// unit that just became 40% complete visibly fills in rather than
// snapping — the fill is what actually reads as "the app responded to
// what I did," a static bar reads as decoration.
export function ProgressBar({ progress = 0, className }) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withTiming(pct, { duration: 600 });
  }, [pct]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View className={cn('h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700', className)}>
      <Animated.View className="h-full rounded-full bg-primary-600" style={animatedStyle} />
    </View>
  );
}
