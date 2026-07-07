import { Pressable, Text, ActivityIndicator } from 'react-native';
import { cn } from '../../utils/cn';

const VARIANTS = {
  primary: { container: 'bg-primary-600 active:bg-primary-700', label: 'text-white' },
  secondary: { container: 'bg-primary-50 active:bg-primary-100', label: 'text-primary-700' },
  ghost: { container: 'bg-transparent active:bg-gray-100', label: 'text-gray-900' },
  danger: { container: 'bg-danger-500 active:bg-danger-600', label: 'text-white' },
};

const SIZES = {
  sm: { container: 'rounded-xl px-4 py-2', label: 'text-sm font-semibold' },
  md: { container: 'rounded-2xl px-5 py-3', label: 'text-base font-semibold' },
};

// A string child renders as styled <Text> automatically — most call sites
// just pass a label. Passing a custom node (icon + text row) is still
// supported for the cases that need it.
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onPress,
  disabled,
  loading,
  fullWidth,
  className,
}) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={cn(
        'items-center justify-center',
        v.container,
        s.container,
        fullWidth && 'w-full',
        isDisabled && 'opacity-50',
        className,
      )}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' || variant === 'danger' ? '#FFFFFF' : '#5B3BDB'} />
      ) : typeof children === 'string' ? (
        <Text className={cn(v.label, s.label)}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
