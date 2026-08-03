import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { portfolio as seedPortfolio } from '../constants/mockData';

// Live price (ltp) is intentionally NOT stored here — it comes from
// priceHistory at read time. Persisting it would freeze every holding's
// price at whatever it was on first install, which is exactly the "nothing
// ever moves" bug this store replaces.
export const usePortfolioStore = create(
  persist(
    (set, get) => ({
      cashBalance: seedPortfolio.cashBalance,
      holdings: seedPortfolio.holdings.map(({ symbol, name, qty, avgPrice }) => ({
        symbol,
        name,
        qty,
        avgPrice,
      })),

      buyStock: (symbol, name, qty, price) => {
        const cost = qty * price;
        if (qty <= 0 || cost > get().cashBalance) {
          return { success: false, reason: 'insufficient-funds' };
        }
        set((state) => {
          const existing = state.holdings.find((h) => h.symbol === symbol);
          const holdings = existing
            ? state.holdings.map((h) => {
                if (h.symbol !== symbol) return h;
                const totalQty = h.qty + qty;
                const totalCost = h.qty * h.avgPrice + cost;
                return { ...h, qty: totalQty, avgPrice: totalCost / totalQty };
              })
            : [...state.holdings, { symbol, name, qty, avgPrice: price }];
          return { holdings, cashBalance: state.cashBalance - cost };
        });
        return { success: true };
      },

      sellStock: (symbol, qty, price) => {
        const holding = get().holdings.find((h) => h.symbol === symbol);
        if (!holding || qty <= 0 || qty > holding.qty) {
          return { success: false, reason: 'insufficient-shares' };
        }
        set((state) => ({
          holdings:
            qty === holding.qty
              ? state.holdings.filter((h) => h.symbol !== symbol)
              : state.holdings.map((h) => (h.symbol === symbol ? { ...h, qty: h.qty - qty } : h)),
          cashBalance: state.cashBalance + qty * price,
        }));
        return { success: true };
      },
    }),
    {
      name: 'portfolio-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
