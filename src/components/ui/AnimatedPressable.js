import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressableBase = Animated.createAnimatedComponent(Pressable);

// A shared value read inside useAnimatedStyle runs the scale transform on
// the UI thread (Reanimated's whole reason to exist) instead of bouncing
// through React state + JS-thread re-renders on every touch — the
// difference between this feeling instant and feeling laggy on a real
// device is exactly this.
export function AnimatedPressable({ children, onPress, className, style }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressableBase
      onPress={onPress}
      onPressIn={() => {
        scale.value = withTiming(0.97, { duration: 100 });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, { duration: 100 });
      }}
      className={className}
      style={[animatedStyle, style]}
    >
      {children}
    </AnimatedPressableBase>
  );
}
