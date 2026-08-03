import { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Card } from './Card';
import { Button } from './Button';
import { formatCurrency } from '../../utils/format';
import { colors } from '../../theme';

// Shared by Buy and Sell — same "pick a quantity, see the total, confirm"
// shape, just different limits and copy. Splitting it into two components
// would only duplicate the stepper/keyboard-avoidance logic below.
export function TradeSheet({ visible, mode, symbol, price, maxQty, availableCash, onConfirm, onClose }) {
  const { t } = useTranslation();
  const [qty, setQty] = useState(1);

  const isBuy = mode === 'buy';
  const total = qty * price;
  const overBudget = isBuy && total > availableCash;
  const canConfirm = qty > 0 && qty <= maxQty && !overBudget;

  function handleClose() {
    setQty(1);
    onClose();
  }

  function handleConfirm() {
    if (!canConfirm) return;
    onConfirm(qty);
    setQty(1);
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={handleClose}>
      <Pressable className="flex-1 justify-end bg-black/40" onPress={handleClose}>
        <Pressable onPress={() => {}}>
          <Card className="rounded-b-none rounded-t-3xl border-0 dark:bg-gray-800" elevation="lg">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-50">
              {isBuy ? t('portfolio.buyStock', { symbol }) : t('portfolio.sellStock', { symbol })}
            </Text>
            <Text className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {formatCurrency(price)} {t('portfolio.perShare')}
            </Text>

            <View className="mt-5 flex-row items-center justify-center gap-6">
              <Pressable
                onPress={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                className="h-11 w-11 items-center justify-center rounded-full bg-gray-100 active:bg-gray-200 dark:bg-gray-700"
              >
                <Ionicons name="remove" size={22} color={colors.gray[600]} />
              </Pressable>
              <Text className="min-w-[48px] text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
                {qty}
              </Text>
              <Pressable
                onPress={() => setQty((q) => Math.min(maxQty, q + 1))}
                disabled={qty >= maxQty}
                className="h-11 w-11 items-center justify-center rounded-full bg-gray-100 active:bg-gray-200 dark:bg-gray-700"
              >
                <Ionicons name="add" size={22} color={colors.gray[600]} />
              </Pressable>
            </View>
            <Text className="mt-2 text-center text-xs font-medium text-gray-400">
              {isBuy
                ? t('portfolio.availableCash', { amount: formatCurrency(availableCash) })
                : t('portfolio.sharesOwned', { qty: maxQty })}
            </Text>

            <View className="mt-5 flex-row items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
              <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {isBuy ? t('portfolio.totalCost') : t('portfolio.totalProceeds')}
              </Text>
              <Text
                className={
                  overBudget
                    ? 'text-lg font-bold text-danger-600 dark:text-danger-400'
                    : 'text-lg font-bold text-gray-900 dark:text-gray-50'
                }
              >
                {formatCurrency(total)}
              </Text>
            </View>
            {overBudget ? (
              <Text className="mt-1 text-xs font-medium text-danger-600 dark:text-danger-400">
                {t('portfolio.insufficientFunds')}
              </Text>
            ) : null}

            <Button
              variant={isBuy ? 'primary' : 'danger'}
              fullWidth
              disabled={!canConfirm}
              onPress={handleConfirm}
              className="mt-5"
            >
              {isBuy ? t('portfolio.confirmBuy') : t('portfolio.confirmSell')}
            </Button>
          </Card>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
