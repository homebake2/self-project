import { useRef, type ReactNode } from 'react';

type Props = { children: ReactNode; href: string; className?: string; external?: boolean };

/** Ссылка, мягко «притягивающаяся» к курсору. */
export function Magnetic({ children, href, className = '', external = true }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.3}px, ${dy * 0.4}px)`;
  };
  const leave = () => {
    if (ref.current) {
      ref.current.style.transform = '';
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      onMouseMove={move}
      onMouseLeave={leave}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
