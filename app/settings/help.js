import { useState } from 'react';
import { ScrollView, View, Text, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Card, SectionHeader, ListRow } from '../../src/components/ui';

const SUPPORT_EMAIL = 'support@vestedapp.com';

const FAQ_ITEMS = [
  {
    key: 'faq-xp',
    question: 'What is XP and how do I earn it?',
    answer: 'XP (experience points) is earned by completing lessons and daily challenges. It tracks your overall learning progress and ranks you on the leaderboard.',
  },
  {
    key: 'faq-streak',
    question: 'How does my streak work?',
    answer: 'Your streak counts consecutive days you complete at least one lesson. Missing a full day resets it back to zero, so a Daily Reminder can help you keep it alive.',
  },
  {
    key: 'faq-lock',
    question: 'Why is a lesson locked?',
    answer: 'Lessons unlock one at a time within each unit. Finish the current lesson and tap "Mark as Complete" to unlock the next one.',
  },
  {
    key: 'faq-portfolio',
    question: 'Is the money in my Portfolio real?',
    answer: 'No. The Portfolio tab uses simulated money so you can practice buying and selling without any real financial risk.',
  },
  {
    key: 'faq-data',
    question: 'Is my data safe?',
    answer: 'Yes. We only store what\'s needed to run your account and progress. See Privacy & Security for full details or to request/delete your data.',
  },
];

export default function HelpSupportScreen() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';

  const openMail = (subject) => {
    const url = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('No email app found', `Reach us directly at ${SUPPORT_EMAIL}`);
    });
  };

  const handleRateApp = () => {
    Alert.alert('Thank you!', 'VestEd isn\'t live on the App Store just yet — we\'ll ask you to rate it the moment it launches.');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: 'Help & Support' }} />
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-5">
          <SectionHeader title="Frequently Asked Questions" />
        </View>
        <Card className="mt-3" elevation="sm">
          {FAQ_ITEMS.map((item, index) => {
            const isExpanded = expandedFaq === item.key;
            return (
              <View
                key={item.key}
                className={
                  index !== FAQ_ITEMS.length - 1
                    ? 'border-b border-gray-100 py-3 dark:border-gray-700'
                    : 'py-3'
                }
              >
                <ListRow
                  title={item.question}
                  right={
                    <Ionicons
                      name={isExpanded ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color="#9CA3AF"
                    />
                  }
                  onPress={() => setExpandedFaq(isExpanded ? null : item.key)}
                  className="py-0"
                />
                {isExpanded ? (
                  <Text className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </Text>
                ) : null}
              </View>
            );
          })}
        </Card>

        <View className="mt-6">
          <SectionHeader title="Get in Touch" />
        </View>
        <Card className="mt-3" elevation="sm">
          <ListRow
            left={<Ionicons name="mail-outline" size={20} color="#5B3BDB" />}
            title="Contact Support"
            subtitle={SUPPORT_EMAIL}
            onPress={() => openMail('VestEd Support Request')}
            className="border-b border-gray-100 dark:border-gray-700"
          />
          <ListRow
            left={<Ionicons name="warning-outline" size={20} color="#5B3BDB" />}
            title="Report a Problem"
            subtitle="Tell us what went wrong"
            onPress={() => openMail('VestEd Bug Report')}
            className="border-b border-gray-100 dark:border-gray-700"
          />
          <ListRow
            left={<Ionicons name="star-outline" size={20} color="#5B3BDB" />}
            title="Rate the App"
            onPress={handleRateApp}
          />
        </Card>

        <Text className="mt-6 text-center text-xs font-regular text-gray-400">
          VestEd v{appVersion}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
