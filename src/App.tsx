import { useEffect, useRef } from 'react';
import { Cursor } from './components/Cursor';
import { Counter } from './components/Counter';
import { Magnetic } from './components/Magnetic';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { useLocomotive } from './components/useLocomotive';
import { marquee, more, profile, skills, solutions, stats } from './data/resume';

const NAV = [
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'solutions', label: 'Решения' },
  { id: 'contact', label: 'Контакты' },
];

export function App() {
  const { subscribe, scrollTo } = useLocomotive();
  const bar = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return subscribe((s) => {
      if (bar.current) {
        bar.current.style.transform = `scaleX(${s.progress})`;
      }
      heroRef.current?.style.setProperty('--hero-fade', String(Math.max(0, 1 - s.scroll / 700)));
    });
  }, [subscribe]);

  useEffect(() => {
    document.documentElement.classList.add('is-ready');
  }, []);

  return (
    <>
      <Cursor />
      <div ref={bar} className="progress" aria-hidden="true" />

      <header className="nav">
        <a
          href="#top"
          className="nav__logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('top');
          }}
        >
          OK<span>.</span>
        </a>
        <nav>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(`#${n.id}`);
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" ref={heroRef}>
          <div className="blob blob--a" data-scroll data-scroll-speed="-0.15" />
          <div className="blob blob--b" data-scroll data-scroll-speed="0.2" />
          <p className="hero__eyebrow line">
            <span style={{ ['--i' as string]: 0 }}>Frontend Developer · с 2023</span>
          </p>
          <h1 className="hero__title">
            <span className="line">
              <span style={{ ['--i' as string]: 1 }}>Олег</span>
            </span>
            <span className="line">
              <span style={{ ['--i' as string]: 2 }}>Якусик</span>
            </span>
          </h1>
          <p className="hero__sub line">
            <span style={{ ['--i' as string]: 3 }}>
              {profile.role} — {profile.stack}
            </span>
          </p>
          <div className="hero__scroll" data-scroll data-scroll-speed="0.3">
            <i /> листайте вниз
          </div>
        </section>

        <Marquee items={marquee} subscribe={subscribe} />

        <section id="about" className="section about">
          <h2 className="section__label reveal" data-scroll>
            01 — Обо мне
          </h2>
          <div className="about__grid">
            <p className="about__lead reveal" data-scroll>
              Делаю интерфейсы, которые выдерживают бизнес-логику, платежи и шесть языков одновременно.
            </p>
            <div className="about__text" data-scroll data-scroll-speed="0.08">
              {profile.about.map((t) => (
                <p key={t} className="reveal" data-scroll>
                  {t}
                </p>
              ))}
            </div>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat reveal" data-scroll>
                <dt>
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="skills" className="section">
          <h2 className="section__label reveal" data-scroll>
            02 — Навыки
          </h2>
          <div className="skills">
            {skills.map((g, i) => (
              <article
                key={g.title}
                className="skill reveal"
                data-scroll
                data-scroll-speed={i % 2 === 0 ? '0.04' : '-0.04'}
              >
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section__label reveal" data-scroll>
            03 — Проекты
          </h2>
          <Projects />
          <h3 className="subhead reveal" data-scroll>
            Ещё работал над
          </h3>
          <div className="more">
            {more.map((m) => (
              <article key={m.title} className="more__item reveal" data-scroll>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
                <small>{m.stack}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="section">
          <h2 className="section__label reveal" data-scroll>
            04 — Инженерные решения
          </h2>
          <ol className="solutions">
            {solutions.map((s, i) => (
              <li key={s.title} className="solution reveal" data-scroll>
                <span className="solution__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="edu reveal" data-scroll>
            <div>
              <h4>Образование</h4>
              <p>Калининградский государственный технический университет — Прикладная информатика</p>
            </div>
            <div>
              <h4>Языки</h4>
              <p>Русский — родной · Английский — B1</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section__label reveal" data-scroll>
            05 — Контакты
          </h2>
          <p className="contact__title reveal" data-scroll data-scroll-speed="0.06">
            Давайте
            <br />
            <em>поработаем</em>
          </p>
          <div className="contact__links reveal" data-scroll>
            <Magnetic href={profile.telegram} className="btn btn--fill">
              Telegram
            </Magnetic>
            <Magnetic href={`mailto:${profile.email}`} className="btn" external={false}>
              {profile.email}
            </Magnetic>
            <Magnetic href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn" external={false}>
              {profile.phone}
            </Magnetic>
            <Magnetic href={profile.github} className="btn">
              GitHub
            </Magnetic>
          </div>
          <footer className="footer">© {new Date().getFullYear()} Олег Якусик</footer>
        </section>
      </main>
    </>
  );
}
