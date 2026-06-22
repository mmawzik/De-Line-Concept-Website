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
      { a: "", em: "Drawn", b: " in your studio." },
      { a: "", em: "Built", b: " on ours." },
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
    eyebrow: "Presence · Guangzhou + Foshan",
    heading: "Inside China’s furniture corridor.",
    lead: "You bring the design — we make it real. From our base in Guangzhou and Foshan, with fifteen years of partnerships across China’s leading workshops and a trusted network we keep growing, we manage every step from the right factory to a finished, premium project at your door.",
    cards: [
      {
        title: "Built to your design",
        body: "We don’t design — we make your design real. Your drawings become factory-ready specs, placed with the right workshop in our vetted network and built exactly to spec.",
      },
      {
        title: "Chosen with you",
        body: "Approve every finish before production. We ship real samples — fabric, timber, hardware — to your studio, or host you in our Guangzhou and Foshan showrooms to choose in person.",
      },
      {
        title: "Locked to spec",
        body: "Every dimension is locked on engineering drawings before tooling. We inspect at material, mid-production, and pre-shipment — defects rejected at our cost, with photo reports the same day.",
      },
      {
        title: "Delivered as one",
        body: "One bilingual lead owns your project from first drawing to final delivery. We prepare every export document and coordinate freight through trusted partners — so it lands as one finished, premium project.",
      },
    ],
    hqLabel: "Guangzhou HQ",
    addressLocal: "广州市海珠区蟠龙新街3号",
    addressRoman: "No. 3 Panlong New Street, Haizhu District, Guangzhou",
  },

  journey: {
    eyebrow: "Your design to delivery",
    heading: "Every project follows one line.",
    lead: "You bring the design — from there, one team owns every stage and shows you each one, from the first drawing to the piece installed and signed off.",
    stages: [
      { label: "Brief & quote", desc: "Your brief, drawn to spec and priced" },
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
    lead: "A sample of recent engagements across hospitality, residential, and large-scale projects.",
    placeholderNote: "Project imagery and final details are being added.",
    projects: [
      {
        title: "Boutique Hospitality Suite",
        category: "Horeca · 42 rooms",
        status: "In production",
        materials: "Italian nubuck, micro-welded PVD brass, flame-retardant certification",
        body: "Custom millwork and seating program for a boutique European hospitality client. Full FF&E coordination across 42 keys.",
      },
      {
        title: "Private Residence — Riviera",
        category: "Residential",
        status: "Delivered 2025",
        materials: "Arabescato marble, hand-finished walnut, bespoke bronze hardware",
        body: "End-to-end bespoke joinery and seating for a private residence. Single-container consolidated delivery.",
      },
      {
        title: "Corporate Headquarters — APAC",
        category: "Projects · 8 floors",
        status: "In production",
        materials: "Acoustic veneer panels, technical-fabric upholstery, integrated cable management",
        body: "Workspace fit-out across eight floors. Volume sourcing with a custom design language and full QA.",
      },
      {
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
        location: "Guangzhou HQ",
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
      { label: "Office", primary: "广州市海珠区蟠龙新街3号", secondary: "No. 3 Panlong New Street, Haizhu District, Guangzhou" },
      { label: "Workshop", primary: "Foshan, China", secondary: "" },
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
    blurb: "Furniture sourcing and manufacturing from Guangzhou. We take your design, translate it into shop drawings the right factories build correctly, run QA, and ship complete projects worldwide.",
    columns: [
      {
        title: "Guangzhou HQ",
        links: ["广州市海珠区蟠龙新街3号", "No. 3 Panlong New Street, Haizhu District, Guangzhou", "Foshan workshop"],
      },
      { title: "Work", links: ["Presence", "Process", "Portfolio"] },
      { title: "Company", links: ["The team", "Contact", "Privacy Policy", "Terms"] },
    ],
    copyright: "© 2026 De Line Concept. All rights reserved.",
    locations: "Guangzhou · Foshan · Worldwide",
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
      { a: "", em: "Нарисована", b: " в вашей студии." },
      { a: "", em: "Воплощена", b: " нами в Китае." },
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
    eyebrow: "Присутствие · Гуанчжоу + Фошань",
    heading: "Внутри мебельного кластера Китая.",
    lead: "Вы приносите дизайн — мы воплощаем его. С базой в Гуанчжоу и Фошане, пятнадцатью годами партнёрства с ведущими фабриками Китая и проверенной сетью, которую мы постоянно расширяем, мы ведём каждый шаг — от подбора нужной фабрики до готового премиального проекта у вашего порога.",
    cards: [
      {
        title: "Изготовлено по вашему дизайну",
        body: "Мы не проектируем — мы воплощаем ваш дизайн. Ваши чертежи становятся производственными спецификациями, попадают в нужный цех нашей проверенной сети и изготавливаются точно по спецификации.",
      },
      {
        title: "Выбрано вместе с вами",
        body: "Утвердите каждую отделку до производства. Мы отправим реальные образцы — ткань, древесину, фурнитуру — к вам в студию или примем вас в шоурумах в Гуанчжоу и Фошане, чтобы выбрать лично.",
      },
      {
        title: "Точно по спецификации",
        body: "Каждый размер зафиксирован на инженерных чертежах до начала оснастки. Контроль материалов, в процессе и перед отгрузкой — дефекты отбраковываются за наш счёт, с фотоотчётами в тот же день.",
      },
      {
        title: "Доставлено единым проектом",
        body: "Единый двуязычный руководитель ведёт проект от первого чертежа до финальной доставки. Мы готовим все экспортные документы и координируем перевозку через проверенных партнёров — чтобы проект прибыл завершённым и премиальным.",
      },
    ],
    hqLabel: "Главный офис · Гуанчжоу",
    addressLocal: "广州市海珠区蟠龙新街3号",
    addressRoman: "No. 3 Panlong New Street, район Хайчжу, Гуанчжоу",
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
    lead: "Подборка недавних проектов в сферах гостеприимства, жилья и крупных объектов.",
    placeholderNote: "Изображения проектов и финальные детали добавляются.",
    projects: [
      {
        title: "Бутик-отель · номерной фонд",
        category: "Horeca · 42 номера",
        status: "В производстве",
        materials: "Итальянский нубук, латунь PVD с микросваркой, сертификат огнестойкости",
        body: "Программа корпусной мебели и посадочных мест для европейского бутик-отеля. Полная координация FF&E по 42 номерам.",
      },
      {
        title: "Частная резиденция — Ривьера",
        category: "Жильё",
        status: "Сдан в 2025",
        materials: "Мрамор Arabescato, орех ручной отделки, бронзовая фурнитура на заказ",
        body: "Столярные изделия и мебель под ключ для частной резиденции. Доставка одним консолидированным контейнером.",
      },
      {
        title: "Штаб-квартира — APAC",
        category: "Объекты · 8 этажей",
        status: "В производстве",
        materials: "Акустические шпонированные панели, обивка из технического текстиля, скрытая прокладка кабеля",
        body: "Отделка рабочих пространств на восьми этажах. Серийное снабжение с собственным дизайн-языком и полным контролем качества.",
      },
      {
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
        location: "Главный офис · Гуанчжоу",
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
      { label: "Офис", primary: "广州市海珠区蟠龙新街3号", secondary: "No. 3 Panlong New Street, район Хайчжу, Гуанчжоу" },
      { label: "Производство", primary: "Фошань, Китай", secondary: "" },
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
    blurb: "Закупки и производство мебели из Гуанчжоу. Мы берём ваш дизайн, переводим его в чертежи, по которым нужные фабрики изготовят всё правильно, контролируем качество и поставляем проекты под ключ по всему миру.",
    columns: [
      {
        title: "Главный офис · Гуанчжоу",
        links: ["广州市海珠区蟠龙新街3号", "No. 3 Panlong New Street, район Хайчжу, Гуанчжоу", "Цех в Фошане"],
      },
      { title: "Работы", links: ["Присутствие", "Процесс", "Портфолио"] },
      { title: "Компания", links: ["Команда", "Контакты", "Политика конфиденциальности", "Условия"] },
    ],
    copyright: "© 2026 De Line Concept. Все права защищены.",
    locations: "Гуанчжоу · Фошань · Весь мир",
  },

  common: {
    imagePlaceholder: "Изображение будет добавлено",
  },
};

export const translations: Record<Lang, typeof en> = { en, ru };
export type Dict = typeof en;
