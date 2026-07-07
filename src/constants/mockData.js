// Stand-in for the future backend response shapes. When real APIs exist,
// each of these gets replaced by a React Query hook returning the same
// shape — screens are written against this contract now on purpose.

export const currentUser = {
  name: 'Abeer Katyal',
  xp: 2450,
  streak: 7,
  rank: 3,
  league: 'Gold League',
  lessonsCompleted: 34,
};

export const dailyChallenge = {
  title: "Today's Challenge",
  subtitle: 'Identify 5 bullish candlestick patterns',
  xp: 40,
};

export const learningPath = [
  {
    id: 'unit-1',
    title: 'Market Basics',
    progress: 1,
    lessons: [
      { id: 'l1', title: 'What is a Stock Market?', status: 'completed', xp: 20 },
      { id: 'l2', title: 'Understanding Shares', status: 'completed', xp: 20 },
      { id: 'l3', title: 'Stock Exchanges: NSE & BSE', status: 'completed', xp: 20 },
    ],
  },
  {
    id: 'unit-2',
    title: 'Reading the Market',
    progress: 0.4,
    lessons: [
      { id: 'l4', title: 'Candlestick Charts', status: 'in_progress', xp: 25 },
      { id: 'l5', title: 'Market Indices: Sensex & Nifty', status: 'locked', xp: 25 },
      { id: 'l6', title: 'Bulls vs Bears', status: 'locked', xp: 25 },
    ],
  },
  {
    id: 'unit-3',
    title: 'Fundamental Analysis',
    progress: 0,
    lessons: [
      { id: 'l7', title: 'Reading a Balance Sheet', status: 'locked', xp: 30 },
      { id: 'l8', title: 'P/E Ratio Explained', status: 'locked', xp: 30 },
    ],
  },
];

export const portfolio = {
  cashBalance: 42500,
  holdings: [
    { symbol: 'RELIANCE', name: 'Reliance Industries', qty: 5, avgPrice: 2450, ltp: 2610.5 },
    { symbol: 'TCS', name: 'Tata Consultancy Services', qty: 3, avgPrice: 3600, ltp: 3540.2 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', qty: 10, avgPrice: 1550, ltp: 1618.75 },
    { symbol: 'INFY', name: 'Infosys', qty: 8, avgPrice: 1420, ltp: 1465.9 },
  ],
};

export const leaderboard = {
  league: 'Gold League',
  resetsIn: '2 days',
  users: [
    { rank: 1, name: 'Priya Sharma', xp: 3120 },
    { rank: 2, name: 'Rohan Mehta', xp: 2870 },
    { rank: 3, name: 'Abeer Katyal', xp: 2450, isCurrentUser: true },
    { rank: 4, name: 'Sana Iqbal', xp: 2210 },
    { rank: 5, name: 'Karan Verma', xp: 1980 },
    { rank: 6, name: 'Neha Gupta', xp: 1740 },
  ],
};

export const achievements = [
  { id: 'a1', icon: 'flame', label: '7-Day Streak', unlocked: true },
  { id: 'a2', icon: 'trophy', label: 'Top 3 Finish', unlocked: true },
  { id: 'a3', icon: 'trending-up', label: 'First Trade', unlocked: true },
  { id: 'a4', icon: 'ribbon', label: '30-Day Streak', unlocked: false },
];

export const settingsMenu = [
  { icon: 'moon-outline', title: 'Dark Mode', subtitle: 'Off' },
  { icon: 'notifications-outline', title: 'Notifications' },
  { icon: 'language-outline', title: 'Language', subtitle: 'English' },
  { icon: 'shield-checkmark-outline', title: 'Privacy & Security' },
  { icon: 'help-circle-outline', title: 'Help & Support' },
];
