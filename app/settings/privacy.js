import { useState } from 'react';
import { ScrollView, View, Text, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Card, SectionHeader, ListRow } from '../../src/components/ui';
import { useSecurityPreferencesStore } from '../../src/store/useSecurityPreferencesStore';
import { colors } from '../../src/theme';

const LEGAL_SECTIONS = [
  {
    key: 'privacy-policy',
    title: 'Privacy Policy',
    body: 'We store your name, XP, streak, lesson progress, and virtual portfolio trades to run the app and show your stats. Your virtual portfolio uses simulated money only — we never ask for or store real bank details, card numbers, or brokerage credentials. We do not sell your data to third parties. You can request a copy or deletion of your data at any time from this screen.',
  },
  {
    key: 'terms-of-service',
    title: 'Terms of Service',
    body: 'This app is an educational tool. All trades, balances, and gains shown in the Portfolio tab are simulated for learning purposes and carry no real financial value or risk. Nothing in the app is investment advice. Lesson content is provided for general education about how markets work.',
  },
];

export default function PrivacySecurityScreen() {
  const { biometricLockEnabled, setBiometricLockEnabled } = useSecurityPreferencesStore();
  const [expandedSection, setExpandedSection] = useState(null);

  const handleDownloadData = () => {
    Alert.alert('Request received', "We'll email you a copy of your data shortly.");
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete account?',
      'This permanently removes your progress, XP, and portfolio history. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {} },
      ],
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: 'Privacy & Security' }} />
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-5">
          <SectionHeader title="Security" />
        </View>
        <Card className="mt-3" elevation="sm">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="text-base font-medium text-gray-900 dark:text-gray-50">App Lock</Text>
              <Text className="mt-0.5 text-sm font-regular text-gray-500 dark:text-gray-400">
                Require Face ID / fingerprint to open the app
              </Text>
            </View>
            <Switch
              value={biometricLockEnabled}
              onValueChange={setBiometricLockEnabled}
              trackColor={{ false: colors.gray[300], true: colors.primary[500] }}
              thumbColor="#FFFFFF"
            />
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title="Your Data" />
        </View>
        <Card className="mt-3" elevation="sm">
          <ListRow
            left={<Ionicons name="download-outline" size={20} color="#5B3BDB" />}
            title="Download My Data"
            subtitle="Get a copy of your account and learning data"
            onPress={handleDownloadData}
            className="border-b border-gray-100 dark:border-gray-700"
          />
          <ListRow
            left={<Ionicons name="trash-outline" size={20} color={colors.danger[500]} />}
            title="Delete Account"
            subtitle="Permanently remove your account and progress"
            onPress={handleDeleteAccount}
          />
        </Card>

        <View className="mt-6">
          <SectionHeader title="Legal" />
        </View>
        <Card className="mt-3" elevation="sm">
          {LEGAL_SECTIONS.map((section, index) => {
            const isExpanded = expandedSection === section.key;
            return (
              <View
                key={section.key}
                className={
                  index !== LEGAL_SECTIONS.length - 1
                    ? 'border-b border-gray-100 py-3 dark:border-gray-700'
                    : 'py-3'
                }
              >
                <ListRow
                  title={section.title}
                  right={
                    <Ionicons
                      name={isExpanded ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color="#9CA3AF"
                    />
                  }
                  onPress={() => setExpandedSection(isExpanded ? null : section.key)}
                  className="py-0"
                />
                {isExpanded ? (
                  <Text className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {section.body}
                  </Text>
                ) : null}
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
