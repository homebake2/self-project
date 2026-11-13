import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/resume';

export function Projects() {
  const [open, setOpen] = useState<string | null>('01');
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const list = useRef<HTMLUListElement>(null);

  // Появление строк независимо от Locomotive. Флаг хранится в состоянии React,
  // иначе перерисовка className стирает вручную добавленный класс.
  useEffect(() => {
    const items = list.current?.querySelectorAll<HTMLElement>('.project');
    if (!items) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const ids = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => (entry.target as HTMLElement).dataset.id as string);
        if (ids.length === 0) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
          }
        });
        setSeen((prev) => new Set([...prev, ...ids]));
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ul className="projects" ref={list}>
      {projects.map((p, i) => {
        const isOpen = open === p.id;
        return (
          <li
            key={p.id}
            data-id={p.id}
            className={`project reveal ${seen.has(p.id) ? 'is-inview' : ''} ${isOpen ? 'is-open' : ''}`}
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <button
              className="project__head"
              data-cursor
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : p.id)}
            >
              <span className="project__id">{p.id}</span>
              <span className="project__title">{p.title}</span>
              <span className="project__tag">{p.tag}</span>
              <span className="project__plus" aria-hidden="true" />
            </button>
            <div className="project__body">
              <div className="project__inner">
                <p className="project__desc">{p.description}</p>
                <ul className="project__points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
