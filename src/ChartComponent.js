import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = ({ pair, direction }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    let chart = null;

    try {
      console.log(`[Chart] Creating polished chart for ${pair} (${direction})`);

      chart = createChart(container, {
        width: container.clientWidth,
        height: 140,
        layout: {
          background: { color: '#1e293b' },
          textColor: '#cbd5e1',
        },
        grid: {
          vertLines: { color: '#334155' },
          horzLines: { color: '#334155' },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
        rightPriceScale: {
          borderColor: '#475569',
        },
        watermark: {
          visible: false,  // Try to hide TradingView watermark
        },
      });

      // Colors based on direction
      const lineColor = direction === 'up' ? '#22c55e' : '#ef4444';
      const topColor = direction === 'up' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)';
      const bottomColor = direction === 'up' ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)';

      const areaSeries = chart.addAreaSeries({
        topColor,
        bottomColor,
        lineColor,
        lineWidth: 2,
      });

      // More visible fake data (wavy lines with clear movement)
      const basePrice = direction === 'up' ? 1.085 : 1.095;
      const sampleData = Array.from({ length: 60 }, (_, i) => {
        const time = i + 1;
        const variation = Math.sin(i * 0.25) * 0.03 + Math.cos(i * 0.18) * 0.02 + (Math.random() - 0.5) * 0.01;
        return { time, value: basePrice + variation };
      });

      areaSeries.setData(sampleData);

      // Force fit and redraw
      chart.timeScale().fitContent();
      chart.applyOptions({});  // Trigger re-render

      console.log(`[Chart] Successfully rendered visible lines for ${pair}`);
    } catch (err) {
      console.error(`[Chart ERROR] Failed for ${pair}:`, err);
    }

    const handleResize = () => {
      if (chart && container) {
        chart.applyOptions({ width: container.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initial size

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chart) {
        chart.remove();
        console.log(`[Chart] Cleaned up for ${pair}`);
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