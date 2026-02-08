import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = ({ pair }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let chart = null;
    try {
      chart = createChart(containerRef.current, {
        width: containerRef.current.clientWidth,
        height: 140,
        layout: { background: { color: '#1e293b' }, textColor: '#cbd5e1' },
        grid: { vertLines: { color: '#334155' }, horzLines: { color: '#334155' } },
        timeScale: { timeVisible: true, secondsVisible: false },
        rightPriceScale: { borderColor: '#475569' },
      });

      const areaSeries = chart.addAreaSeries({
        topColor: 'rgba(34, 197, 94, 0.3)',
        bottomColor: 'rgba(34, 197, 94, 0.01)',
        lineColor: '#22c55e',
        lineWidth: 2,
      });

      // Fake data (random walk)
      const fakeData = Array.from({ length: 60 }, (_, i) => ({
        time: i + 1,
        value: 1.08 + Math.sin(i * 0.1) * 0.015 + Math.random() * 0.005,
      }));

      areaSeries.setData(fakeData);
      chart.timeScale().fitContent();

      console.log(`Chart loaded for ${pair}`);
    } catch (err) {
      console.error(`Chart failed for ${pair}:`, err);
    }

    const resize = () => {
      if (chart && containerRef.current) {
        chart.applyOptions({ width: containerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', resize);
    resize(); // initial resize

    return () => {
      window.removeEventListener('resize', resize);
      if (chart) chart.remove();
    };
  }, [pair]);

  return (
    <div
      ref={containerRef}
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