export const profile = {
  name: 'Олег Якусик',
  role: 'Middle+ Frontend Developer',
  stack: 'React / Next.js / TypeScript',
  phone: '+7 902 252 08 83',
  email: 'oleg.kalyugin2001@mail.ru',
  telegram: 'https://t.me/randomdudesz',
  github: 'https://github.com/HomeBake',
  about: [
    'Frontend-разработчик с коммерческим опытом с 2023 года. Основная специализация — React, Next.js и TypeScript.',
    'Самостоятельно веду frontend коммерческих продуктов: от проектирования архитектуры и выбора стека до сложной бизнес-логики, интеграции с backend и настройки процессов разработки.',
    'Работал над банковскими продуктами, туристическими маркетплейсами, платёжными сервисами, CRM и административными системами. Менторю разработчиков и провожу технические собеседования.',
  ],
};

export const stats = [
  { value: 3, suffix: '+', label: 'года коммерческой разработки' },
  { value: 7, suffix: '', label: 'ключевых проектов' },
  { value: 6, suffix: '', label: 'локалей с поддержкой RTL' },
  { value: 20, suffix: '+', label: 'компонентов в UI Kit' },
];

export const skills: { title: string; items: string[] }[] = [
  { title: 'Frontend', items: ['React', 'Vue', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Vite'] },
  {
    title: 'State & Data',
    items: ['TanStack Query', 'Zustand', 'Effector', 'Redux', 'Redux Saga', 'MobX', 'Apollo Client'],
  },
  {
    title: 'UI & Styling',
    items: ['Tailwind CSS', 'MUI', 'Radix UI', 'shadcn/ui', 'Base UI', 'Emotion', 'styled-components', 'Storybook'],
  },
  { title: 'Forms', items: ['React Hook Form', 'TanStack Form', 'Zod'] },
  { title: 'API & Backend', items: ['REST', 'OpenAPI', 'OpenAPI Codegen', 'GraphQL', 'Node.js', 'Strapi', 'PostgreSQL'] },
  { title: 'Testing', items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'Enzyme', 'Chromatic'] },
  {
    title: 'Architecture',
    items: ['Feature-Sliced Design', 'Atomic Design', 'Turborepo', 'CI/CD', 'Biome', 'release-it', 'Lefthook'],
  },
  { title: 'AI & Automation', items: ['MCP', 'Claude Code', 'Skills', 'Hooks', 'AI code review'] },
];

export const marquee = [
  'React', 'Next.js', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind', 'Storybook', 'Playwright', 'GSAP', 'Lenis',
];

export type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'Клиентская платформа туроператора',
    tag: 'Next.js · NDA',
    description: 'Поиск туров, оформление заказов и личный кабинет.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Zustand', 'Zod', 'OpenAPI Codegen'],
    points: [
      'Многошаговое оформление заказа: превью, документы туристов, подтверждение.',
      'Личный кабинет, авторизация, регистрация и управление сессией.',
      'Архив курсов валют с графиками, SEO-страницы на данных API.',
      'Генерация API-клиента из OpenAPI, mock-режим и фабрика API.',
    ],
  },
  {
    id: '02',
    title: 'Back-office туроператора',
    tag: 'Admin · NDA',
    description: 'Административная платформа для контента и бизнес-настроек.',
    stack: ['Next.js', 'TanStack Table', 'TanStack Form', 'Zod', 'PostgreSQL', 'OpenAPI'],
    points: [
      'Новости, акции, баннеры, страны, справочники, клиенты.',
      'Ролевая модель и разграничение прав доступа.',
      'Drag-and-drop сортировка с сохранением порядка в одной транзакции.',
      'Учёт показов баннеров и CTR, эндпоинты и миграции PostgreSQL.',
    ],
  },
  {
    id: '03',
    title: 'Туристический маркетплейс в банковском суперапп',
    tag: 'Mini-app · NDA',
    description: 'Мобильное веб-приложение внутри мини-приложения крупного банка.',
    stack: ['React', 'Vite', 'Emotion', 'Radix UI', 'Storybook', 'Playwright'],
    points: [
      'Архитектура по Feature-Sliced Design.',
      'UI Kit с документацией в Storybook.',
      'Поиск и бронирование туров, отелей и авиабилетов.',
      'Идемпотентный checkout, интеграция с нативной оболочкой через bridge.',
    ],
  },
  {
    id: '04',
    title: 'Мини-приложение в мессенджере MAX',
    tag: 'Messenger · NDA',
    description: 'Оформление и управление заказами внутри мессенджера.',
    stack: ['React', 'Vite', 'Emotion', 'TanStack Query', 'Sentry', 'Prism', 'Vitest'],
    points: [
      'Коннекторы, мапперы, разделение бизнес-логики и UI.',
      'Авторизация через мессенджер, OTP с учётом Android и iOS.',
      'Безопасное хранилище и персистентный кэш запросов.',
      'Выбор точек выдачи на Яндекс.Картах, Sentry и feature flags.',
    ],
  },
  {
    id: '05',
    title: 'Сервис записи на услуги и партнёрская CRM',
    tag: 'Monorepo · NDA',
    description: 'Клиентское приложение, CRM для партнёров и админ-панель.',
    stack: ['React', 'Turborepo', 'MUI', 'Radix UI', 'Chromatic', 'Sentry'],
    points: [
      'Монорепозиторий, CI, линтинг и автоматические релизы.',
      'UI Kit на MUI: 20+ компонентов с кастомной темой.',
      'CRM: точки, сотрудники, графики, услуги, расписание.',
      'AI-ревьюер в CI, включая проверки интернационализации.',
    ],
  },
  {
    id: '06',
    title: 'Многоязычная туристическая платформа',
    tag: 'i18n · NDA',
    description: 'Сайт и лендинг туристического портала на шести локалях.',
    stack: ['Next.js', 'next-intl', 'Base UI', 'GSAP', 'Lenis', 'Strapi', 'Playwright'],
    points: [
      'Шесть локалей, поддержка RTL и мобильная адаптация.',
      'Сценарий покупки страховки: поиск, оплата, статус полиса.',
      'Виджет проверки визы, e-Visa и справочник посольств.',
      'Анимированный лендинг на GSAP и Lenis, доработка Strapi.',
    ],
  },
  {
    id: '07',
    title: 'Внутренние AI-инструменты',
    tag: 'AI · MCP',
    description: 'Интеграция AI-ассистентов с инфраструктурой разработки.',
    stack: ['Python', 'TypeScript', 'MCP', 'Claude Code', 'httpx', 'pytest'],
    points: [
      'MCP-сервер Яндекс.Метрики: счётчики, цели, отчёты, Logs API.',
      'Skills для Claude Code: OpenAPI, коммиты, справочники.',
      'Hooks и автоматизация инженерных процессов.',
    ],
  },
];

export const solutions = [
  {
    title: 'Динамические формы и checkout',
    text: 'Набор полей и правила обязательности приходят из API. Генерация форм, валидация на Zod, идемпотентность отправки заказа.',
  },
  {
    title: 'Платёжные интеграции',
    text: 'СБП, SberPay, цифровой рубль. QR-оплата, опрос статуса с учётом жизни сессии и fallback на другой способ.',
  },
  {
    title: 'Версионирование и конкурентное редактирование',
    text: 'Ревизии настроек, аудит-лог, optimistic concurrency, обработка 409 и 422, атомарное сохранение порядка.',
  },
  {
    title: 'Мультиязычность и RTL',
    text: 'Шесть локалей, зеркалирование интерфейса, локализованный контент и визуальное тестирование состояний.',
  },
  {
    title: 'AI-инструменты',
    text: 'MCP-сервер для Метрики, AI-ревьюер в CI, Skills для Claude Code, автоматизация OpenAPI и i18n-проверок.',
  },
];

export const more = [
  { title: 'Административная платформа издательства', text: 'Модерация, фильтрация, доступы, экспорт в Excel.', stack: 'React · MUI · Zustand' },
  { title: 'Яндекс.Витрина', text: 'Каталог, поиск, корзина, избранное, UI Kit.', stack: 'React · MobX · Storybook' },
  { title: 'Demuzo', text: 'Keycloak, NextAuth, аудиоплеер, админ-инструменты.', stack: 'Next.js · Effector' },
  { title: 'HRM-система', text: 'OAuth 2.0, GraphQL, Camunda BPMN.', stack: 'Next.js · Strapi' },
  { title: 'BackApp', text: 'Сервис подписок и интеграция Paddle.', stack: 'React Native' },
  { title: 'Банк и ЕМИАС', text: 'KYC, запись к врачу, вакцинация, legacy-поддержка.', stack: 'React · Redux · Effector' },
];
