// src/pages/Education.jsx
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const Education = () => {
  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('forexedge-module-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('forexedge-module-progress', JSON.stringify(completedModules));
  }, [completedModules]);

  const markModuleComplete = (moduleId) => {
    if (!completedModules[moduleId]) {
      setCompletedModules(prev => ({ ...prev, [moduleId]: true }));
    }
  };

  // PDF functions (unchanged from working version)
  const generateBeginnerCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text('Forex Edge - Beginner Cheat Sheet', 20, 20);
    
    doc.setFontSize(16);
    doc.text('Quick Forex Foundations', 20, 40);
    doc.setFontSize(12);
    
    doc.text('1. Forex = Foreign Exchange', 30, 55);
    doc.text('   Trading one currency for another (e.g. EUR/USD)', 40, 65);
    
    doc.text('2. Major Currency Pairs', 30, 80);
    doc.text('   EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, USD/CHF, NZD/USD', 40, 90);
    
    doc.text('3. Pip = Price Interest Point', 30, 105);
    doc.text('   Smallest price move (usually 0.0001 for most pairs)', 40, 115);
    
    doc.text('4. Golden Rule of Risk', 30, 130);
    doc.text('   Risk only 1-2% of your account per trade – always!', 40, 140);
    
    doc.text('5. Leverage', 30, 155);
    doc.text('   Amplifies gains AND losses – start low (e.g. 1:10)', 40, 165);
    
    doc.save('ForexEdge-Beginner-Cheat-Sheet.pdf');
  };

  const generatePipsLotsCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Pips, Lots, Leverage & Margin Cheat Sheet', 20, 20);
    
    doc.setFontSize(14);
    doc.text('Pip Values Examples (Standard Account)', 20, 45);
    doc.setFontSize(11);
    doc.text('• EUR/USD: 1 pip = $10 per standard lot', 30, 60);
    doc.text('• USD/JPY: 1 pip = ~$8.50–$10 (depends on exchange rate)', 30, 70);
    doc.text('• GBP/JPY: 1 pip = ~$6–$8', 30, 80);
    
    doc.setFontSize(14);
    doc.text('Lot Sizes', 20, 105);
    doc.setFontSize(11);
    doc.text('• Standard Lot   = 100,000 units', 30, 120);
    doc.text('• Mini Lot       = 10,000 units   (1/10th standard)', 30, 130);
    doc.text('• Micro Lot      = 1,000 units     (1/100th standard)', 30, 140);
    
    doc.setFontSize(14);
    doc.text('Leverage Examples', 20, 175);
    doc.setFontSize(11);
    doc.text('• 1:100 leverage → $1,000 controls $100,000 position', 30, 190);
    
    doc.setFontSize(12);
    doc.text('Risk Reminder: Use low leverage & small lots when starting!', 20, 225);
    
    doc.save('Pips-Lots-Leverage-Cheat-Sheet.pdf');
  };

  const generateChartReadingCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Forex Edge - Candlesticks & Timeframes Cheat Sheet', 20, 20);
    
    doc.setFontSize(14);
    doc.text('1. Candlestick Anatomy', 20, 45);
    doc.setFontSize(11);
    doc.text('• Body: Open to Close price range', 30, 55);
    doc.text('  Green/White = Close > Open (Bullish)', 35, 62);
    doc.text('  Red/Black = Close < Open (Bearish)', 35, 69);
    doc.text('• Wicks/Shadows: High & Low extremes', 30, 76);
    
    doc.setFontSize(14);
    doc.text('2. Key Beginner Candlestick Patterns', 20, 95);
    doc.setFontSize(11);
    doc.text('Bullish Reversal:', 30, 105);
    doc.text('• Hammer: Small body top, long lower wick', 35, 112);
    doc.text('• Bullish Engulfing: Small red + large green engulfing it', 35, 119);
    doc.text('Bearish Reversal:', 30, 129);
    doc.text('• Shooting Star: Small body bottom, long upper wick', 35, 136);
    doc.text('• Bearish Engulfing: Small green + large red engulfing it', 35, 143);
    doc.text('Indecision:', 30, 153);
    doc.text('• Doji: Open ≈ Close (tiny body) – market unsure', 35, 160);
    
    doc.setFontSize(14);
    doc.text('3. Timeframes Guide', 20, 180);
    doc.setFontSize(11);
    doc.text('• M1 (1-min): Scalping, very noisy, many signals', 30, 190);
    doc.text('• M15/M30: Intraday entries, good detail', 30, 197);
    doc.text('• H1 (1-hour): Day trading balance – popular', 30, 204);
    doc.text('• H4: Swing trading, clearer trends', 30, 211);
    doc.text('• D1 (Daily): Big picture, major trends & support/resistance', 30, 218);
    doc.text('Tip: Use higher TF for trend direction, lower for entries', 30, 228);
    
    doc.setFontSize(12);
    doc.text('Remember: "The trend is your friend" – align with higher TF!', 20, 245);
    
    doc.save('Candlesticks-Timeframes-Cheat-Sheet.pdf');
  };

  const generateSupportResistanceCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Support & Resistance Cheat Sheet', 20, 20);
    
    doc.setFontSize(14);
    doc.text('Core Rules', 20, 45);
    doc.setFontSize(11);
    doc.text('• Support = Floor where price tends to bounce up', 30, 55);
    doc.text('• Resistance = Ceiling where price tends to bounce down', 30, 62);
    doc.text('• Zones > exact lines (thicker areas of interest)', 30, 69);
    doc.text('• The more times tested → the stronger the level', 30, 76);
    
    doc.setFontSize(14);
    doc.text('Role Reversal', 20, 95);
    doc.setFontSize(11);
    doc.text('• Broken resistance → becomes new support', 30, 105);
    doc.text('• Broken support → becomes new resistance', 30, 112);
    doc.text('• Classic setup: Price retests broken level before continuing', 30, 119);
    
    doc.setFontSize(14);
    doc.text('Trading Around Levels', 20, 140);
    doc.setFontSize(11);
    doc.text('• Bounce: Buy at support / Sell at resistance (with confirmation)', 30, 150);
    doc.text('• Breakout: Buy above resistance / Sell below support (strong momentum)', 30, 157);
    doc.text('• Fakeout: Price breaks level briefly then reverses – trap!', 30, 164);
    doc.text('• Confluence = stronger: S/R + trend + candlestick pattern', 30, 171);
    
    doc.setFontSize(12);
    doc.text('Pro Tip: Draw levels on higher timeframes (H4/D1) → trade on lower (H1/M15)', 20, 195);
    
    doc.save('Support-Resistance-Cheat-Sheet.pdf');
  };

  const generateTrendLinesCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Trend Lines & Channels Cheat Sheet', 20, 20);
    doc.setFontSize(14);
    doc.text('Trend Line Basics', 20, 45);
    doc.setFontSize(11);
    doc.text('• Uptrend line: Connect 2+ higher lows (support)', 30, 55);
    doc.text('• Downtrend line: Connect 2+ lower highs (resistance)', 30, 62);
    doc.text('• More touches = stronger line', 30, 69);
    doc.text('• Angle: Too steep = unsustainable, too flat = weak', 30, 76);
    doc.setFontSize(14);
    doc.text('Channels', 20, 95);
    doc.setFontSize(11);
    doc.text('• Parallel lines to trend line (upper/lower boundary)', 30, 105);
    doc.text('• Ascending channel: Uptrend + parallel resistance', 30, 112);
    doc.text('• Descending channel: Downtrend + parallel support', 30, 119);
    doc.setFontSize(14);
    doc.text('Trading Tips', 20, 140);
    doc.setFontSize(11);
    doc.text('• Pullback: Price bounces off trend line – enter with trend', 30, 150);
    doc.text('• Breakout: Close beyond line + volume = new trend', 30, 157);
    doc.text('• Fakeout: Brief break then reverse – avoid chasing', 30, 164);
    doc.setFontSize(12);
    doc.text('Trend is your friend – trade in direction until broken!', 20, 195);
    doc.save('Trend-Lines-Channels-Cheat-Sheet.pdf');
  };

  const generateMovingAveragesCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Moving Averages Cheat Sheet', 20, 20);
    doc.setFontSize(14);
    doc.text('SMA vs EMA', 20, 45);
    doc.setFontSize(11);
    doc.text('• SMA (Simple): Equal weight to all periods', 30, 55);
    doc.text('• EMA (Exponential): More weight to recent prices (faster)', 30, 62);
    doc.setFontSize(14);
    doc.text('Common Periods', 20, 85);
    doc.setFontSize(11);
    doc.text('• 9/21 EMA: Short-term momentum', 30, 95);
    doc.text('• 50 SMA: Medium-term trend', 30, 102);
    doc.text('• 200 SMA: Long-term trend (major support/resistance)', 30, 109);
    doc.setFontSize(14);
    doc.text('Trading Strategies', 20, 135);
    doc.setFontSize(11);
    doc.text('• Golden Cross: 50 SMA crosses above 200 SMA → bullish', 30, 145);
    doc.text('• Death Cross: 50 SMA crosses below 200 SMA → bearish', 30, 152);
    doc.text('• Pullback: Price touches MA in trend → buy/sell opportunity', 30, 159);
    doc.text('• Dynamic S/R: MAs act as moving support/resistance', 30, 166);
    doc.setFontSize(12);
    doc.text('Tip: Use multiple MAs + price action for confluence', 20, 195);
    doc.save('Moving-Averages-Cheat-Sheet.pdf');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: '#e2e8f0',
      padding: '120px 20px 80px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '3.8rem',
          color: '#60a5fa',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          Forex Edge Education Library
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          textAlign: 'center',
          color: '#94a3b8',
          marginBottom: '4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Clear, step-by-step learning from zero knowledge to advanced Smart Money Concepts.
          <br />
          All included in your subscription – no extra costs, ever.
        </p>

        {/* Beginner Level */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#22c55e',
            marginBottom: '2.5rem',
            textAlign: 'center'
          }}>
            Beginner Level – Building Strong Foundations
          </h2>

          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('beginner-1'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#22c55e',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['beginner-1'] && <span style={{ color: '#22c55e', fontSize: '1.8rem' }}>✓</span>}
              Module 1: What is Forex? (The Basics Explained)
            </summary>
            <div style={{ padding: '0 2rem 2rem 2rem', lineHeight: '1.7' }}>
              <p style={{ fontSize: '1.15rem', color: '#cbd5e1', margin: '1.5rem 0' }}>
                Forex (short for Foreign Exchange or FX) is the global marketplace where people, banks, companies, and governments trade currencies.
                It is by far the largest financial market in the world — with an average daily trading volume exceeding $7.5 trillion (2025 figures).
              </p>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2rem 0 1rem' }}>
                How Does Forex Trading Actually Work?
              </h4>
              <p style={{ color: '#cbd5e1' }}>
                You always trade one currency <strong>against</strong> another — forming a <strong>currency pair</strong>.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>EUR/USD</strong> = Euro vs US Dollar (most traded pair in the world)
                </li>
                <li>If you think the Euro will get stronger against the Dollar → you <strong>buy</strong> EUR/USD</li>
                <li>If you think the Dollar will get stronger → you <strong>sell</strong> EUR/USD</li>
              </ul>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2rem 0 1rem' }}>
                Why Do Prices Move?
              </h4>
              <p style={{ color: '#cbd5e1' }}>
                Currency values change based on supply and demand — influenced by:
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0', color: '#cbd5e1' }}>
                <li>Interest rate decisions by central banks (Fed, ECB, BoE, etc.)</li>
                <li>Economic data (inflation, jobs reports, GDP)</li>
                <li>Geopolitical events (wars, elections, trade deals)</li>
                <li>Market sentiment (risk-on vs risk-off)</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway for beginners: Forex is not about "getting rich quick". It's about understanding why prices move and managing risk properly.
              </p>
            </div>
          </details>

          {/* Module 2 */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('beginner-2'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#22c55e',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['beginner-2'] && <span style={{ color: '#22c55e', fontSize: '1.8rem' }}>✓</span>}
              Module 2: Pips, Lots, Leverage & Margin
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                What is a Pip?
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                A <strong>pip</strong> (Percentage in Point or Price Interest Point) is the smallest price movement a currency pair can make.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>For most pairs (EUR/USD, GBP/USD, etc.) → 1 pip = 0.0001</li>
                <li>For JPY pairs (USD/JPY, GBP/JPY) → 1 pip = 0.01</li>
                <li>Example: EUR/USD moves from 1.0850 to 1.0855 → that's +5 pips</li>
              </ul>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2rem 0 1rem' }}>
                Lot Sizes – How Big is Your Trade?
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                A <strong>lot</strong> is the standard unit size for a trade.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', color: '#cbd5e1' }}>
                <thead>
                  <tr style={{ background: '#0f172a' }}>
                    <th style={{ padding: '0.8rem', border: '1px solid #334155' }}>Lot Type</th>
                    <th style={{ padding: '0.8rem', border: '1px solid #334155' }}>Units</th>
                    <th style={{ padding: '0.8rem', border: '1px solid #334155' }}>Pip Value (approx. on EUR/USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>Standard</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>100,000</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>$10 per pip</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>Mini</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>10,000</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>$1 per pip</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>Micro</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>1,000</td>
                    <td style={{ padding: '0.8rem', border: '1px solid #334155' }}>$0.10 per pip</td>
                  </tr>
                </tbody>
              </table>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2rem 0 1rem' }}>
                Leverage & Margin – The Double-Edged Sword
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                <strong>Leverage</strong> lets you control a large position with a small amount of money.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>1:100 leverage → $1,000 of your money controls $100,000 position</li>
                <li>1:500 → $200 controls $100,000 (very dangerous for beginners!)</li>
              </ul>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                <strong>Margin</strong> is the amount your broker requires you to keep in your account to open/hold a leveraged position.
              </p>
              <p style={{ color: '#ff6b6b', fontWeight: '600' }}>
                Warning: High leverage can wipe out your account in minutes if the market moves against you. Start with 1:10 or 1:30 max!
              </p>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: Use micro lots and low leverage until you consistently understand risk.
              </p>
            </div>
          </details>

          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('beginner-3'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#22c55e',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['beginner-3'] && <span style={{ color: '#22c55e', fontSize: '1.8rem' }}>✓</span>}
              Module 3: How to Read a Forex Chart (First Look)
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                1. Understanding Candlesticks – The Building Blocks
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Every candle on a chart shows price action over a specific time period (e.g., 1 minute, 1 hour, 1 day).
              </p>
              <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
                <strong>Anatomy of a Candlestick:</strong>
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Body</strong>: The thick part – shows open and close price</li>
                <li>Green/White body = Close &gt; Open (bullish – price went up)</li>
                <li>Red/Black body = Close &lt; Open (bearish – price went down)</li>
                <li><strong>Wicks/Shadows</strong>: Thin lines above/below body – show high and low of the period</li>
              </ul>

              <p style={{ color: '#cbd5e1', margin: '1.5rem 0' }}>
                Here are some common single-candle patterns beginners should recognize right away:
              </p>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.wikihow.com/images/5/55/Candlestick-Patterns-Cheat-Sheet-Summary.jpg" 
                  alt="Candlestick Patterns Cheat Sheet" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Comprehensive cheat sheet of key candlestick patterns
                </p>
              </div>

              <p style={{ color: '#cbd5e1', margin: '2rem 0 1rem' }}>
                Quick examples:
              </p>
              <ul style={{ paddingLeft: '1.8rem', color: '#cbd5e1' }}>
                <li><strong>Hammer</strong> (bullish reversal): Small body at top, long lower wick – looks like a hammer. Often at bottoms.</li>
                <li><strong>Doji</strong> (indecision): Open ≈ Close (tiny body). Market unsure – watch for reversal.</li>
                <li><strong>Bullish Engulfing</strong>: Small red candle followed by larger green one that "engulfs" it → potential up move.</li>
                <li><strong>Shooting Star</strong> (bearish): Small body at bottom, long upper wick – potential top reversal.</li>
              </ul>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                2. Timeframes – Choosing Your Chart "Zoom Level"
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Each timeframe shows candles for a different duration. Shorter = more noise, longer = bigger picture.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>M1 (1-minute)</strong>: Very short-term (scalping). Lots of candles, noisy.</li>
                <li><strong>M15 / M30</strong>: Good for intraday trades.</li>
                <li><strong>H1 (1-hour)</strong>: Popular for day trading – balances detail and clarity.</li>
                <li><strong>H4 / D1 (Daily)</strong>: Swing/position trading – shows major trends.</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.babypips.com/images/timeframe-example.jpg" 
                  alt="Timeframe comparison" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Timeframe comparison: Shorter frames show more detail/noise, longer show clearer trends
                </p>
              </div>

              <h4 style={{ color: '#60a5fa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                3. Spotting Trends – The Market's Direction
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                A trend is simply the general direction prices are moving over time.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Uptrend</strong>: Higher highs AND higher lows (connect the lows with an upward line)</li>
                <li><strong>Downtrend</strong>: Lower highs AND lower lows (connect the highs with a downward line)</li>
                <li><strong>Sideways / Range</strong>: No clear direction – price bounces between support and resistance</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.babypips.com/images/trend-types.jpg" 
                  alt="Trend types examples" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  The three main trend types: Uptrend, Sideways (range), Downtrend
                </p>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: "The trend is your friend" – trade in the direction of the higher timeframe trend for better odds.
              </p>
            </div>
          </details>

          {/* Beginner PDF Buttons */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <button onClick={generateBeginnerCheatSheet} style={{ padding: '16px 48px', fontSize: '1.3rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(34,197,94,0.4)' }}>
              Beginner Foundations PDF
            </button>
            <button onClick={generatePipsLotsCheatSheet} style={{ padding: '16px 48px', fontSize: '1.3rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(59,130,246,0.4)' }}>
              Pips & Lots Cheat Sheet
            </button>
            <button onClick={generateChartReadingCheatSheet} style={{ padding: '16px 48px', fontSize: '1.3rem', background: '#eab308', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(234,179,8,0.4)' }}>
              Candlesticks & Timeframes PDF
            </button>
          </div>
        </section>

        {/* Intermediate Level */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#3b82f6',
            marginBottom: '2.5rem',
            textAlign: 'center'
          }}>
            Intermediate Level – Technical Analysis Core
          </h2>

          {/* Intermediate Module 1: Support & Resistance */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('intermediate-1'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#3b82f6',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['intermediate-1'] && <span style={{ color: '#3b82f6', fontSize: '1.8rem' }}>✓</span>}
              Module 1: Support & Resistance Basics – Where Trends Meet Levels
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                What Are Support and Resistance?
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Support and resistance are horizontal price levels (or zones) where the market has historically reversed or paused.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Support</strong>: A "floor" – area where buyers step in aggressively and push price higher</li>
                <li><strong>Resistance</strong>: A "ceiling" – area where sellers step in aggressively and push price lower</li>
                <li>They are not exact lines – think of them as <strong>zones</strong> (thicker bands) rather than razor-thin levels</li>
                <li>The more times a level is tested (touched), the stronger it usually becomes</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/dELkpJGIh0g2aeWzfpiA2WaeaDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Support_and_Resistance_Basics_Aug_2020-01-1c737e0debbe49a88d79388977f33b0c.jpg" 
                  alt="Support and Resistance Basics chart with horizontal levels" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Horizontal support (green) at swing lows and resistance (red) at swing highs
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Role Reversal – The Magic Flip
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                One of the most reliable patterns in technical analysis:
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>When resistance is broken convincingly → it often becomes future support</li>
                <li>When support is broken convincingly → it often becomes future resistance</li>
                <li>Price frequently returns to "retest" the broken level (pullback) before continuing in the breakout direction</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/MANlpRCl6X_VNgFrW5BsDkS7-2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Support_and_Resistance_Reversals_Jan_2020-01-76fa547ca0ac46baadb2985b6418fdc3.jpg" 
                  alt="Support and Resistance Reversal chart showing role flip after breakout" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Role reversal example: Price breaks resistance, pulls back to retest it as new support, then continues higher
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                How to Trade Support & Resistance
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Bounce trades</strong>: Buy near support (with bullish candle confirmation), sell near resistance</li>
                <li><strong>Breakout trades</strong>: Buy when price closes above resistance (with volume/momentum), sell below support</li>
                <li><strong>Fakeouts / Stop hunts</strong>: Be cautious – price can briefly break a level then reverse sharply</li>
                <li><strong>Confluence</strong>: Levels become much stronger when they align with trend direction, round numbers (e.g. 1.1000), previous highs/lows, or Fibonacci retracements</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: "Price remembers" – old levels often act as magnets or barriers again in the future. Always confirm with price action!
              </p>
            </div>
          </details>

          {/* Intermediate Module 2: Trend Lines & Channels */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('intermediate-2'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#3b82f6',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['intermediate-2'] && <span style={{ color: '#3b82f6', fontSize: '1.8rem' }}>✓</span>}
              Module 2: Trend Lines & Channels – Riding the Market's Slope
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                What Are Trend Lines?
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Trend lines are diagonal lines drawn on a chart connecting two or more price points to show the direction of the market.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Uptrend line</strong>: Connects 2+ higher lows (acts as dynamic support)</li>
                <li><strong>Downtrend line</strong>: Connects 2+ lower highs (acts as dynamic resistance)</li>
                <li>More touches = stronger trend line (3+ is ideal)</li>
                <li>Angle matters: Too steep = unsustainable, too flat = weak</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/6KBcMxBtdWwMZ_jSBrb-HsMUDME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/trendline.asp_V1-6e45c6a4a8604000b153cefbfba596a4.png" 
                  alt="Trend line examples showing uptrend and downtrend lines" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Uptrend line (green) connecting higher lows; Downtrend line (red) connecting lower highs
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Trend Channels – Parallel Boundaries
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Channels are created by drawing a parallel line to the trend line, forming upper/lower boundaries.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Ascending channel</strong>: Uptrend line + parallel resistance above</li>
                <li><strong>Descending channel</strong>: Downtrend line + parallel support below</li>
                <li>Price tends to bounce between lines (pullbacks to trend line)</li>
                <li>Breakout beyond channel = potential trend change</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/602lYirMhT7FtmlOkaelQMYXIyQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Channeling_ChartingaPathtoSuccess-487c713b0e3f43eca5a66cda10f6e5c2.png" 
                  alt="Ascending and descending channel examples with price action" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Channels: Price bounces between trend line and parallel boundary
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Trading Pullbacks & Breakouts
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Pullback trades</strong>: Buy at uptrend line bounce (bullish candle), sell at downtrend line bounce</li>
                <li><strong>Breakout trades</strong>: Buy above descending channel resistance, sell below ascending channel support (with volume)</li>
                <li><strong>Fakeouts</strong>: Price briefly breaks then reverses – wait for close beyond line + retest</li>
                <li><strong>Confluence</strong>: Stronger when trend line aligns with horizontal S/R, round numbers, or moving averages</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: Trend lines show momentum direction – respect them until broken with conviction.
              </p>
            </div>
          </details>

          {/* Intermediate Module 3: Moving Averages */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('intermediate-3'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#3b82f6',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['intermediate-3'] && <span style={{ color: '#3b82f6', fontSize: '1.8rem' }}>✓</span>}
              Module 3: Moving Averages – Smoothing Price Action
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                SMA vs EMA – The Two Main Types
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Moving averages smooth out price data to show the underlying trend more clearly.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>SMA (Simple Moving Average)</strong>: Equal weight to all periods – slower, smoother</li>
                <li><strong>EMA (Exponential Moving Average)</strong>: More weight to recent prices – faster reaction to changes</li>
                <li>EMA is preferred for trending markets and short-term trades; SMA for longer-term levels</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/IYDjWgsj9YUQGb25ryai4bf-0eI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_INV-final-Simple-Moving-Average-SMA-May-2021-01-98751e52a2d844a795d8d11434852d7c.jpg" 
                  alt="Simple Moving Average (SMA) chart example" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  SMA (orange) smoothing price data on a chart
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Common Moving Average Periods & Uses
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>9 or 21 EMA</strong>: Short-term momentum, fast entries/exits in trends</li>
                <li><strong>50 SMA/EMA</strong>: Medium-term trend filter, dynamic support/resistance</li>
                <li><strong>200 SMA</strong>: Long-term trend indicator (major bull/bear line), often used as key level</li>
              </ul>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Key Strategies with Moving Averages
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Golden Cross</strong>: Shorter MA (e.g. 50) crosses above longer MA (e.g. 200) → strong bullish signal</li>
                <li><strong>Death Cross</strong>: Shorter MA crosses below longer MA → strong bearish signal</li>
                <li><strong>Pullback to MA</strong>: In uptrend, price dips to rising MA → buy opportunity (vice versa in downtrend)</li>
                <li><strong>Multiple MAs</strong>: Use 9/21/50 for confluence – when stacked in trend direction, it confirms strength</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/bPSwqRWK6VnGyPbBZoHZRTA5upc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GoldenCross-5c6592b646e0fb0001a91e29.png" 
                  alt="Golden Cross and Death Cross examples on a chart" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Golden Cross (bullish) and Death Cross (bearish) signals
                </p>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: Moving averages lag but filter noise – combine with price action and trend for best results. Start with 50/200 on daily charts.
              </p>
            </div>
          </details>

          {/* Placeholder for future Intermediate modules */}
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', marginTop: '3rem' }}>
            More Intermediate modules coming soon: Chart Patterns • RSI & Oscillators • Fibonacci Basics
          </p>

          {/* Intermediate PDF Buttons */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <button
              onClick={generateSupportResistanceCheatSheet}
              style={{
                padding: '18px 50px',
                fontSize: '1.3rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(59,130,246,0.4)'
              }}
            >
              Support & Resistance PDF
            </button>

            <button
              onClick={generateTrendLinesCheatSheet}
              style={{
                padding: '18px 50px',
                fontSize: '1.3rem',
                background: '#eab308',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(234,179,8,0.4)'
              }}
            >
              Trend Lines & Channels PDF
            </button>

            <button
              onClick={generateMovingAveragesCheatSheet}
              style={{
                padding: '18px 50px',
                fontSize: '1.3rem',
                background: '#a78bfa',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(167,139,250,0.4)'
              }}
            >
              Moving Averages PDF
            </button>
          </div>
        </section>

        {/* Advanced Level Placeholder */}
        <section style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#a78bfa',
            marginBottom: '1.5rem'
          }}>
            Advanced Level – Smart Money Concepts (SMC / ICT)
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
            Market Structure • Order Blocks • Fair Value Gaps • Liquidity • Inducement
            <br /><br />
            <strong>Your real trading edge – detailed modules coming soon</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Education;