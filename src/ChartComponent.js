import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const ChartComponent = ({ pair, direction = 'up', data = [] }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    // Wait for layout (grid sizing)
    const timer = setTimeout(() => {
      if (container.clientWidth < 50) {
        console.log(`[Chart] ${pair} - container too small (${container.clientWidth}px)`);
        return;
      }

      console.log(`[Chart] ${pair} - rendering with ${data.length} points`);

      try {
        const chart = createChart(container, {
          width: container.clientWidth,
          height: 140,
          layout: {
            background: { type: 'solid', color: '#1e293b' },
            textColor: '#cbd5e1',
          },
          grid: {
            vertLines: { color: '#334155' },
            horzLines: { color: '#334155' },
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
          },
          watermark: { visible: false },
        });

        const isUp = direction === 'up';
        const lineColor = isUp ? '#22c55e' : '#ef4444';
        const topColor = isUp ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)';
        const bottomColor = isUp ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';

        const series = chart.addAreaSeries({
          topColor,
          bottomColor,
          lineColor,
          lineWidth: 2.5,
          priceLineVisible: false,
          lastValueVisible: false,
        });

        // Use real data if provided, fallback to fake
        const chartData = data.length > 0 ? data : Array.from({ length: 30 }, (_, i) => ({
          time: i + 1,
          value: 1.08 + Math.sin(i * 0.4) * 0.07 + (Math.random() - 0.5) * 0.025,
        }));

        series.setData(chartData);

        // Force redraws
        const redraw = () => {
          chart.timeScale().fitContent();
          chart.applyOptions({});
        };

        redraw();
        setTimeout(redraw, 50);
        setTimeout(redraw, 200);

        return () => chart.remove();
      } catch (err) {
        console.error(`[Chart ERROR] ${pair}:`, err);
      }
    }, 300); // delay for layout

    return () => clearTimeout(timer);
  }, [pair, direction, data]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: '100%',
        height: '140px',
        minHeight: '140px',
        marginTop: '0.8rem',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#0f172a',
        border: '1px solid #475569',
      }}
    />
  );
};

export default ChartComponent;