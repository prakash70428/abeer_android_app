import { useState } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LineChart } from 'react-native-gifted-charts';
import { Card, Badge, Button, TradeSheet } from '../../src/components/ui';
import { getLatestPrice, priceHistory } from '../../src/constants/mockData';
import { usePortfolioStore } from '../../src/store/usePortfolioStore';
import { formatCurrency, formatSigned } from '../../src/utils/format';
import { colors } from '../../src/theme';

export default function StockDetailScreen() {
  const { t } = useTranslation();
  const { symbol } = useLocalSearchParams();
  const holdings = usePortfolioStore((state) => state.holdings);
  const cashBalance = usePortfolioStore((state) => state.cashBalance);
  const buyStock = usePortfolioStore((state) => state.buyStock);
  const sellStock = usePortfolioStore((state) => state.sellStock);

  const holding = holdings.find((item) => item.symbol === symbol);
  const ltp = getLatestPrice(symbol) ?? holding?.avgPrice ?? 0;
  const history = priceHistory[symbol] ?? [];
  const chartData = history.map((value) => ({ value }));
  const changePct = history.length > 1 ? ((history[history.length - 1] - history[0]) / history[0]) * 100 : 0;
  const isPositive = changePct >= 0;
  // gifted-charts' own `adjustToWidth` falls back to the full screen width
  // when it can't measure a parent, not this Card's actual (padded) width —
  // measuring the wrapper ourselves and passing an explicit `width` is the
  // only way to make the chart stop overflowing the card on web.
  const [chartWidth, setChartWidth] = useState(0);
  const [tradeMode, setTradeMode] = useState(null); // 'buy' | 'sell' | null

  function handleConfirmTrade(qty) {
    if (tradeMode === 'buy') {
      const result = buyStock(symbol, holding?.name ?? symbol, qty, ltp);
      setTradeMode(null);
      if (result.success) {
        Alert.alert(t('portfolio.orderPlaced'), t('portfolio.boughtMessage', { qty, symbol }));
      }
    } else if (tradeMode === 'sell') {
      const result = sellStock(symbol, qty, ltp);
      setTradeMode(null);
      if (result.success) {
        Alert.alert(t('portfolio.orderPlaced'), t('portfolio.soldMessage', { qty, symbol }));
      }
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={['bottom']}>
      <Stack.Screen options={{ title: symbol }} />
      <ScrollView
        className="flex-1 px-screenX"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-6">
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {holding?.name ?? symbol}
          </Text>
          <Text className="mt-1 text-4xl font-bold text-gray-900 dark:text-gray-50">
            {formatCurrency(ltp)}
          </Text>
          <View className="mt-2">
            <Badge tone={isPositive ? 'success' : 'danger'}>
              {formatSigned(changePct, 1)}% · 30D
            </Badge>
          </View>
        </View>

        <Card
          className="mt-5 items-center overflow-hidden px-2"
          elevation="sm"
          onLayout={(event) => setChartWidth(event.nativeEvent.layout.width)}
        >
          {chartWidth > 0 ? (
            <LineChart
              data={chartData}
              color={colors.primary[600]}
              thickness={3}
              areaChart
              startFillColor={colors.primary[400]}
              endFillColor={colors.primary[50]}
              startOpacity={0.35}
              endOpacity={0.02}
              hideDataPoints
              hideRules
              hideYAxisText
              yAxisLabelWidth={0}
              xAxisThickness={0}
              yAxisThickness={0}
              height={180}
              width={chartWidth - 16}
              curved
              initialSpacing={0}
              adjustToWidth
            />
          ) : (
            <View style={{ height: 180 }} />
          )}
        </Card>

        {holding ? (
          <Card className="mt-5" elevation="sm">
            <Text className="text-base font-bold text-gray-900 dark:text-gray-50">
              {t('portfolio.yourHolding')}
            </Text>
            <View className="mt-3 flex-row justify-between">
              <View>
                <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {t('portfolio.quantity')}
                </Text>
                <Text className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-50">
                  {holding.qty}
                </Text>
              </View>
              <View>
                <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {t('portfolio.avgPrice')}
                </Text>
                <Text className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-50">
                  {formatCurrency(holding.avgPrice)}
                </Text>
              </View>
              <View>
                <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {t('portfolio.currentValue')}
                </Text>
                <Text className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-50">
                  {formatCurrency(holding.qty * ltp)}
                </Text>
              </View>
            </View>
          </Card>
        ) : null}

        <View className="mt-6 flex-row gap-3">
          <Button
            variant="danger"
            className="flex-1"
            disabled={!holding}
            onPress={() => setTradeMode('sell')}
          >
            {t('portfolio.sell')}
          </Button>
          <Button variant="primary" className="flex-1" onPress={() => setTradeMode('buy')}>
            {t('portfolio.buyMore')}
          </Button>
        </View>
      </ScrollView>

      <TradeSheet
        visible={tradeMode !== null}
        mode={tradeMode ?? 'buy'}
        symbol={symbol}
        price={ltp}
        maxQty={tradeMode === 'sell' ? holding?.qty ?? 0 : Math.max(1, Math.floor(cashBalance / (ltp || 1)))}
        availableCash={cashBalance}
        onConfirm={handleConfirmTrade}
        onClose={() => setTradeMode(null)}
      />
    </SafeAreaView>
  );
}
