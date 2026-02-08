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

  // PDF 1: Beginner Foundations
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

  // PDF 2: Pips, Lots, Leverage & Margin
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

  // PDF 3: Candlesticks & Timeframes
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

  // PDF 4: Support & Resistance
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

  // PDF 5: Trend Lines & Channels
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

  // PDF 6: Moving Averages
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

  // PDF 7: Chart Patterns (Intermediate)
  const generateChartPatternsCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Chart Patterns Cheat Sheet – The Money Makers', 20, 20);
    doc.setFontSize(14);
    doc.text('Reversal Patterns', 20, 45);
    doc.setFontSize(11);
    doc.text('• Double Top: "M" shape – sell on neckline break', 30, 55);
    doc.text('• Double Bottom: "W" shape – buy on neckline break', 30, 62);
    doc.text('• Head & Shoulders: 3 peaks, middle highest – bearish', 30, 69);
    doc.text('• Inverse H&S: 3 troughs – bullish reversal', 30, 76);
    doc.setFontSize(14);
    doc.text('Continuation Patterns', 20, 95);
    doc.setFontSize(11);
    doc.text('• Bull Flag: Tight consolidation after strong up move → continuation', 30, 105);
    doc.text('• Bear Flag: Same but down', 30, 112);
    doc.text('• Ascending Triangle: Flat top, rising support → bullish breakout', 30, 119);
    doc.text('• Descending Triangle: Flat bottom, falling resistance → bearish', 30, 126);
    doc.text('• Symmetrical Triangle: Converging lines – breakout direction of trend', 30, 133);
    doc.setFontSize(14);
    doc.text('Pro Tips', 20, 155);
    doc.setFontSize(11);
    doc.text('• Wait for CLOSE beyond neckline/support/resistance', 30, 165);
    doc.text('• Volume confirmation = stronger signal', 30, 172);
    doc.text('• Target = pattern height added to breakout point', 30, 179);
    doc.text('• Best setups: At key S/R + trend line + MA confluence', 30, 186);
    doc.setFontSize(12);
    doc.text('These patterns + confluence = your consistent edge', 20, 210);
    doc.save('Chart-Patterns-Cheat-Sheet.pdf');
  };

  // PDF 8: Market Structure (Advanced Module 1)
  const generateMarketStructureCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Market Structure Cheat Sheet – SMC/ICT Foundation', 20, 20);
    doc.setFontSize(14);
    doc.text('Bullish Structure', 20, 45);
    doc.setFontSize(11);
    doc.text('• Higher Highs (HH) + Higher Lows (HL)', 30, 55);
    doc.text('• Break of Structure (BOS): New HH after previous HL', 30, 62);
    doc.text('• Change of Character (CHOCH): Failed BOS + lower low', 30, 69);
    doc.setFontSize(14);
    doc.text('Bearish Structure', 20, 95);
    doc.setFontSize(11);
    doc.text('• Lower Highs (LH) + Lower Lows (LL)', 30, 105);
    doc.text('• BOS: New LL after previous LH', 30, 112);
    doc.text('• CHOCH: Failed BOS + higher high', 30, 119);
    doc.setFontSize(14);
    doc.text('Key Rules', 20, 145);
    doc.setFontSize(11);
    doc.text('• Draw structure on higher timeframes first (H4/D1)', 30, 155);
    doc.text('• BOS = continuation (trend strength)', 30, 162);
    doc.text('• CHOCH = potential reversal (watch for liquidity grabs)', 30, 169);
    doc.text('• Always confirm with displacement (strong candle)', 30, 176);
    doc.setFontSize(12);
    doc.text('Market structure is the map – order blocks & FVGs are the treasures', 20, 200);
    doc.save('Market-Structure-Cheat-Sheet.pdf');
  };

  // NEW PDF 9: Classic Chart Patterns (Head & Shoulders, Double Top/Bottom, etc.)
  const generateClassicPatternsCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Classic Chart Patterns Cheat Sheet', 20, 20);
    
    doc.setFontSize(14);
    doc.text('Head & Shoulders (Bearish)', 20, 45);
    doc.setFontSize(11);
    doc.text('• Left shoulder → Head (highest) → Right shoulder', 30, 55);
    doc.text('• Neckline break = sell signal', 30, 62);
    doc.text('• Target = head to neckline distance down from break', 30, 69);
    
    doc.setFontSize(14);
    doc.text('Double Top / Double Bottom', 20, 85);
    doc.setFontSize(11);
    doc.text('• Double Top ("M") – sell on neckline break', 30, 95);
    doc.text('• Double Bottom ("W") – buy on neckline break', 30, 102);
    
    doc.setFontSize(14);
    doc.text('Trading Rules', 20, 125);
    doc.setFontSize(11);
    doc.text('• Confirm with volume spike on break', 30, 135);
    doc.text('• Stop beyond extreme (head / second top/bottom)', 30, 142);
    doc.text('• Stronger at key S/R + MA confluence', 30, 149);
    
    doc.setFontSize(12);
    doc.text('These are timeless patterns – respect them at structure', 20, 180);
    
    doc.save('Classic-Patterns-Head-Shoulders.pdf');
  };

  // NEW PDF 10: Order Blocks & Fair Value Gaps
  const generateOrderBlocksFVGsCheatSheet = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Order Blocks & Fair Value Gaps Cheat Sheet', 20, 20);
    
    doc.setFontSize(14);
    doc.text('Order Blocks', 20, 45);
    doc.setFontSize(11);
    doc.text('• Last strong candle before impulsive move', 30, 55);
    doc.text('• Mitigation: Price returns to fill block', 30, 62);
    doc.text('• Breaker: Failed block → opposite bias', 30, 69);
    doc.text('• Identify: Strong displacement + reversal candle', 30, 76);
    
    doc.setFontSize(14);
    doc.text('Fair Value Gaps (FVGs)', 20, 95);
    doc.setFontSize(11);
    doc.text('• 3-candle inefficiency gap (wick to wick)', 30, 105);
    doc.text('• Bullish FVG: Gap up → expect fill then up', 30, 112);
    doc.text('• Bearish FVG: Gap down → expect fill then down', 30, 119);
    doc.text('• Trade: Enter on retest + structure', 30, 126);
    
    doc.setFontSize(12);
    doc.text('Best: OB + FVG at BOS/CHOCH level = high-probability', 20, 160);
    
    doc.save('Order-Blocks-Fair-Value-Gaps.pdf');
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
                  alt="Candlestick Patterns Cheat Sheet showing Doji, Hammer, Engulfing, etc." 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Comprehensive cheat sheet of key candlestick patterns (bullish in green tones, bearish in red)
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
                  src="https://wp.fxssi.com/wp-content/uploads/2019/09/h1-timeframe-en.png" 
                  alt="H1 (1-hour) timeframe chart example" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Example of H1 timeframe – each candle = 1 hour of price action
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
                  src="https://blog.opofinance.com/en/wp-content/uploads/2025/02/Types-of-trend-in-forex-trading-2.jpg" 
                  alt="Diagram showing uptrend, downtrend, and sideways range" 
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

          {/* Support & Resistance */}
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
                  Horizontal support (green) at lows and resistance (red) at highs
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
                <li>Price frequently returns to "retest" the broken level (pullback) before continuing</li>
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
                <li><strong>Breakout trades</strong>: Buy when price closes above resistance (strong volume/momentum), sell below support</li>
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

          {/* Moving Averages */}
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
                <li><strong>EMA (Exponential Moving Average)</strong>: More weight to recent prices – faster reaction</li>
                <li>EMA is preferred for trending markets; SMA for longer-term support/resistance</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/IYDjWgsj9YUQGb25ryai4bf-0eI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_INV-final-Simple-Moving-Average-SMA-May-2021-01-98751e52a2d844a795d8d11434852d7c.jpg" 
                  alt="SMA vs EMA comparison on a chart" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  SMA (red) vs EMA (blue): EMA reacts faster to price changes
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Common Moving Average Periods & Uses
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>9 or 21 EMA</strong>: Short-term momentum, fast entries/exits</li>
                <li><strong>50 SMA/EMA</strong>: Medium-term trend filter, dynamic support/resistance</li>
                <li><strong>200 SMA</strong>: Long-term trend (major bull/bear line), institutional level</li>
              </ul>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Key Strategies with Moving Averages
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Golden Cross</strong>: Shorter MA (e.g. 50) crosses above longer MA (e.g. 200) → bullish</li>
                <li><strong>Death Cross</strong>: Shorter MA crosses below longer MA → bearish</li>
                <li><strong>Pullback to MA</strong>: In uptrend, price dips to rising MA → buy opportunity (vice versa in downtrend)</li>
                <li><strong>Multiple MAs</strong>: Use 9/21/50 for confluence – stack in direction of trend</li>
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
                Key takeaway: Moving averages lag but filter noise – combine with price action and trend for best results.
              </p>
            </div>
          </details>

          {/* Intermediate Module 4: Chart Patterns */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('intermediate-4'); }}
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
              {completedModules['intermediate-4'] && <span style={{ color: '#3b82f6', fontSize: '1.8rem' }}>✓</span>}
              Module 4: Chart Patterns – The Money Makers
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                Why Chart Patterns Work
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Patterns are the footprint of smart money accumulation/distribution. When you see the same setup repeat at key levels with volume – that’s institutional order flow.
              </p>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Reversal Patterns
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Head & Shoulders</strong>: Left shoulder, higher head, right shoulder → bearish on neckline break</li>
                <li><strong>Inverse Head & Shoulders</strong>: Bullish mirror version</li>
                <li><strong>Double Top ("M")</strong>: Two peaks at resistance → sell on neckline break</li>
                <li><strong>Double Bottom ("W")</strong>: Two troughs at support → buy on neckline break</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/5f4e8f8f8e8f8e8f8e8f8e8f8e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Head_and_Shoulders_Pattern_Aug_2020-03-5f4e8f8f8e8f8e8f8e8f8e8f.png" 
                  alt="Head and Shoulders pattern with neckline and target" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Head & Shoulders: Classic bearish reversal – sell on confirmed neckline break
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Continuation Patterns
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Bull Flag / Bear Flag</strong>: Tight consolidation after strong move → same direction continuation</li>
                <li><strong>Ascending Triangle</strong>: Flat top, rising support → bullish breakout likely</li>
                <li><strong>Descending Triangle</strong>: Flat bottom, falling resistance → bearish breakout</li>
                <li><strong>Symmetrical Triangle</strong>: Converging lines – breakout usually in direction of prior trend</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.investopedia.com/thmb/9z6f3wL8oW9z2y5f4v1g7z8h9j0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BullandBearFlags-5f4e8f8f8e8f8e8f8e8f8e8f8e8.png" 
                  alt="Bull and Bear Flag patterns" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Flags & Pennants – high-probability continuation setups after impulse
                </p>
              </div>

              <h4 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Trading Tips
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Wait for close beyond neckline / pattern boundary</li>
                <li>Volume spike on breakout = higher conviction</li>
                <li>Target = pattern height measured from breakout point</li>
                <li>Stop loss just beyond pattern extreme</li>
                <li>Best with confluence: Pattern at key S/R + trend line + MA</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Master these patterns + confluence = consistent profits in trending markets.
              </p>
            </div>
          </details>

          {/* Advanced Module 1: Market Structure */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('advanced-1'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#a78bfa',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['advanced-1'] && <span style={{ color: '#a78bfa', fontSize: '1.8rem' }}>✓</span>}
              Module 1: Market Structure – The Foundation of SMC/ICT
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                What is Market Structure?
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Market structure is the overall framework of price movement – it tells you who is in control (bulls or bears) and whether the trend is likely to continue or reverse.
              </p>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Bullish Market Structure
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Higher Highs (HH) + Higher Lows (HL)</li>
                <li>Break of Structure (BOS): Price makes a new Higher High after a Higher Low → trend continuation</li>
                <li>Change of Character (CHOCH): Failed BOS + price makes a Lower Low → potential reversal</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/7zK9vL8p/" 
                  alt="Bullish market structure with BOS and CHOCH" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Bullish structure: HH + HL, BOS confirms continuation, CHOCH warns of reversal
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Bearish Market Structure
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Lower Highs (LH) + Lower Lows (LL)</li>
                <li>BOS: New Lower Low after Lower High → bearish continuation</li>
                <li>CHOCH: Failed BOS + Higher High → potential bullish reversal</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/8pQ2vM9k/" 
                  alt="Bearish market structure with BOS and CHOCH" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Bearish structure: LH + LL, BOS confirms downtrend, CHOCH signals possible reversal
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                How to Use Market Structure
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Draw structure on higher timeframes first (H4/D1) → gives the big picture</li>
                <li>BOS = trend is strong – look for entries in direction (order blocks, FVGs)</li>
                <li>CHOCH = warning sign – watch for liquidity grabs or reversal setups</li>
                <li>Always confirm with displacement (strong impulsive candle) and volume</li>
                <li>Never trade against the higher timeframe structure – that's fighting smart money</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Key takeaway: Market structure is the map. Everything else (order blocks, FVGs, liquidity) is the treasure on that map.
              </p>
            </div>
          </details>

          {/* Advanced Module 2: Classic Chart Patterns */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('advanced-2'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#a78bfa',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['advanced-2'] && <span style={{ color: '#a78bfa', fontSize: '1.8rem' }}>✓</span>}
              Module 2: Classic Chart Patterns – Head & Shoulders, Double Tops/Bottoms
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                Head & Shoulders (Bearish Reversal)
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Classic topping pattern signaling trend reversal from bullish to bearish.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Left shoulder: Peak + pullback</li>
                <li>Head: Higher peak + pullback</li>
                <li>Right shoulder: Lower peak (similar height to left shoulder)</li>
                <li>Neckline: Connects lows between shoulders</li>
                <li>Trigger: Close below neckline + volume increase</li>
                <li>Target: Distance from head to neckline projected down from break</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/5nL2pQ8r/" 
                  alt="Head and Shoulders pattern with neckline break" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Head & Shoulders: Classic bearish reversal pattern with clear neckline break
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Double Top / Double Bottom
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Simple but powerful reversal patterns at major levels.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Double Top ("M"): Two peaks at resistance → sell on neckline break</li>
                <li>Double Bottom ("W"): Two troughs at support → buy on neckline break</li>
                <li>Target: Pattern height projected from breakout point</li>
                <li>Stronger with divergence or volume spike</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/3kM7vN9q/" 
                  alt="Double Top and Double Bottom patterns" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Double Top (bearish) and Double Bottom (bullish) at major levels
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Trading Tips for Classic Patterns
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Wait for confirmed close beyond neckline</li>
                <li>Volume increase on break = higher probability</li>
                <li>Best when pattern forms at key structure (previous S/R, order block, FVG)</li>
                <li>Stop loss beyond pattern extreme</li>
                <li>Confluence = higher win rate (MA, Fibonacci, higher TF alignment)</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                These patterns have been printing money for decades. Combine with SMC tools for maximum edge.
              </p>
            </div>
          </details>

          {/* Advanced Module 3: Order Blocks & Fair Value Gaps */}
          <details 
            style={{
              background: '#1e293b',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #334155',
              overflow: 'hidden'
            }}
            onToggle={(e) => { if (e.target.open) markModuleComplete('advanced-3'); }}
          >
            <summary style={{
              padding: '1.8rem 2rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: '#0f172a',
              color: '#a78bfa',
              listStyle: 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {completedModules['advanced-3'] && <span style={{ color: '#a78bfa', fontSize: '1.8rem' }}>✓</span>}
              Module 3: Order Blocks & Fair Value Gaps – Core SMC Tools
            </summary>
            <div style={{ padding: '0 2rem 2.5rem 2rem', lineHeight: '1.7' }}>
              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '1.8rem 0 1rem' }}>
                Order Blocks – Where Institutions Rest
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                Order blocks are the last strong candle(s) before a large impulsive move – areas where big players placed orders.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Mitigation Block</strong>: Price returns to retest/fill previous block (pullback entry)</li>
                <li><strong>Breaker Block</strong>: Failed block – price breaks through and reverses (becomes opposite bias)</li>
                <li>Identify: Strong displacement candle + reversal candle at key level</li>
                <li>Trade: Enter on retest with BOS/CHOCH confirmation</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/9mP4vN7q/" 
                  alt="Order Block example with mitigation and breaker" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Order Block: Last strong candle before impulse – price respects on retest
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Fair Value Gaps (FVGs / Imbalances)
              </h4>
              <p style={{ color: '#cbd5e1', marginBottom: '1.2rem' }}>
                FVGs are three-candle inefficiencies where price moved aggressively, leaving a gap between wicks – price often returns to fill them.
              </p>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li><strong>Bullish FVG</strong>: Gap up – expect pullback to fill then continuation higher</li>
                <li><strong>Bearish FVG</strong>: Gap down – expect pullback to fill then continuation lower</li>
                <li><strong>Inverse FVG</strong>: Gap against trend – often traps retail traders</li>
                <li>Trade: Enter when price re-enters FVG + structure (BOS)</li>
              </ul>

              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <img 
                  src="https://www.tradingview.com/x/4kL9mP2r/" 
                  alt="Fair Value Gap example with bullish and bearish gaps" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', loading: 'lazy', referrerPolicy: 'no-referrer' }}
                />
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.8rem' }}>
                  Fair Value Gap: Price inefficiency – expect fill before continuation
                </p>
              </div>

              <h4 style={{ color: '#a78bfa', fontSize: '1.4rem', margin: '2.5rem 0 1rem' }}>
                Combining OB & FVG
              </h4>
              <ul style={{ paddingLeft: '1.8rem', margin: '1rem 0 1.5rem', color: '#cbd5e1' }}>
                <li>Strongest setups: OB + FVG at key structure (BOS/CHOCH level)</li>
                <li>Look for displacement into block/gap → retest = high-probability entry</li>
                <li>Stop loss beyond block/gap extreme</li>
                <li>Target next structure or liquidity pool</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                Order Blocks = institutional resting spots. FVGs = imbalances left behind. Together = elite SMC entries.
              </p>
            </div>
          </details>

          {/* Placeholder for future Advanced modules */}
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', marginTop: '3rem' }}>
            More Advanced modules coming soon: Liquidity Grabs • Inducement • Breaker Blocks • Optimal Trade Entry
          </p>

          {/* All PDF Buttons */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {/* Beginner */}
            <button onClick={generateBeginnerCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(34,197,94,0.4)' }}>
              Beginner Foundations
            </button>
            <button onClick={generatePipsLotsCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(59,130,246,0.4)' }}>
              Pips & Lots
            </button>
            <button onClick={generateChartReadingCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#eab308', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(234,179,8,0.4)' }}>
              Candlesticks & Timeframes
            </button>

            {/* Intermediate */}
            <button onClick={generateSupportResistanceCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(59,130,246,0.4)' }}>
              S&R
            </button>
            <button onClick={generateTrendLinesCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#eab308', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(234,179,8,0.4)' }}>
              Trend Lines
            </button>
            <button onClick={generateMovingAveragesCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#a78bfa', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(167,139,250,0.4)' }}>
              Moving Averages
            </button>
            <button onClick={generateChartPatternsCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(239,68,68,0.4)' }}>
              Chart Patterns
            </button>

            {/* Advanced */}
            <button onClick={generateMarketStructureCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#a78bfa', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(167,139,250,0.4)' }}>
              Market Structure
            </button>
            <button onClick={generateClassicPatternsCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(239,68,68,0.4)' }}>
              Classic Patterns
            </button>
            <button onClick={generateOrderBlocksFVGsCheatSheet} style={{ padding: '16px 40px', fontSize: '1.2rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(34,197,94,0.4)' }}>
              Order Blocks & FVGs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;