import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const ChartComponent = ({ pair, direction = 'up' }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    let chart = null;
    let series = null;

    try {
      // Create chart with dark theme matching your app
      chart = createChart(container, {
        width: container.clientWidth,
        height: 140,
        layout: {
          background: { type: 'solid', color: '#1e293b' },
          textColor: '#cbd5e1',
          fontFamily: 'Arial, sans-serif',
        },
        grid: {
          vertLines: { color: '#334155', style: 1, visible: true },
          horzLines: { color: '#334155', style: 1, visible: true },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          borderColor: '#475569',
        },
        rightPriceScale: {
          borderColor: '#475569',
        },
        crosshair: {
          mode: CrosshairMode.Normal,
          vertLine: { color: '#64748b', width: 1, style: 3 },
          horzLine: { color: '#64748b', width: 1, style: 3 },
        },
        // Try to hide TradingView watermark (limited control in lightweight version)
        watermark: {
          visible: false,
          color: 'rgba(0,0,0,0)',
        },
      });

      // Color logic based on direction
      const isUp = direction === 'up';
      const lineColor = isUp ? '#22c55e' : '#ef4444';
      const topColor = isUp ? 'rgba(34, 197, 94, 0.35)' : 'rgba(239, 68, 68, 0.35)';
      const bottomColor = isUp ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)';

      series = chart.addAreaSeries({
        topColor,
        bottomColor,
        lineColor,
        lineWidth: 2,
        priceLineVisible: false,
        lastValueVisible: false,
      });

      // Generate visible fake data with clear movement
      const base = isUp ? 1.085 : 1.095;
      const data = Array.from({ length: 60 }, (_, i) => {
        const time = i + 1;
        const wave = Math.sin(i * 0.18) * 0.032 + Math.cos(i * 0.12) * 0.018;
        const noise = (Math.random() - 0.5) * 0.008;
        return { time, value: base + wave + noise };
      });

      series.setData(data);

      // Force proper fit and redraw
      chart.timeScale().fitContent();
      chart.applyOptions({}); // trigger re-render

      console.log(`[Chart OK] Rendered visible lines for ${pair} (${direction})`);
    } catch (err) {
      console.error(`[Chart ERROR] ${pair} failed:`, err);
    }

    // Resize handler
    const handleResize = () => {
      if (chart && container) {
        chart.applyOptions({ width: container.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initial call

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (chart) {
        chart.remove();
        console.log(`[Chart] Removed ${pair}`);
      }
    };
  }, [pair, direction]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: '100%',
        height: '140px',
        marginTop: '0.8rem',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#0f172a',
      }}
    />
  );
};

export default ChartComponent;