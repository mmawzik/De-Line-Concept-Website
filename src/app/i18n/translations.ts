export type Lang = "en" | "ru";

/* English is the source of truth for the shape; `ru` must match it. */
const en = {
  langName: { en: "EN", ru: "RU" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "Every project starts with De Line",
    links: [
      { label: "Presence", href: "#foshan" },
      { label: "Process", href: "#journey" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Start project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    language: "Language",
  },

  hero: {
    eyebrow: "Furniture sourcing & manufacturing",
    title: [
      { a: "Furniture,", em: "", b: "" },
      { a: "", em: "Designed", b: " by you," },
      { a: "", em: "Delivered", b: " by us." },
    ],
    sub: "You bring the design — we make it real. Built to spec by our trusted factory network, inspected at every stage, delivered ready to install. For premium interiors of every scale, residential to commercial.",
    stats: [
      { target: 16, label: "Years China sourcing" },
      { target: 20, label: "Years furniture expertise" },
      { target: 150, label: "Clients from 20 countries" },
    ],
    ctaPrimary: "See our work",
    ctaSecondary: "Start your project",
    caption: { drawn: "Drawn", built: "Built" },
    pieces: ["Lounge chair — drawn, then built", "Sofa — drawn, then built", "Wardrobe — drawn, then built"],
  },

  foshan: {
    eyebrow: "Presence · Foshan",
    dateline: "Foshan · Guangdong · 23.0°N 113.1°E",
    locatorLabel: "On the ground in Foshan",
    cityLabel: "Foshan",
    heading: "Inside China’s furniture corridor.",
    lead: "You provide the design; from Foshan — the heart of China’s furniture industry — we deliver the finished project.",
    cards: [
      {
        title: "Manufactured to your design",
        body: "Your drawings, built to exact tolerances by the right workshop in our vetted network.",
      },
      {
        title: "Confirmed before production",
        body: "Every material and finish approved up front — by samples sent, or in our Foshan showroom.",
      },
      {
        title: "Inspected to specification",
        body: "Checked at material, mid-production, and pre-shipment — defects rejected at our expense, documented same-day.",
      },
      {
        title: "Delivered as one project",
        body: "One bilingual lead, full export documentation, freight coordinated — delivered as a single finished project.",
      },
    ],
    hqLabel: "Foshan showroom",
    addressLocal: "佛山市，广东省",
    addressRoman: "New showroom — opening soon",
  },

  journey: {
    eyebrow: "Your design to delivery",
    heading: "Every project follows one line.",
    lead: "You bring the design — from there, one team owns every stage and shows you each one, from the first drawing to the piece installed and signed off.",
    stages: [
      { label: "Brief and quote", desc: "Your brief, drawn to spec and priced" },
      { label: "Design tour", desc: "Approve finishes in our showroom, or by photo and samples sent" },
      { label: "Build", desc: "Sample approved, then produced to spec" },
      { label: "Inspect", desc: "Multi-point QC — photos, approve or reject" },
      { label: "Export", desc: "Crated, wood-certified, every document prepared" },
      { label: "Deliver", desc: "Shipped by our partners, installed, signed off" },
    ],
  },

  portfolio: {
    eyebrow: "Selected work",
    heading: "Portfolio.",
    lead: "A sample of recent engagements across hospitality, residential, commercial, and large-scale facility projects.",
    filters: [
      { key: "all", label: "All" },
      { key: "hospitality", label: "Hospitality" },
      { key: "residential", label: "Residential" },
      { key: "commercial", label: "Commercial" },
      { key: "facility", label: "Facility" },
    ],
    viewProject: "View project",
    close: "Close",
    projects: [
      {
        tag: "hospitality",
        title: "Boutique Hospitality Suite",
        category: "Horeca · 42 rooms",
        status: "In production",
        materials: "Italian nubuck, micro-welded PVD brass, flame-retardant certification",
        body: "Custom millwork and seating program for a boutique European hospitality client. Full FF&E coordination across 42 keys.",
      },
      {
        tag: "residential",
        title: "Private Residence — Riviera",
        category: "Residential",
        status: "Delivered 2025",
        materials: "Arabescato marble, hand-finished walnut, bespoke bronze hardware",
        body: "End-to-end bespoke joinery and seating for a private residence. Single-container consolidated delivery.",
      },
      {
        tag: "commercial",
        title: "Corporate Headquarters — APAC",
        category: "Projects · 8 floors",
        status: "In production",
        materials: "Acoustic veneer panels, technical-fabric upholstery, integrated cable management",
        body: "Workspace fit-out across eight floors. Volume sourcing with a custom design language and full QA.",
      },
      {
        tag: "facility",
        title: "Wellness Resort — Aegean",
        category: "Facility",
        status: "Delivered 2025",
        materials: "Outdoor-grade teak, marine-spec stainless, UV-stable upholstery",
        body: "Outdoor and indoor seating program for a 120-suite wellness resort. Direct factory-to-port consolidation.",
      },
    ],
  },

  team: {
    eyebrow: "The minds behind De Line",
    heading: "Real people, accountable on the ground.",
    lead: "The people who actually own your project — on China’s factory floors, in product translation, large-scale contracting, and client management.",
    portraitLabel: "Portrait",
    previousLabel: "Previously",
    members: [
      {
        name: "Dauren Gazizov",
        role: "Chief Product Officer",
        location: "Foshan workshop",
        summary: "Turns your design into specs China’s workshops build right — and runs the inspections that hold the quality line.",
        previously: "Designer · Design.ai",
        distinctions: ["20 yrs in furniture", "On the floor in Foshan", "Owns multi-point QA"],
      },
      {
        name: "Daniyar Kenzhebekov",
        role: "Chief Operating Officer",
        location: "Foshan base",
        summary: "Fifteen years on China’s factory floors — negotiates pricing direct and consolidates every container.",
        previously: "Operations Manager · Kaspi",
        distinctions: ["15 yrs sourcing in China", "Fluent on the factory floor", "Direct volume pricing"],
      },
      {
        name: "Zulyar Turganov",
        role: "Chief Executive Officer",
        location: "International",
        summary: "Leads the largest, most complex builds — commercial terms through execution against hard deadlines.",
        previously: "Project Manager · BI Group",
        distinctions: ["Large-scale projects", "Multi-party builds", "Commercial structuring"],
      },
      {
        name: "Saltanat",
        role: "Chief Marketing Officer",
        location: "International bridge",
        summary: "Your single point of contact — turns architect and hotelier briefs into technical parameters.",
        previously: "Manager · Atlanta",
        distinctions: ["Client risk & transparency", "Architect & hotelier liaison", "Bilingual bridge"],
      },
    ],
  },

  social: {
    eyebrow: "What clients say",
    heading: "Trusted by architects, hoteliers, and developers.",
    lead: "The real test of a partner is what arrives on site. Here is what our clients found.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    testimonials: [
      {
        quote: "De Line is the only China-side partner where the piece that arrives matches the piece we drew. The QA reports are why.",
        author: "Architectural Director",
        org: "Hospitality group, Western Europe",
      },
      {
        quote: "Across three buildouts they’ve never missed a milestone. The consolidation alone saved us a month per shipment.",
        author: "Procurement Lead",
        org: "Boutique hotel collection, GCC",
      },
      {
        quote: "They translated a stack of mood boards into shop drawings the factory could actually build. That’s the whole job.",
        author: "Interior Designer",
        org: "Private residential studio",
      },
    ],
    clientsLabel: "Selected clients",
    certsLabel: "Certifications & compliance",
    logos: ["Hospitality Group", "Architectural Studio", "Boutique Collection", "Design Practice", "Developer Group"],
    certs: ["BSCI audited factories", "FSC-certified timber", "EN 1021 fire compliance", "ISO 9001 QA"],
  },

  contact: {
    eyebrow: "Start your project",
    heading: "Tell us what you’re building.",
    lead: "Share your concept, scope, and timeline. We’ll come back within two business days with a feasibility read and a clear next step.",
    rows: [
      { label: "Office", primary: "Foshan, China", secondary: "佛山市，广东省" },
      { label: "Email", primary: "hello@deline.studio", secondary: "" },
      { label: "WeChat / WhatsApp", primary: "On request", secondary: "" },
    ],
    fields: {
      name: "Your name",
      email: "Email",
      company: "Company / studio",
      scope: "Project type (hospitality, residential, large-scale)",
      message: "Tell us about the project",
    },
    submit: "Send inquiry",
    sending: "Sending…",
    privacyPre: "By submitting, you agree to our ",
    privacyLink: "Privacy Policy",
    successTitle: "Thanks — we’ll be in touch.",
    successBody: "We respond within two business days.",
  },

  footer: {
    brand: "DE LINE CONCEPT",
    blurb: "Furniture sourcing and manufacturing from Foshan. We take your design, translate it into shop drawings the right factories build correctly, run QA, and ship complete projects worldwide.",
    columns: [
      {
        title: "Foshan",
        links: ["佛山市，广东省", "New showroom — opening soon"],
      },
      { title: "Work", links: ["Presence", "Process", "Portfolio"] },
      { title: "Company", links: ["The team", "Contact", "Privacy Policy", "Terms"] },
    ],
    copyright: "© 2026 De Line Concept. All rights reserved.",
    locations: "Foshan · Worldwide",
  },

  common: {
    imagePlaceholder: "Image to be added",
  },
};

const ru: typeof en = {
  langName: { en: "EN", ru: "RU" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "Каждый проект начинается с De Line",
    links: [
      { label: "Присутствие", href: "#foshan" },
      { label: "Процесс", href: "#journey" },
      { label: "Портфолио", href: "#portfolio" },
      { label: "Команда", href: "#team" },
      { label: "Контакты", href: "#contact" },
    ],
    cta: "Начать проект",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    themeToLight: "Светлая тема",
    themeToDark: "Тёмная тема",
    language: "Язык",
  },

  hero: {
    eyebrow: "Закупки и производство мебели",
    title: [
      { a: "Мебель,", em: "", b: "" },
      { a: "", em: "Спроектирована", b: " вами," },
      { a: "", em: "Воплощена", b: " нами." },
    ],
    sub: "Вы приносите дизайн — мы воплощаем его. Производим точно по спецификации на нашей сети проверенных фабрик, контролируем на каждом этапе, доставляем готовым к установке. Для премиальных интерьеров любого масштаба — от жилых до коммерческих.",
    stats: [
      { target: 16, label: "Лет закупок в Китае" },
      { target: 20, label: "Лет экспертизы в мебели" },
      { target: 150, label: "Клиентов из 20 стран" },
    ],
    ctaPrimary: "Наши работы",
    ctaSecondary: "Начать проект",
    caption: { drawn: "Эскиз", built: "Изделие" },
    pieces: ["Кресло — от эскиза к изделию", "Диван — от эскиза к изделию", "Шкаф — от эскиза к изделию"],
  },

  foshan: {
    eyebrow: "Присутствие · Фошань",
    dateline: "Фошань · Гуандун · 23.0°N 113.1°E",
    locatorLabel: "Мы работаем в Фошане",
    cityLabel: "Фошань",
    heading: "Внутри мебельного кластера Китая.",
    lead: "Вы предоставляете дизайн; из Фошаня — сердца мебельной индустрии Китая — мы поставляем готовый проект.",
    cards: [
      {
        title: "Изготовлено по вашему дизайну",
        body: "Ваши чертежи — с точным соблюдением допусков, на подходящей фабрике нашей проверенной сети.",
      },
      {
        title: "Согласовано до производства",
        body: "Каждый материал и отделка утверждаются заранее — по образцам или в нашем шоуруме в Фошане.",
      },
      {
        title: "Проверено по спецификации",
        body: "Контроль на этапах материалов, производства и перед отгрузкой — дефекты за наш счёт, фотоотчёт в тот же день.",
      },
      {
        title: "Поставлено как единый проект",
        body: "Один двуязычный руководитель, полный пакет экспортных документов, координация перевозки — единый завершённый проект.",
      },
    ],
    hqLabel: "Шоурум в Фошане",
    addressLocal: "佛山市，广东省",
    addressRoman: "Новый шоурум — скоро открытие",
  },

  journey: {
    eyebrow: "От вашего дизайна до доставки",
    heading: "Каждый проект идёт по одной линии.",
    lead: "Вы приносите дизайн — а дальше все этапы ведёт одна команда, и каждый из них вы видите: от первого чертежа до установленного и принятого изделия.",
    stages: [
      { label: "Бриф и смета", desc: "Ваши требования — в чертежи и цену" },
      { label: "Дизайн-тур", desc: "Утвердите отделку в шоуруме или по фото и образцам" },
      { label: "Производство", desc: "Образец утверждён, изготовлено по спецификации" },
      { label: "Контроль", desc: "Многоэтапный контроль — фото, приём или отказ" },
      { label: "Экспорт", desc: "Упаковка, фитосертификат, все документы готовы" },
      { label: "Доставка", desc: "Отгрузка партнёрами, монтаж и приёмка" },
    ],
  },

  portfolio: {
    eyebrow: "Избранные работы",
    heading: "Портфолио.",
    lead: "Подборка недавних проектов в сферах гостеприимства, жилья, коммерции и крупных объектов.",
    filters: [
      { key: "all", label: "Все" },
      { key: "hospitality", label: "Гостеприимство" },
      { key: "residential", label: "Жильё" },
      { key: "commercial", label: "Коммерция" },
      { key: "facility", label: "Объекты" },
    ],
    viewProject: "Открыть проект",
    close: "Закрыть",
    projects: [
      {
        tag: "hospitality",
        title: "Бутик-отель · номерной фонд",
        category: "Horeca · 42 номера",
        status: "В производстве",
        materials: "Итальянский нубук, латунь PVD с микросваркой, сертификат огнестойкости",
        body: "Программа корпусной мебели и посадочных мест для европейского бутик-отеля. Полная координация FF&E по 42 номерам.",
      },
      {
        tag: "residential",
        title: "Частная резиденция — Ривьера",
        category: "Жильё",
        status: "Сдан в 2025",
        materials: "Мрамор Arabescato, орех ручной отделки, бронзовая фурнитура на заказ",
        body: "Столярные изделия и мебель под ключ для частной резиденции. Доставка одним консолидированным контейнером.",
      },
      {
        tag: "commercial",
        title: "Штаб-квартира — APAC",
        category: "Объекты · 8 этажей",
        status: "В производстве",
        materials: "Акустические шпонированные панели, обивка из технического текстиля, скрытая прокладка кабеля",
        body: "Отделка рабочих пространств на восьми этажах. Серийное снабжение с собственным дизайн-языком и полным контролем качества.",
      },
      {
        tag: "facility",
        title: "Велнес-курорт — Эгейское море",
        category: "Объект",
        status: "Сдан в 2025",
        materials: "Тик для улицы, нержавеющая сталь морского класса, UV-стойкая обивка",
        body: "Программа уличных и внутренних посадочных мест для велнес-курорта на 120 номеров. Консолидация напрямую с фабрики в порт.",
      },
    ],
  },

  team: {
    eyebrow: "Люди за De Line",
    heading: "Реальные люди, отвечающие на местах.",
    lead: "Люди, которые действительно ведут ваш проект — в цехах Китая, в адаптации дизайна под производство, в крупном подряде и в работе с клиентами.",
    portraitLabel: "Портрет",
    previousLabel: "Ранее",
    members: [
      {
        name: "Даурен Газизов",
        role: "Директор по продукту",
        location: "Цех в Фошане",
        summary: "Превращает ваш дизайн в спецификации, которые китайские цеха исполнят правильно, — и ведёт проверки, удерживающие планку качества.",
        previously: "Дизайнер · Design.ai",
        distinctions: ["20 лет в мебели", "На месте в Фошане", "Ведёт контроль качества"],
      },
      {
        name: "Данияр Кенжебеков",
        role: "Операционный директор",
        location: "База в Фошане",
        summary: "Пятнадцать лет в цехах Китая — договаривается о ценах напрямую и консолидирует каждый контейнер.",
        previously: "Операционный менеджер · Kaspi",
        distinctions: ["15 лет снабжения в Китае", "Свой человек в цехах", "Прямые оптовые цены"],
      },
      {
        name: "Зульяр Турганов",
        role: "Генеральный директор",
        location: "Международные проекты",
        summary: "Ведёт крупнейшие и самые сложные стройки — от коммерческих условий до исполнения в жёсткие сроки.",
        previously: "Проект-менеджер · BI Group",
        distinctions: ["Крупные объекты", "Многосторонние стройки", "Коммерческая структура сделки"],
      },
      {
        name: "Салтанат",
        role: "Директор по маркетингу",
        location: "Международный мост",
        summary: "Ваш единый контакт — переводит брифы архитекторов и отельеров в технические параметры.",
        previously: "Менеджер · Atlanta",
        distinctions: ["Риски и прозрачность", "Связь с архитекторами и отельерами", "Двуязычный мост"],
      },
    ],
  },

  social: {
    eyebrow: "Что говорят клиенты",
    heading: "Нам доверяют архитекторы, отельеры и девелоперы.",
    lead: "Настоящая проверка партнёра — то, что приезжает на объект. Вот что говорят наши клиенты.",
    prev: "Предыдущий отзыв",
    next: "Следующий отзыв",
    testimonials: [
      {
        quote: "De Line — единственный партнёр со стороны Китая, у которого приходящее изделие совпадает с тем, что мы нарисовали. Причина — отчёты по контролю качества.",
        author: "Главный архитектор",
        org: "Гостиничная группа, Западная Европа",
      },
      {
        quote: "За три объекта они ни разу не сорвали срок. Одна только консолидация экономила нам по месяцу на отгрузку.",
        author: "Руководитель закупок",
        org: "Сеть бутик-отелей, Персидский залив",
      },
      {
        quote: "Они превратили стопку мудбордов в чертежи, по которым фабрика реально смогла работать. В этом и вся суть.",
        author: "Дизайнер интерьеров",
        org: "Частная жилая студия",
      },
    ],
    clientsLabel: "Избранные клиенты",
    certsLabel: "Сертификаты и соответствие",
    logos: ["Гостиничная группа", "Архитектурная студия", "Бутик-коллекция", "Дизайн-практика", "Девелоперская группа"],
    certs: ["Фабрики с аудитом BSCI", "Древесина с сертификатом FSC", "Пожарный стандарт EN 1021", "Контроль качества ISO 9001"],
  },

  contact: {
    eyebrow: "Начать проект",
    heading: "Расскажите, что вы создаёте.",
    lead: "Поделитесь концепцией, объёмом и сроками. Мы вернёмся в течение двух рабочих дней с оценкой реализуемости и понятным следующим шагом.",
    rows: [
      { label: "Офис", primary: "Фошань, Китай", secondary: "佛山市，广东省" },
      { label: "Эл. почта", primary: "hello@deline.studio", secondary: "" },
      { label: "WeChat / WhatsApp", primary: "По запросу", secondary: "" },
    ],
    fields: {
      name: "Ваше имя",
      email: "Эл. почта",
      company: "Компания / студия",
      scope: "Тип проекта (отель, жильё, крупный объект)",
      message: "Расскажите о проекте",
    },
    submit: "Отправить запрос",
    sending: "Отправка…",
    privacyPre: "Отправляя форму, вы соглашаетесь с нашей ",
    privacyLink: "Политикой конфиденциальности",
    successTitle: "Спасибо — мы свяжемся с вами.",
    successBody: "Отвечаем в течение двух рабочих дней.",
  },

  footer: {
    brand: "DE LINE CONCEPT",
    blurb: "Закупки и производство мебели из Фошаня. Мы берём ваш дизайн, переводим его в чертежи, по которым нужные фабрики изготовят всё правильно, контролируем качество и поставляем проекты под ключ по всему миру.",
    columns: [
      {
        title: "Фошань",
        links: ["佛山市，广东省", "Новый шоурум — скоро открытие"],
      },
      { title: "Работы", links: ["Присутствие", "Процесс", "Портфолио"] },
      { title: "Компания", links: ["Команда", "Контакты", "Политика конфиденциальности", "Условия"] },
    ],
    copyright: "© 2026 De Line Concept. Все права защищены.",
    locations: "Фошань · Весь мир",
  },

  common: {
    imagePlaceholder: "Изображение будет добавлено",
  },
};

export const translations: Record<Lang, typeof en> = { en, ru };
export type Dict = typeof en;
