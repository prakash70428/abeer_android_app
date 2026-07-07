import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader, SectionHeader, Card, Badge } from '../../src/components/ui';
import { portfolio } from '../../src/constants/mockData';
import { computePortfolioSummary } from '../../src/utils/portfolio';
import { formatCurrency, formatSigned } from '../../src/utils/format';

export default function PortfolioScreen() {
  const summary = computePortfolioSummary(portfolio);
  const isPositive = summary.totalGain >= 0;

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-screenY">
          <ScreenHeader title="Portfolio" subtitle="Your virtual holdings" />
        </View>

        <Card className="mt-5" elevation="md">
          <Text className="text-sm font-medium text-gray-500">Net worth</Text>
          <Text className="mt-1 text-4xl font-bold text-gray-900">
            {formatCurrency(summary.netWorth)}
          </Text>
          <View className="mt-3 flex-row items-center gap-2">
            <Badge tone={isPositive ? 'success' : 'danger'}>
              {formatSigned(summary.totalGainPct, 1)}%
            </Badge>
            <Text className="text-sm font-medium text-gray-400">
              {formatSigned(summary.totalGain)} overall
            </Text>
          </View>
          <View className="mt-4 flex-row justify-between border-t border-gray-100 pt-4">
            <View>
              <Text className="text-xs font-medium text-gray-500">Invested</Text>
              <Text className="mt-0.5 text-base font-semibold text-gray-900">
                {formatCurrency(summary.totalInvested)}
              </Text>
            </View>
            <View>
              <Text className="text-xs font-medium text-gray-500">Cash balance</Text>
              <Text className="mt-0.5 text-base font-semibold text-gray-900">
                {formatCurrency(portfolio.cashBalance)}
              </Text>
            </View>
          </View>
        </Card>

        <View className="mt-6">
          <SectionHeader title="Holdings" />
        </View>

        <View className="mt-3 gap-3">
          {summary.holdings.map((holding) => {
            const positive = holding.gain >= 0;
            return (
              <Card key={holding.symbol} elevation="sm" className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-base font-bold text-gray-900">{holding.symbol}</Text>
                  <Text className="text-xs font-regular text-gray-500">
                    {holding.qty} shares · avg {formatCurrency(holding.avgPrice)}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="text-base font-semibold text-gray-900">
                    {formatCurrency(holding.currentValue)}
                  </Text>
                  <Text
                    className={
                      positive
                        ? 'text-xs font-semibold text-success-600'
                        : 'text-xs font-semibold text-danger-600'
                    }
                  >
                    {formatSigned(holding.gainPct, 1)}%
                  </Text>
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
