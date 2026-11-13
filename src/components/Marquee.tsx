import { useEffect, useRef } from 'react';
import type { ScrollState } from './useLocomotive';

type Props = {
  items: string[];
  subscribe: (l: (s: ScrollState) => void) => () => void;
};

/** Бегущая строка, скорость и направление которой зависят от скорости скролла. */
export function Marquee({ items, subscribe }: Props) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0;
    let boost = 0;
    let raf = 0;
    const off = subscribe((s) => {
      boost = s.velocity;
    });
    const tick = () => {
      const el = track.current;
      if (el) {
        const half = el.scrollWidth / 2;
        x -= 0.8 + Math.abs(boost) * 0.6;
        if (x <= -half) {
          x += half;
        }
        el.style.transform = `translate3d(${x}px,0,0) skewX(${Math.max(-12, Math.min(12, -boost * 0.5))}deg)`;
      }
      boost *= 0.92;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      off();
      cancelAnimationFrame(raf);
    };
  }, [subscribe]);

  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={track}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
