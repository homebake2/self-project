import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export type ScrollState = {
  scroll: number;
  limit: number;
  velocity: number;
  progress: number;
};

type Listener = (state: ScrollState) => void;

/**
 * Поднимает Locomotive Scroll (v5, на базе Lenis) и раздаёт
 * подписчикам состояние скролла без перерисовок React.
 */
export function useLocomotive() {
  const instance = useRef<LocomotiveScroll | null>(null);
  const listeners = useRef(new Set<Listener>());

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loco = new LocomotiveScroll({
      lenisOptions: {
        lerp: reduced ? 1 : 0.085,
        smoothWheel: !reduced,
      },
      scrollCallback: (state: { scroll: number; limit: number; velocity: number; progress: number }) => {
        listeners.current.forEach((listener) => {
          listener({
            scroll: state.scroll,
            limit: state.limit,
            velocity: state.velocity,
            progress: state.progress,
          });
        });
      },
    });
    instance.current = loco;

    return () => {
      loco.destroy();
      instance.current = null;
    };
  }, []);

  const subscribe = (listener: Listener) => {
    listeners.current.add(listener);
    return () => {
      listeners.current.delete(listener);
    };
  };

  const scrollTo = (target: string) => {
    instance.current?.scrollTo(target, { offset: 0, duration: 1.4 });
  };

  return { subscribe, scrollTo };
}
