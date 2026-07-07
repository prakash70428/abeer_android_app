import { Modal, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';

// One reusable bottom sheet for any "pick one of a few options" setting —
// Dark Mode and Language both need identical UX (tap row, see options,
// pick one, sheet closes), so this is written once and configured by props
// rather than copy-pasted per setting.
export function OptionSheet({ visible, title, options, selectedValue, onSelect, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable className="flex-1 justify-end bg-black/40" onPress={onClose}>
        {/* This inner Pressable's own onPress claims the touch responder
            before it can bubble to the backdrop above, which is what stops
            a tap on the sheet itself from closing it. */}
        <Pressable onPress={() => {}}>
          <Card className="rounded-b-none rounded-t-3xl border-0 dark:bg-gray-800" elevation="lg">
            <Text className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-50">{title}</Text>
            {options.map((option) => {
              const isSelected = option.value === selectedValue;
              return (
                <Pressable
                  key={option.value}
                  onPress={() => {
                    onSelect(option.value);
                    onClose();
                  }}
                  className="flex-row items-center justify-between border-t border-gray-100 py-3 dark:border-gray-700"
                >
                  <Text className="text-base font-medium text-gray-900 dark:text-gray-50">
                    {option.label}
                  </Text>
                  {isSelected ? <Ionicons name="checkmark-circle" size={20} color="#5B3BDB" /> : null}
                </Pressable>
              );
            })}
          </Card>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
