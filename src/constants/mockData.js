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
    progress: 0.2,
    lessons: [
      {
        id: 'l1',
        title: 'What is a Stock Market?',
        status: 'completed',
        xp: 20,
        content: [
          'A stock market is an organized marketplace where investors buy and sell small ownership pieces of companies, called shares. In India, the two main stock markets are the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE), where thousands of companies list their shares for public trading every single day.',
          'Think of it like a giant, regulated auction house. Instead of paintings or antiques, buyers and sellers are trading ownership stakes in businesses — everything from small startups to giants like Reliance and TCS. Prices move up and down constantly based on how many people want to buy versus sell at any given moment.',
          'The stock market serves two important purposes: it helps companies raise money to grow their business, and it gives everyday people a way to invest their savings and potentially grow their wealth over time by owning a piece of those businesses.',
        ],
      },
      {
        id: 'l2',
        title: 'Understanding Shares',
        status: 'completed',
        xp: 20,
        content: [
          "A share (also called a stock) represents one unit of ownership in a company. If a company has issued 1,00,000 shares and you own 1,000 of them, you own 1% of that company — along with 1% of its profits, assets, and voting rights at shareholder meetings.",
          "When you buy a share, you're not just buying a piece of paper or a number on a screen — you're becoming a part-owner of a real business. If the company does well and grows its profits, the value of your share typically rises. If it struggles, the share price can fall.",
          "Shares are also called \"equity\" because they represent your equity, or stake, in the company. Some companies also pay a portion of profits back to shareholders in cash, known as a dividend.",
        ],
      },
      {
        id: 'l3',
        title: 'Stock Exchanges: NSE & BSE',
        status: 'completed',
        xp: 20,
        content: [
          'India has two major stock exchanges: the National Stock Exchange (NSE), founded in 1992, and the Bombay Stock Exchange (BSE), Asia\'s oldest stock exchange, established way back in 1875. Both are regulated by SEBI and allow investors to buy and sell shares of listed companies.',
          "The NSE is known for its benchmark index, the Nifty 50, which tracks the 50 largest companies by market value. The BSE's benchmark is the Sensex, which tracks the top 30 companies. Most large companies are listed on both exchanges, so you can usually buy the same share through either one.",
          "Exchanges don't set stock prices themselves — they simply provide the technology and rules that let buyers and sellers meet and agree on a price, similar to how a marketplace connects vendors and customers.",
        ],
      },
      {
        id: 'l9',
        title: 'What is a Stock?',
        status: 'in_progress',
        xp: 20,
        content: [
          '"Stock" and "share" are often used interchangeably, but strictly speaking, "stock" refers to the overall ownership of a company divided into units, while a "share" is one single unit of that stock. When people say "I bought some stock in Infosys," they mean they bought a certain number of Infosys shares.',
          "Stocks come in different types. Common stock gives you voting rights and a claim on profits through dividends and price growth, but you're paid after other obligations if the company faces trouble. Preference shares get priority on dividends but usually skip voting rights.",
          'Owning stock means your money is tied to the real performance of a business — its sales, profits, competition, and management decisions all directly affect what your investment is worth.',
        ],
      },
      {
        id: 'l10',
        title: 'Why Do Companies Issue Shares?',
        status: 'locked',
        xp: 20,
        content: [
          'Companies need money to grow — to build factories, hire people, develop new products, or pay off debt. One way to raise that money is by selling ownership stakes to the public in exchange for cash. This is far cheaper than borrowing large loans that need to be repaid with interest.',
          'When a company sells shares, it doesn\'t have to pay that money back like a loan. Instead, investors become part-owners who share in future profits and risks. This is why issuing shares is called "equity financing," as opposed to "debt financing" through loans or bonds.',
          'Once shares are issued and listed on an exchange, they can be freely bought and sold between investors on the secondary market, without the company being directly involved in every transaction.',
        ],
      },
      {
        id: 'l11',
        title: 'What is an IPO?',
        status: 'locked',
        xp: 20,
        content: [
          "An Initial Public Offering (IPO) is the very first time a private company sells its shares to the general public, transforming it into a publicly listed company. Before an IPO, a company's shares are usually held only by founders, employees, and private investors.",
          'During an IPO, the company works with investment banks to decide a price band, and investors can apply to buy shares within that range through their trading account. If demand is high, the IPO is "oversubscribed" and shares are allotted through a lottery-like process.',
          'Once the IPO is complete, the shares get listed on the NSE and/or BSE, and trading begins on the "listing day." From that point, the share price is determined purely by market demand and supply, not by the original IPO price.',
        ],
      },
      {
        id: 'l12',
        title: 'Understanding Stock Tickers & Symbols',
        status: 'locked',
        xp: 20,
        content: [
          'Every listed company is given a short, unique code called a ticker symbol, used to quickly identify it while trading. For example, Reliance Industries trades under "RELIANCE," Tata Consultancy Services under "TCS," and HDFC Bank under "HDFCBANK."',
          'Ticker symbols make it faster to search for, track, and trade stocks — especially useful when watching live prices where space is limited. They also help avoid confusion between companies with similar names.',
          'On Indian exchanges, the same company usually has slightly different codes on NSE and BSE (NSE uses text symbols, BSE often uses numeric codes), but they both refer to the exact same underlying share.',
        ],
      },
      {
        id: 'l13',
        title: 'What is Market Capitalization?',
        status: 'locked',
        xp: 20,
        content: [
          'Market capitalization, or "market cap," is the total value of a company as valued by the stock market. It\'s calculated by multiplying the current share price by the total number of shares outstanding.',
          'For example, if a company has 10 crore shares and each is priced at ₹500, its market cap is ₹5,000 crore. Market cap gives a quick sense of a company\'s overall size, which is often more useful than the share price alone.',
          "A high share price doesn't necessarily mean a company is \"big\" — a company with a ₹50 share price but 500 crore shares outstanding could have a much larger market cap than one with a ₹2,000 share price but only 5 crore shares.",
        ],
      },
      {
        id: 'l14',
        title: 'Large Cap, Mid Cap & Small Cap Explained',
        status: 'locked',
        xp: 20,
        content: [
          'Indian stocks are commonly grouped by size into large cap, mid cap, and small cap categories. Large cap companies are typically the top 100 by market value — well-established businesses like Reliance, TCS, and HDFC Bank — generally considered more stable.',
          'Mid cap companies (roughly ranked 101 to 250) are medium-sized businesses with room to grow but somewhat more risk and price swings than large caps. Small cap companies (ranked beyond 250) are smaller, often younger businesses that can offer higher growth potential along with higher risk.',
          'New investors are often encouraged to start with large caps because they tend to be less volatile, while mid and small caps are usually approached with more caution and thorough research due to their higher risk-reward nature.',
        ],
      },
      {
        id: 'l15',
        title: 'What is SEBI and Why It Matters',
        status: 'locked',
        xp: 20,
        content: [
          'The Securities and Exchange Board of India (SEBI) is the government regulator responsible for overseeing and protecting India\'s stock markets. It was established in 1988 and given statutory powers in 1992.',
          "SEBI's job is to protect investors, ensure fair trading practices, and keep exchanges, brokers, and listed companies accountable. It sets rules for IPOs, insider trading, disclosures, and how brokers must handle client funds.",
          'As a new investor, SEBI\'s regulations are what make it reasonably safe to trade — for instance, requiring companies to regularly disclose financial results, and requiring brokers to keep client money separate from their own.',
        ],
      },
      {
        id: 'l16',
        title: 'Demat & Trading Accounts Explained',
        status: 'locked',
        xp: 20,
        content: [
          'To buy and sell shares in India, you need two accounts working together: a Demat account, which electronically stores the shares you own (like a digital locker), and a trading account, which is used to place buy and sell orders on the exchange.',
          'Before Demat accounts existed, shares were physical paper certificates that could be lost, damaged, or forged. Today, everything is dematerialized — held in electronic form with depositories like NSDL or CDSL, and linked to your broker and bank account.',
          'When you buy a share, money moves out of your bank account, and the shares appear in your Demat account within one to two working days. When you sell, the reverse happens.',
        ],
      },
      {
        id: 'l17',
        title: 'How to Place Your First Trade',
        status: 'locked',
        xp: 20,
        content: [
          'Placing a trade starts with choosing a stock, deciding how many shares you want, and picking an order type. A "market order" buys or sells immediately at the current best available price, while a "limit order" lets you set the exact price you\'re willing to pay or accept.',
          'Before confirming, you\'ll see the total cost including brokerage fees and taxes. Once submitted, the order goes to the exchange, and if a matching buyer or seller exists, the trade executes — often within seconds for liquid, popular stocks.',
          "It's a good habit for beginners to start with small amounts, use limit orders to avoid surprise prices, and always double-check the quantity and stock symbol before hitting confirm.",
        ],
      },
      {
        id: 'l18',
        title: 'Market Timings & Trading Sessions',
        status: 'locked',
        xp: 20,
        content: [
          'The NSE and BSE follow the same trading schedule. The regular trading session runs from 9:15 AM to 3:30 PM, Monday to Friday, excluding market holidays. This is when most buying and selling activity happens.',
          'Before the main session, there\'s a 15-minute "pre-open session" from 9:00 to 9:15 AM, which helps determine a fair opening price by matching early orders before regular trading begins.',
          'Understanding market timing matters because prices can be more volatile right after the market opens and just before it closes, as traders react to overnight news or rush to close positions for the day.',
        ],
      },
      {
        id: 'l19',
        title: 'What are Stock Indices?',
        status: 'locked',
        xp: 20,
        content: [
          'A stock index is a single number that tracks the combined performance of a specific group of stocks, used as a shorthand for "how is the market doing overall." Rather than checking hundreds of individual stock prices, investors glance at the index.',
          "India's most-watched indices are the Nifty 50 (top 50 NSE companies) and the Sensex (top 30 BSE companies). Sector-specific indices also exist, like Nifty Bank or Nifty IT, tracking specific industries.",
          'When news says "the market rose 1% today," it usually means one of these benchmark indices went up by that amount — even though individual stocks within it may have moved in different directions.',
        ],
      },
      {
        id: 'l20',
        title: 'Primary Market vs Secondary Market',
        status: 'locked',
        xp: 20,
        content: [
          'The primary market is where new shares are created and sold for the first time, mainly through IPOs, directly benefiting the company by raising fresh capital.',
          'The secondary market is where those already-issued shares are traded between investors afterward — this is the day-to-day buying and selling you see happening on the NSE and BSE. The company itself doesn\'t receive money from these later trades.',
          'Nearly all everyday trading activity — the kind shown on stock market apps and news tickers — happens in the secondary market, while IPOs represent just the starting point in the primary market.',
        ],
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'Reading the Market',
    progress: 0.1,
    lessons: [
      {
        id: 'l4',
        title: 'Candlestick Charts',
        status: 'in_progress',
        xp: 25,
        content: [
          "A candlestick is a visual representation of a stock's price movement over a chosen time period — a day, an hour, or even a minute. Each candlestick shows four key prices: the open, close, high, and low for that period.",
          'The "body" of the candle shows the range between the opening and closing price. A green (or white) body means the price closed higher than it opened, while a red (or black) body means it closed lower. The thin lines above and below, called "wicks" or "shadows," show the highest and lowest prices reached.',
          'Traders study patterns formed by multiple candlesticks — such as "doji," "hammer," or "engulfing" patterns — to gauge shifts in buying and selling pressure, since these patterns often reflect changes in market psychology before they show up in the price trend itself.',
        ],
      },
      {
        id: 'l5',
        title: 'Market Indices: Sensex & Nifty',
        status: 'locked',
        xp: 25,
        content: [
          "The Sensex and Nifty are India's two flagship benchmark indices, and their day-to-day movement is treated as a proxy for the health of the Indian economy and investor sentiment as a whole.",
          'Both indices are "free-float market capitalization weighted," meaning companies with a larger market value (based only on shares available for public trading, not those locked with promoters) have a bigger influence on the index\'s movement than smaller companies.',
          'Professional investors frequently compare their own portfolio returns against these indices — a fund or trader that consistently "beats the Nifty" is considered to be generating genuine skill-based returns (called "alpha") rather than just riding a rising market.',
        ],
      },
      {
        id: 'l6',
        title: 'Bulls vs Bears',
        status: 'locked',
        xp: 25,
        content: [
          '"Bullish" describes a belief that prices will rise, while "bearish" describes an expectation that prices will fall. A "bull market" refers to a sustained period of rising prices and optimism, whereas a "bear market" typically refers to a fall of 20% or more from recent highs, along with pessimism and selling pressure.',
          'These terms come from how each animal attacks: a bull thrusts its horns upward, while a bear swipes its paws downward — a memorable way to associate direction with market mood.',
          'Recognizing whether the broader market is in a bullish or bearish phase helps investors calibrate risk — many strategies that work well in a bull market can lead to painful losses if applied unchanged during a bear market.',
        ],
      },
      {
        id: 'l21',
        title: 'Understanding Price Charts: Line vs Candlestick vs Bar',
        status: 'locked',
        xp: 25,
        content: [
          'A line chart is the simplest way to visualize price — it connects closing prices over time with a single continuous line, making overall trends easy to spot at a glance, though it hides intraday detail.',
          'A bar chart adds more information per period, showing the open, high, low, and close using small tick marks on a vertical line — useful for traders who want more detail than a line chart without the visual weight of candlesticks.',
          "Candlestick charts pack in the same open-high-low-close data as bar charts but use color and shape to make shifts in sentiment easier to read visually, which is why they're the most widely used chart type among active traders today.",
        ],
      },
      {
        id: 'l22',
        title: 'What is Trading Volume?',
        status: 'locked',
        xp: 25,
        content: [
          "Volume refers to the total number of shares traded in a stock during a given period, usually a single trading day. It's one of the most important — and most overlooked — pieces of market data.",
          'A price move accompanied by high volume is generally considered more meaningful than the same move on low volume, because it suggests broad participation and conviction from many market participants, rather than a handful of trades pushing the price around.',
          'Sudden volume spikes often precede or accompany major news, earnings announcements, or a shift in a stock\'s trend — which is why experienced traders watch volume charts alongside price charts, not in isolation.',
        ],
      },
      {
        id: 'l23',
        title: 'Support and Resistance Levels',
        status: 'locked',
        xp: 25,
        content: [
          'Support is a price level where a falling stock has historically found buyers stepping in, halting the decline. Resistance is the opposite — a price level where a rising stock has historically met sellers, capping further gains.',
          'These levels form because market participants remember past price zones. Traders who missed buying at a low point often place orders to buy if the price returns there, creating a self-reinforcing floor. The same logic works in reverse for resistance.',
          'When a stock breaks decisively through a resistance level with strong volume, that old resistance often becomes new support, and vice versa when support is broken — a concept known as "role reversal" in technical analysis.',
        ],
      },
      {
        id: 'l24',
        title: 'Understanding Market Trends',
        status: 'locked',
        xp: 25,
        content: [
          'A trend describes the general direction prices are moving over time. An uptrend is marked by a series of higher highs and higher lows, a downtrend by lower highs and lower lows, and a sideways or "range-bound" market shows no clear directional bias.',
          'The old trading adage "the trend is your friend" reflects the observation that prices are more likely to continue in their established direction than to suddenly reverse, though every trend eventually ends.',
          'Trends can exist across different timeframes simultaneously — a stock might be in a short-term downtrend within a longer-term uptrend — which is why professional chart readers often check multiple timeframes before forming a view.',
        ],
      },
      {
        id: 'l25',
        title: 'Moving Averages Explained',
        status: 'locked',
        xp: 25,
        content: [
          'A moving average smooths out price data by calculating the average closing price over a set number of past periods — commonly 20, 50, or 200 days — and plotting it as a single line that updates daily.',
          "Because it filters out short-term noise, a moving average helps traders see the underlying trend more clearly than the jagged, day-to-day price line alone. When price stays above a rising moving average, it's typically read as a bullish sign.",
          'A widely watched signal is the "crossover" — when a shorter-term moving average crosses above a longer-term one (a "golden cross"), it\'s often seen as bullish; the reverse ("death cross") is often seen as bearish.',
        ],
      },
      {
        id: 'l26',
        title: 'What is Volatility?',
        status: 'locked',
        xp: 25,
        content: [
          "Volatility measures how much and how quickly a stock's price swings, regardless of direction. A highly volatile stock can move sharply up or down within a single day, while a low-volatility stock tends to change gradually.",
          "Volatility isn't inherently good or bad — it represents opportunity for active traders seeking quick moves, but it represents risk for investors who can't tolerate large short-term swings in the value of their holdings.",
          'India\'s volatility benchmark is the India VIX, often nicknamed the "fear index," which tends to spike during periods of market uncertainty, such as elections, global crises, or major policy announcements.',
        ],
      },
      {
        id: 'l27',
        title: 'Understanding Market Sentiment',
        status: 'locked',
        xp: 25,
        content: [
          'Market sentiment refers to the overall mood or attitude of investors toward a stock or the market as a whole — whether they feel optimistic (bullish) or pessimistic (bearish) — independent of what the actual financial fundamentals say.',
          'Sentiment can be measured through indicators like advance-decline ratios (how many stocks rose versus fell), put-call ratios in the options market, and even news and social media tone.',
          'Extreme sentiment, in either direction, is often treated as a contrarian signal by experienced investors — widespread euphoria can precede a market top, while widespread panic can precede a bottom, since prices sometimes overshoot fundamentals in both directions.',
        ],
      },
      {
        id: 'l28',
        title: 'Sector-wise Market Movement',
        status: 'locked',
        xp: 25,
        content: [
          'Not all parts of the market move together. Stocks are grouped into sectors — such as banking, IT, pharma, auto, and FMCG — and each sector can behave very differently depending on the economic environment.',
          'For instance, rising interest rates might benefit bank stocks through higher lending margins, while hurting real estate stocks through costlier home loans. A weakening rupee might boost IT and pharma companies that earn revenue in dollars, while hurting import-heavy sectors.',
          'Tracking sector indices like Nifty Bank, Nifty IT, or Nifty Pharma alongside the broader Nifty 50 helps investors understand which parts of the economy are driving — or dragging — overall market performance.',
        ],
      },
      {
        id: 'l29',
        title: 'What Causes Stock Prices to Move?',
        status: 'locked',
        xp: 25,
        content: [
          'At the most basic level, stock prices move because of the constant tug-of-war between buyers and sellers — when more people want to buy at a given price than sell, the price rises, and vice versa.',
          'What drives that buying and selling pressure includes company-specific news (earnings, new products, management changes), broader economic data (interest rates, inflation, GDP growth), global events, and even shifts in investor psychology and speculation.',
          "In the short term, prices can be dominated by sentiment and news flow, but over the long run, most analysts agree that a company's actual business performance — its earnings and growth — is what ultimately anchors its share price.",
        ],
      },
      {
        id: 'l30',
        title: 'Reading the Order Book',
        status: 'locked',
        xp: 25,
        content: [
          'The order book shows the current buy orders ("bids") and sell orders ("asks") waiting to be matched for a particular stock, organized by price level, along with the quantity of shares at each level.',
          'A "thick" order book with large quantities at many price levels suggests a liquid stock where large orders can be filled without dramatically moving the price. A "thin" order book means even modest orders can cause noticeable price swings.',
          'The gap between the best bid and best ask is called the "spread" — a tighter spread generally indicates a more liquid, efficiently traded stock, while a wide spread can signal lower liquidity or higher uncertainty.',
        ],
      },
      {
        id: 'l31',
        title: 'Circuit Limits & Trading Halts',
        status: 'locked',
        xp: 25,
        content: [
          'To prevent extreme, panic-driven price swings, Indian exchanges apply "circuit limits" — maximum percentage moves (commonly 5%, 10%, or 20%) a stock or index is allowed to move within a single day before trading is temporarily paused or halted.',
          'When an individual stock hits its circuit limit, it\'s said to have hit the "upper circuit" (price limit reached on the way up) or "lower circuit" (on the way down), and further trading beyond that price is paused until the next session or a cooling period passes.',
          'Index-wide circuit breakers also exist for the Nifty and Sensex, which can halt trading across the entire market for a set period if the index falls sharply within a single day, giving participants time to reassess before trading resumes.',
        ],
      },
      {
        id: 'l32',
        title: 'Introduction to Technical Analysis',
        status: 'locked',
        xp: 25,
        content: [
          'Technical analysis is the study of past price and volume data to try to forecast future price movement, based on the idea that historical patterns and market psychology tend to repeat.',
          'It relies on tools like chart patterns, trendlines, support and resistance, moving averages, and momentum indicators — rather than examining a company\'s financial statements, which is the domain of fundamental analysis instead.',
          'Technical analysis is widely used by short-to-medium-term traders looking for entry and exit timing, while many long-term investors combine it with fundamental analysis to decide not just what to buy, but when to buy or sell it.',
        ],
      },
    ],
  },
  {
    id: 'unit-3',
    title: 'Fundamental Analysis',
    progress: 0,
    lessons: [
      {
        id: 'l7',
        title: 'Reading a Balance Sheet',
        status: 'locked',
        xp: 30,
        content: [
          'A balance sheet is a financial snapshot of what a company owns (assets), what it owes (liabilities), and the difference between the two (shareholders\' equity), all measured at a specific point in time — usually the end of a financial quarter or year.',
          'The fundamental equation behind every balance sheet is: Assets = Liabilities + Shareholders\' Equity. This must always balance, which is why it\'s called a "balance" sheet. Assets include cash, inventory, and property; liabilities include loans and payables owed to others.',
          "Analysts study the balance sheet to assess a company's financial health — for example, comparing current assets to current liabilities reveals whether a company can comfortably meet its short-term obligations, a measure known as liquidity.",
        ],
      },
      {
        id: 'l8',
        title: 'P/E Ratio Explained',
        status: 'locked',
        xp: 30,
        content: [
          "The Price-to-Earnings (P/E) ratio is one of the most commonly used valuation metrics, calculated by dividing a company's current share price by its earnings per share (EPS). It tells investors how much they are paying for each rupee of the company's profit.",
          'A P/E of 25 means investors are willing to pay ₹25 for every ₹1 of annual earnings the company generates. Generally, a higher P/E suggests the market expects strong future growth, while a lower P/E may suggest slower growth expectations — or that the stock is undervalued.',
          'P/E ratios are most useful when compared against a company\'s own historical average or against peers in the same industry, since "expensive" or "cheap" is relative — a P/E of 40 might be normal for a fast-growing IT company but very high for a stable utility company.',
        ],
      },
      {
        id: 'l33',
        title: 'What is Fundamental Analysis?',
        status: 'locked',
        xp: 30,
        content: [
          "Fundamental analysis is the practice of evaluating a company's intrinsic value by examining its financial statements, business model, industry position, competitive advantages, and management quality — rather than relying purely on price charts.",
          "The core belief behind fundamental analysis is that a stock's market price can temporarily diverge from what the underlying business is actually worth, and that over the long run, price tends to converge toward that true, intrinsic value.",
          'Investors following this approach — famously practiced by Warren Buffett — aim to identify businesses trading below their estimated intrinsic value, buy them, and hold patiently while the market eventually recognizes that value.',
        ],
      },
      {
        id: 'l34',
        title: 'Understanding the Income Statement',
        status: 'locked',
        xp: 30,
        content: [
          "The income statement (also called the profit and loss statement) shows a company's revenue, expenses, and resulting profit or loss over a specific period, such as a quarter or a full financial year.",
          'It starts with total revenue at the top, subtracts costs like raw materials, salaries, interest, and taxes step by step, and arrives at "net profit" — often called the company\'s "bottom line" — at the very end.',
          "Comparing income statements across multiple years reveals whether a company's revenue and profit are growing, shrinking, or staying flat, which is often more informative than looking at a single period in isolation.",
        ],
      },
      {
        id: 'l35',
        title: 'Understanding Cash Flow Statements',
        status: 'locked',
        xp: 30,
        content: [
          'The cash flow statement tracks the actual cash moving in and out of a business, split into three categories: operating activities (core business operations), investing activities (buying or selling long-term assets), and financing activities (borrowing, repaying debt, or paying dividends).',
          "Unlike the income statement, which can include non-cash items like depreciation, the cash flow statement shows real money movement — which is why some analysts consider it harder to manipulate and more reliable for judging a company's true financial position.",
          'A company can show a healthy profit on its income statement while actually running low on cash — watching operating cash flow helps investors catch this kind of red flag before it becomes a serious problem.',
        ],
      },
      {
        id: 'l36',
        title: 'Earnings Per Share (EPS) Explained',
        status: 'locked',
        xp: 30,
        content: [
          'Earnings Per Share (EPS) measures how much profit a company generates for each outstanding share, calculated by dividing net profit by the total number of shares outstanding.',
          'EPS is a key building block for other valuation metrics, most notably the P/E ratio, and rising EPS over time is generally seen as a sign of a growing, healthy business.',
          'Companies sometimes report both "basic EPS" and "diluted EPS" — diluted EPS accounts for potential future shares from stock options or convertible securities, giving a more conservative view of per-share earnings.',
        ],
      },
      {
        id: 'l37',
        title: 'Return on Equity (ROE)',
        status: 'locked',
        xp: 30,
        content: [
          "Return on Equity (ROE) measures how efficiently a company uses shareholders' money to generate profit, calculated by dividing net profit by shareholders' equity, and expressed as a percentage.",
          'A consistently high ROE — say, above 15-20% — often signals a company with a strong competitive advantage, efficient operations, or a capital-light business model, making it a favorite metric among long-term investors.',
          'ROE should be read alongside debt levels, since a company can artificially boost ROE by taking on excessive debt rather than through genuinely efficient operations — a case where a high number can be misleading without context.',
        ],
      },
      {
        id: 'l38',
        title: 'Debt-to-Equity Ratio',
        status: 'locked',
        xp: 30,
        content: [
          "The debt-to-equity ratio compares a company's total debt to its shareholders' equity, showing how much of the business is financed through borrowing versus owner capital.",
          'A ratio above 1 means the company has more debt than equity, which can amplify both gains and losses and increases financial risk, especially if interest rates rise or revenue falls unexpectedly.',
          'Acceptable debt-to-equity levels vary widely by industry — capital-intensive sectors like infrastructure or utilities typically carry more debt than asset-light sectors like IT services, so comparisons are most meaningful within the same industry.',
        ],
      },
      {
        id: 'l39',
        title: 'Dividend Yield Explained',
        status: 'locked',
        xp: 30,
        content: [
          'Dividend yield measures the annual dividend income a company pays relative to its current share price, expressed as a percentage — calculated by dividing annual dividend per share by the share price.',
          'A stock priced at ₹500 paying an annual dividend of ₹10 per share has a dividend yield of 2%. Income-focused investors often favor stocks with stable, sustainable dividend yields as a source of regular cash flow.',
          'An unusually high dividend yield can sometimes be a warning sign rather than a bargain — it may indicate the share price has fallen sharply due to business troubles, inflating the yield mathematically even as the dividend itself is at risk of being cut.',
        ],
      },
      {
        id: 'l40',
        title: 'Book Value & Price-to-Book Ratio',
        status: 'locked',
        xp: 30,
        content: [
          "Book value represents a company's net worth according to its balance sheet — total assets minus total liabilities — essentially what shareholders would theoretically receive if the company were liquidated and all debts paid off.",
          'The Price-to-Book (P/B) ratio compares the current share price to the company\'s book value per share, helping investors judge whether a stock is trading at a premium or discount to its accounting net worth.',
          'P/B is especially useful for asset-heavy businesses like banks and manufacturers, but less meaningful for asset-light businesses like software or brand-driven companies, where much of the real value lies in intangible assets not fully captured on the balance sheet.',
        ],
      },
      {
        id: 'l41',
        title: 'Understanding Revenue & Profit Margins',
        status: 'locked',
        xp: 30,
        content: [
          'Revenue is the total money a company earns from selling its products or services, before subtracting any costs — often called the "top line" because it appears at the top of the income statement.',
          'Profit margins measure how much of that revenue actually turns into profit after expenses. Gross margin looks at profit after direct production costs, operating margin after running costs, and net margin after everything, including taxes and interest.',
          'Comparing margins across competitors in the same industry often reveals which company runs its operations more efficiently, even if their revenue figures look similar on the surface.',
        ],
      },
      {
        id: 'l42',
        title: 'Qualitative Analysis: Management & Moat',
        status: 'locked',
        xp: 30,
        content: [
          'Beyond the numbers, fundamental analysis also involves assessing qualitative factors — most importantly, the quality and integrity of a company\'s management team and its "economic moat," a term popularized by Warren Buffett describing a sustainable competitive advantage.',
          "A strong moat can come from brand loyalty, network effects, cost advantages, patents, or high switching costs for customers — anything that protects a company's profits from being eroded by competitors over time.",
          'Evaluating management involves looking at their track record, how honestly they communicate with shareholders during good and bad times, and whether their incentives are genuinely aligned with long-term shareholder interests.',
        ],
      },
      {
        id: 'l43',
        title: 'Comparing Companies: Peer Analysis',
        status: 'locked',
        xp: 30,
        content: [
          "Peer analysis, or comparable company analysis, involves comparing a company's financial ratios and performance against similar businesses in the same industry to judge whether it's relatively over- or undervalued.",
          "Common metrics used include P/E, P/B, ROE, and profit margins, viewed side by side across competitors — for example, comparing HDFC Bank's ROE against ICICI Bank's and Axis Bank's to see which is generating profit most efficiently.",
          'Peer analysis works best within the same sector, since businesses with fundamentally different models — like a bank and a software company — naturally carry very different "normal" ranges for these ratios.',
        ],
      },
      {
        id: 'l44',
        title: 'Reading Annual Reports & Quarterly Results',
        status: 'locked',
        xp: 30,
        content: [
          'Every listed Indian company is required to publish audited annual reports and quarterly financial results, giving investors a regular, standardized window into its performance, strategy, and risks.',
          'Beyond the raw numbers, annual reports typically include the Management Discussion and Analysis (MD&A) section, where leadership explains business performance, challenges, and future outlook in their own words — often revealing more context than the financial statements alone.',
          'Quarterly results, released four times a year, let investors track trends more frequently, though seasoned analysts caution against overreacting to a single quarter and instead look for consistent, multi-quarter patterns.',
        ],
      },
      {
        id: 'l45',
        title: 'Intrinsic Value & Valuation Basics',
        status: 'locked',
        xp: 30,
        content: [
          'Intrinsic value is an estimate of what a company is genuinely worth based on its fundamentals — future cash flows, growth prospects, and risk — independent of its current market price, which can be influenced by short-term sentiment.',
          'Common valuation approaches include Discounted Cash Flow (DCF) analysis, which projects future cash flows and discounts them back to today\'s value, and relative valuation, which compares ratios like P/E or P/B against peers.',
          'The central idea behind value investing is straightforward: if a careful estimate of intrinsic value is meaningfully higher than the current market price, the stock may represent a good long-term investment opportunity — and vice versa if it\'s overvalued.',
        ],
      },
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

// Single source of truth for "current price" — reading the last point of
// priceHistory instead of a separate ltp field means a sold-out holding
// (which no longer carries its own ltp) can still be priced when buying it
// back.
export function getLatestPrice(symbol) {
  const history = priceHistory[symbol];
  return history ? history[history.length - 1] : undefined;
}

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
  { icon: 'notifications-outline', titleKey: 'profile.notifications', route: '/settings/notifications' },
  { icon: 'shield-checkmark-outline', titleKey: 'profile.privacy', route: '/settings/privacy' },
  { icon: 'help-circle-outline', titleKey: 'profile.help', route: '/settings/help' },
];
