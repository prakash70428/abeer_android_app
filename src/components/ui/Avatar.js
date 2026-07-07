import { View, Text, Image } from 'react-native';
import { cn } from '../../utils/cn';

const SIZES = { sm: 32, md: 40, lg: 72 };

// Falls back to initials when there's no image URL — every mock/new user in
// this app has no profile photo yet, so the initials path is the common
// case, not an edge case.
export function Avatar({ name, uri, size = 'md', className }) {
  const px = SIZES[size];

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={{ width: px, height: px, borderRadius: px / 2 }}
        className={className}
      />
    );
  }

  const initials = name
    ? name.trim().split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  return (
    <View
      style={{ width: px, height: px, borderRadius: px / 2 }}
      className={cn('items-center justify-center bg-primary-100', className)}
    >
      <Text className="font-bold text-primary-700" style={{ fontSize: px * 0.38 }}>
        {initials}
      </Text>
    </View>
  );
}
