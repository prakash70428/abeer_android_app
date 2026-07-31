# FinLearn — App Architecture Overview

*A stock-market learning app (Duolingo-style lessons + a virtual trading portfolio), built as a native Android/iOS app with React Native + Expo.*

This document explains how the app is structured, what technology powers each part, and — in detail — how two of the most visible user-facing features work end to end: **Dark Mode** and **Language switching (English/Hindi)**.

---

## 1. What's been built so far

| Area | Status |
|---|---|
| Design system (colors, typography, spacing, shadows) | ✅ Complete |
| Reusable UI component library (buttons, cards, badges, etc.) | ✅ Complete |
| Bottom-tab navigation (Learn / Portfolio / Leaderboard / Profile) | ✅ Complete |
| Learn screen (lesson path, streaks, XP) | ✅ UI complete, data is mock |
| Portfolio screen + stock detail + price chart | ✅ UI complete, data is mock |
| Leaderboard + player profile | ✅ UI complete, data is mock |
| Profile + Settings (Dark Mode, Language) | ✅ Complete and functional |
| Dark Mode | ✅ Fully working, saved permanently on the device |
| Language (English/Hindi) | ✅ Fully working, saved permanently on the device |
| Backend / real accounts / real trading | ⬜ Not started — screens are already written against the shape the future API will return |

---

## 2. Technology Stack

| Layer | Technology | Why |
|---|---|---|
| App framework | **React Native + Expo** | One codebase → Android + iOS + Web, fast iteration, industry standard for startups (used by Coinbase, Discord, Shopify's internal tools) |
| Navigation | **Expo Router** | File-based routing (like Next.js) — every screen is just a file in `app/`, no manual route config to maintain |
| Styling | **NativeWind** (Tailwind for React Native) | Design-system-first styling, same mental model as a modern web team |
| Global app state | **Zustand** | Lightweight state containers for things every screen needs (current theme, current language) |
| Local persistence | **AsyncStorage** | Saves user preferences (theme, language) directly on the phone so they survive app restarts |
| Animations | **React Native Reanimated** | Native, 60fps UI-thread animations (card entrances, progress bars, press feedback) |
| Icons | **Expo Vector Icons (Ionicons)** | Consistent icon set across the whole app |
| Charts | **react-native-gifted-charts** | Stock price line charts |
| Localization | **i18next + react-i18next** | Industry-standard translation engine, used by Netflix, Airbnb, etc. |

---

## 3. Project Structure

```
app/                        → Every screen in the app (file-based routing)
  (tabs)/                   → The 4 bottom-tab screens
    index.js                → Learn
    portfolio.js            → Portfolio
    leaderboard.js           → Leaderboard
    profile.js               → Profile
  leaderboard/[id].js        → Tapping a leaderboard row opens this
  portfolio/[symbol].js      → Tapping a stock opens this

src/
  theme/                    → Design tokens: colors, fonts, spacing, radius, shadows
  components/ui/            → Reusable building blocks (Button, Card, Badge, Avatar, ...)
  store/                    → App-wide state (theme, language)
  localization/             → Translation files (en.json, hi.json)
  hooks/                    → Shared logic (e.g. loading custom fonts)
  utils/                    → Pure calculation/formatting helpers (currency formatting, portfolio math)
  constants/                → Mock data (stands in for the backend until it exists)
  api/, services/, features/, navigation/  → Reserved, empty on purpose — this is where
                                              real backend calls will go once there is a backend,
                                              so adding it later doesn't require restructuring the app
```

**Why this structure?** Every screen only ever talks to `src/utils` and `src/constants` for data — never does its own math or holds its own copy of "what does dark mode look like." When a real backend arrives, only `src/constants/mockData.js` gets replaced by real API calls; the screens themselves don't change.

---

## 4. How Dark Mode works (end to end)

**User-facing behavior:** Profile → Dark Mode → choose Light / Dark / System → entire app re-themes instantly and remembers the choice forever, even after closing and reopening the app.

```
User taps a theme option in the sheet
        │
        ▼
useThemeStore.setMode('dark')          (src/store/useThemeStore.js)
        │
        ├──► colorScheme.set('dark')   → tells NativeWind's styling engine to
        │                                 switch every "dark:" style in the app
        │                                 (e.g. dark:bg-gray-900) — this is what
        │                                 actually repaints the screen
        │
        └──► saves { mode: 'dark' } to the phone's local storage (AsyncStorage)
                     │
                     ▼
        On the next app launch, this saved value is read back automatically
        and re-applied before the user sees the first screen — so the app
        always opens in the theme the user last chose.
```

**Where it lives:**
- `src/store/useThemeStore.js` — the single source of truth for "what theme is active"
- `app/_layout.js` — reads the current theme once at the root of the app and sets the status bar (light/dark icons) to match
- Every screen just writes Tailwind classes like `bg-gray-50 dark:bg-gray-900` — individual screens never contain theme logic themselves, they just react to the one global switch

---

## 5. How Language switching works (end to end)

**User-facing behavior:** Profile → Language → choose English / हिंदी → every piece of text in the app switches instantly, and the choice is remembered permanently.

```
User taps a language option in the sheet
        │
        ▼
useLocaleStore.setLanguage('hi')       (src/store/useLocaleStore.js)
        │
        ├──► i18n.changeLanguage('hi')  → tells the translation engine to switch
        │                                  its active dictionary — every screen
        │                                  using t('...') re-renders in Hindi
        │                                  automatically, no manual refresh needed
        │
        └──► saves { language: 'hi' } to the phone's local storage
                     │
                     ▼
        On next launch, this is read back and applied before any screen renders.
        If the user has never chosen a language, the app instead defaults to
        whatever language the phone's operating system is set to
        (src/localization/i18n.js), so a Hindi-phone user sees Hindi on first open.
```

**Where it lives:**
- `src/localization/en.json` / `src/localization/hi.json` — every piece of UI text, organized by screen (e.g. `profile.darkMode`, `portfolio.netWorth`)
- `src/localization/i18n.js` — sets up the translation engine and picks the phone's language as the default on first launch
- `src/store/useLocaleStore.js` — remembers the user's explicit choice once they make one
- Every screen calls `const { t } = useTranslation()` and writes `t('profile.darkMode')` instead of hardcoding English text — adding a third language later means adding one more JSON file, not touching any screen

**Why both settings use the same underlying pattern:** Dark Mode and Language are architecturally identical — a small Zustand store + AsyncStorage persistence + a shared `OptionSheet` component for picking a value. This was a deliberate choice: any future single-choice setting (e.g. currency, notification frequency) can reuse the exact same pattern instead of inventing a new one.

---

## 6. Design System

All colors, spacing, font sizes, and border radii live in `src/theme/` as named tokens (e.g. `primary.600`, `radius.2xl`) instead of being hardcoded per screen. This means a brand color change or spacing tweak is a one-line edit that updates the entire app consistently — the same approach used by design systems at Stripe, Linear, and Airbnb.

- **Colors:** semantic names (`primary`, `success`, `danger`) mapped onto a raw palette, each with light/dark variants
- **Typography:** Plus Jakarta Sans, 4 weights, on a fixed type scale (`xs` → `4xl`)
- **Components:** `Button`, `Card`, `Badge`, `Avatar`, `ProgressBar`, `StatTile`, `ListRow`, `OptionSheet` — built once, reused across every screen

---

## 7. Data Layer (current vs. future)

Right now all content (lessons, portfolio holdings, leaderboard, prices) comes from `src/constants/mockData.js` — static, realistic-looking data. Every screen already reads this data through the exact shape a real API response would take (e.g. `computePortfolioSummary(portfolio)` in `src/utils/portfolio.js`), so connecting a real backend later is a data-source swap, not a rewrite of the screens.
