import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScreenHeader, SectionHeader, Card, Badge, AnimatedPressable } from '../../src/components/ui';
import { getLatestPrice } from '../../src/constants/mockData';
import { usePortfolioStore } from '../../src/store/usePortfolioStore';
import { computePortfolioSummary } from '../../src/utils/portfolio';
import { formatCurrency, formatSigned } from '../../src/utils/format';

export default function PortfolioScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const holdings = usePortfolioStore((state) => state.holdings);
  const cashBalance = usePortfolioStore((state) => state.cashBalance);
  const holdingsWithLtp = holdings.map((holding) => ({
    ...holding,
    ltp: getLatestPrice(holding.symbol) ?? holding.avgPrice,
  }));
  const summary = computePortfolioSummary({ holdings: holdingsWithLtp, cashBalance });
  const isPositive = summary.totalGain >= 0;

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-screenY">
          <ScreenHeader title={t('tabs.portfolio')} subtitle={t('portfolio.subtitle')} />
        </View>

        <Card className="mt-5" elevation="md">
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('portfolio.netWorth')}</Text>
          <Text className="mt-1 text-4xl font-bold text-gray-900 dark:text-gray-50">
            {formatCurrency(summary.netWorth)}
          </Text>
          <View className="mt-3 flex-row items-center gap-2">
            <Badge tone={isPositive ? 'success' : 'danger'}>
              {formatSigned(summary.totalGainPct, 1)}%
            </Badge>
            <Text className="text-sm font-medium text-gray-400">
              {formatSigned(summary.totalGain)} {t('portfolio.overall')}
            </Text>
          </View>
          <View className="mt-4 flex-row justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
            <View>
              <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('portfolio.invested')}</Text>
              <Text className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-50">
                {formatCurrency(summary.totalInvested)}
              </Text>
            </View>
            <View>
              <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">{t('portfolio.cashBalance')}</Text>
              <Text className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-50">
                {formatCurrency(cashBalance)}
              </Text>
            </View>
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title={t('portfolio.holdings')} />
        </View>

        <View className="mt-3 gap-3">
          {summary.holdings.length === 0 ? (
            <Card elevation="sm">
              <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t('portfolio.noHoldings')}
              </Text>
            </Card>
          ) : null}
          {summary.holdings.map((holding) => {
            const positive = holding.gain >= 0;
            return (
              <AnimatedPressable
                key={holding.symbol}
                onPress={() => router.push(`/portfolio/${holding.symbol}`)}
              >
                <Card elevation="sm" className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-base font-bold text-gray-900 dark:text-gray-50">{holding.symbol}</Text>
                    <Text className="text-xs font-regular text-gray-500 dark:text-gray-400">
                      {holding.qty} shares · avg {formatCurrency(holding.avgPrice)}
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      {formatCurrency(holding.currentValue)}
                    </Text>
                    <Text
                      className={
                        positive
                          ? 'text-xs font-semibold text-success-600 dark:text-success-400'
                          : 'text-xs font-semibold text-danger-600 dark:text-danger-400'
                      }
                    >
                      {formatSigned(holding.gainPct, 1)}%
                    </Text>
                  </View>
                </Card>
              </AnimatedPressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
