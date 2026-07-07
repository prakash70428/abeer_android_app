// Indian Rupee grouping (₹1,50,000 not ₹150,000) — 'en-IN' locale handles the
// lakh/crore digit grouping automatically, which manual string splitting
// would get wrong.
export function formatCurrency(value) {
  return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

// Portfolio gain/loss always needs an explicit "+" — a bare positive number
// reads as ambiguous next to a red/green color, the sign removes the doubt.
export function formatSigned(value, decimals = 0) {
  const rounded = Number(value.toFixed(decimals));
  const sign = rounded >= 0 ? '+' : '';
  return `${sign}${rounded.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}
