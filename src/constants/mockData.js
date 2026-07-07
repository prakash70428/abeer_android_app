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
    { id: '1', rank: 1, name: 'Priya Sharma', xp: 3120, streak: 21, lessonsCompleted: 58 },
    { id: '2', rank: 2, name: 'Rohan Mehta', xp: 2870, streak: 14, lessonsCompleted: 49 },
    { id: '3', rank: 3, name: 'Abeer Katyal', xp: 2450, streak: 7, lessonsCompleted: 34, isCurrentUser: true },
    { id: '4', rank: 4, name: 'Sana Iqbal', xp: 2210, streak: 9, lessonsCompleted: 31 },
    { id: '5', rank: 5, name: 'Karan Verma', xp: 1980, streak: 5, lessonsCompleted: 27 },
    { id: '6', rank: 6, name: 'Neha Gupta', xp: 1740, streak: 3, lessonsCompleted: 22 },
  ],
};

// One deterministic mock price series per symbol — a static array (rather
// than Math.random()) keeps screenshots and behavior reproducible across
// reloads while still looking like a real, wiggly price chart.
export const priceHistory = {
  RELIANCE: [2410, 2432, 2405, 2450, 2480, 2465, 2500, 2530, 2510, 2545, 2560, 2540, 2575, 2590, 2610.5],
  TCS: [3650, 3680, 3660, 3700, 3690, 3720, 3705, 3680, 3660, 3630, 3600, 3580, 3560, 3550, 3540.2],
  HDFCBANK: [1560, 1555, 1570, 1585, 1580, 1595, 1600, 1590, 1605, 1610, 1598, 1612, 1605, 1615, 1618.75],
  INFY: [1430, 1425, 1440, 1450, 1445, 1460, 1455, 1470, 1465, 1458, 1462, 1470, 1468, 1460, 1465.9],
};

export const achievements = [
  { id: 'a1', icon: 'flame', label: '7-Day Streak', unlocked: true },
  { id: 'a2', icon: 'trophy', label: 'Top 3 Finish', unlocked: true },
  { id: 'a3', icon: 'trending-up', label: 'First Trade', unlocked: true },
  { id: 'a4', icon: 'ribbon', label: '30-Day Streak', unlocked: false },
];

// Dark Mode and Language are built directly in the Profile screen since
// they're bound to live store state, not static content — this list is
// just the remaining settings rows that don't need interactive state yet.
export const staticSettingsMenu = [
  { icon: 'notifications-outline', titleKey: 'profile.notifications' },
  { icon: 'shield-checkmark-outline', titleKey: 'profile.privacy' },
  { icon: 'help-circle-outline', titleKey: 'profile.help' },
];
