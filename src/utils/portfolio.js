// Portfolio math lives here, not in the screen component — when the real
// backend arrives, this function's input shape (holdings + cashBalance) is
// exactly what the API will return, so the screen doesn't change at all,
// only where the data comes from does.
export function computePortfolioSummary(portfolio) {
  const holdings = portfolio.holdings.map((holding) => {
    const investedValue = holding.qty * holding.avgPrice;
    const currentValue = holding.qty * holding.ltp;
    const gain = currentValue - investedValue;
    const gainPct = investedValue ? (gain / investedValue) * 100 : 0;
    return { ...holding, investedValue, currentValue, gain, gainPct };
  });

  const totalInvested = holdings.reduce((sum, h) => sum + h.investedValue, 0);
  const totalCurrent = holdings.reduce((sum, h) => sum + h.currentValue, 0);
  const totalGain = totalCurrent - totalInvested;
  const totalGainPct = totalInvested ? (totalGain / totalInvested) * 100 : 0;

  return {
    holdings,
    totalInvested,
    totalCurrent,
    totalGain,
    totalGainPct,
    netWorth: totalCurrent + portfolio.cashBalance,
  };
}
