import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card, Avatar, ListRow, OptionSheet } from '../../src/components/ui';
import { currentUser, achievements, staticSettingsMenu } from '../../src/constants/mockData';
import { useThemeStore } from '../../src/store/useThemeStore';
import { useLocaleStore } from '../../src/store/useLocaleStore';

export default function ProfileScreen() {
  const { t } = useTranslation();
  const { mode, setMode } = useThemeStore();
  const { language, setLanguage } = useLocaleStore();
  const [activeSheet, setActiveSheet] = useState(null); // null | 'theme' | 'language'

  const themeOptions = [
    { label: t('profile.light'), value: 'light' },
    { label: t('profile.dark'), value: 'dark' },
    { label: t('profile.system'), value: 'system' },
  ];
  const languageOptions = [
    { label: t('profile.english'), value: 'en' },
    { label: t('profile.hindi'), value: 'hi' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center pt-screenY">
          <Avatar name={currentUser.name} size="lg" />
          <Text className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-50">{currentUser.name}</Text>
          <Text className="text-sm font-regular text-gray-500 dark:text-gray-400">
            {currentUser.league} · Rank #{currentUser.rank}
          </Text>
        </View>

        <Card className="mt-5 flex-row" elevation="sm">
          <View className="flex-1 items-center border-r border-gray-100 dark:border-gray-700">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{currentUser.xp}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('learn.totalXp')}</Text>
          </View>
          <View className="flex-1 items-center border-r border-gray-100 dark:border-gray-700">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{currentUser.streak}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('learn.dayStreak')}</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">{currentUser.lessonsCompleted}</Text>
            <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('learn.lessons')}</Text>
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title={t('profile.achievements')} />
        </View>
        <View className="mt-3 flex-row flex-wrap gap-3">
          {achievements.map((achievement) => (
            <View
              key={achievement.id}
              className={
                achievement.unlocked
                  ? 'w-[47%] items-center rounded-2xl border border-accent-500 bg-accent-50 p-4 dark:bg-accent-500/10'
                  : 'w-[47%] items-center rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'
              }
            >
              <Ionicons
                name={achievement.icon}
                size={24}
                color={achievement.unlocked ? '#E0A100' : '#C3C3CC'}
              />
              <Text
                className={
                  achievement.unlocked
                    ? 'mt-2 text-center text-xs font-semibold text-gray-900 dark:text-gray-50'
                    : 'mt-2 text-center text-xs font-semibold text-gray-400'
                }
              >
                {achievement.label}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-6">
          <SectionHeader title={t('profile.settings')} />
        </View>
        <Card className="mt-3" elevation="sm">
          <ListRow
            left={<Ionicons name="moon-outline" size={20} color="#5B3BDB" />}
            title={t('profile.darkMode')}
            subtitle={themeOptions.find((option) => option.value === mode)?.label}
            onPress={() => setActiveSheet('theme')}
            className="border-b border-gray-100 dark:border-gray-700"
          />
          <ListRow
            left={<Ionicons name="language-outline" size={20} color="#5B3BDB" />}
            title={t('profile.language')}
            subtitle={languageOptions.find((option) => option.value === language)?.label}
            onPress={() => setActiveSheet('language')}
            className="border-b border-gray-100 dark:border-gray-700"
          />
          {staticSettingsMenu.map((item, index) => (
            <ListRow
              key={item.titleKey}
              left={<Ionicons name={item.icon} size={20} color="#5B3BDB" />}
              title={t(item.titleKey)}
              onPress={() => {}}
              className={index !== staticSettingsMenu.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}
            />
          ))}
        </Card>
      </ScrollView>

      <OptionSheet
        visible={activeSheet === 'theme'}
        title={t('profile.darkMode')}
        options={themeOptions}
        selectedValue={mode}
        onSelect={setMode}
        onClose={() => setActiveSheet(null)}
      />
      <OptionSheet
        visible={activeSheet === 'language'}
        title={t('profile.language')}
        options={languageOptions}
        selectedValue={language}
        onSelect={setLanguage}
        onClose={() => setActiveSheet(null)}
      />
    </SafeAreaView>
  );
}
