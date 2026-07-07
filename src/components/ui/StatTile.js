import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';

// The small icon+number+label tile repeated across Learn/Profile — pulled
// into one component the first time it was needed in three places, not
// before, per the "no premature abstraction" rule.
export function StatTile({ icon, iconColor = '#5B3BDB', value, label }) {
  return (
    <Card className="flex-1 items-start gap-2" elevation="sm">
      <Ionicons name={icon} size={20} color={iconColor} />
      <Text className="text-xl font-bold text-gray-900">{value}</Text>
      <Text className="text-xs font-medium text-gray-500">{label}</Text>
    </Card>
  );
}
