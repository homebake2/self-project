import { useEffect, useRef, useState } from 'react';

type Props = { value: number; suffix?: string };

/** Счётчик, стартующий при появлении в окне. */
export function Counter({ value, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      io.disconnect();
      const start = performance.now();
      const run = (now: number) => {
        const t = Math.min((now - start) / 1400, 1);
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) {
          raf = requestAnimationFrame(run);
        }
      };
      raf = requestAnimationFrame(run);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
