export type Lang = "en" | "ru" | "zh";

/* English is the source of truth for the shape; `ru` and `zh` must match it. */
const en = {
  langName: { en: "EN", ru: "RU", zh: "中文" },

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
    secondaryCityLabel: "Zhongshan",
    heading: "Inside China’s furniture corridor.",
    lead: "You provide the design. We manufacture and deliver it from Foshan, the heart of China’s furniture industry.",
    cards: [
      {
        title: "Manufactured to your design",
        body: "Your drawings, built to exact tolerances by the right workshop in our vetted network.",
      },
      {
        title: "Confirmed before production",
        body: "Every material and finish approved up front — by samples sent, or at Foshan factory.",
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
    hqLabel: "Foshan factory",
    addressLocal: "佛山市，广东省",
    addressRoman: "New showroom — opening soon",
  },

  journey: {
    eyebrow: "Your design to delivery",
    heading: "Every project follows one line.",
    lead: "You bring the design — from there, one team works through every stage and shows you each one, from the first drawing to the piece installed and signed off.",
    stages: [
      { label: "Brief and quote", desc: "Your brief, drawn to spec and priced" },
      { label: "Design tour", desc: "Approve finishes at our factory, or by photo and samples sent" },
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
    lead: "Personally accountable for your project, from China’s factory floors to client management.",
    portraitLabel: "Portrait",
    previousLabel: "Previously",
    members: [
      {
        name: "Zulyar Turganov",
        role: "Chief Executive Officer",
        location: "China",
        summary: "Twenty years in China and thirteen in textile manufacturing — in 2018 he founded his own mill, Haining Desire Fabrics.",
        previously: "Sales Director · MF Co., Ltd",
        distinctions: ["20 years in China", "Bachelor’s & master’s in China", "Trade & management"],
      },
      {
        name: "Saltanat Umbetalina",
        role: "Chief Marketing Officer",
        location: "International bridge",
        summary: "Co-founder of a studio pairing interior design with direct China sourcing — one point of contact from concept to procurement.",
        previously: "Procurement · KSS Pipeline",
        distinctions: ["8 yrs in procurement", "Strategic marketing & brand", "Interior design & project mgmt"],
      },
      {
        name: "Dauren Gazizov",
        role: "Chief Product Officer",
        location: "Foshan workshop",
        summary: "Twenty-two years in interior design — inspects every detail on the factory floor to hold client quality.",
        previously: "Interior Designer · Shanyraq Interior",
        distinctions: ["22 yrs in interior design", "Master of factory inspection", "Direct factory negotiation"],
      },
      {
        name: "Daniyar Kenzhekhanov",
        role: "Chief Operating Officer",
        location: "Foshan base",
        summary: "13+ years in China leading supplier development, strategic sourcing, pricing, and factory negotiations through to delivery.",
        previously: "Chief Commercial Officer · Parqour",
        distinctions: ["13+ years in China", "International MBA, Shanghai", "9+ yrs in operations mgmt"],
      },
    ],
  },

  social: {
    eyebrow: "What clients say",
    heading: "Trusted by architects, hoteliers, and developers.",
    lead: "A selection of the studios, hoteliers, and developers we build for.",
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
    logos: ["Hospitality Group", "Architectural Studio", "Boutique Collection", "Design Practice", "Developer Group", "Resort Operator", "Retail Brand", "Property Developer"],
    certs: ["BSCI audited factories", "FSC-certified timber", "EN 1021 fire compliance", "ISO 9001 QA"],
  },

  contact: {
    eyebrow: "Start your project",
    heading: "Tell us what you’re building.",
    lead: "Share your concept, scope, and timeline. We’ll come back within three business days with a feasibility read and a clear next step.",
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
    successBody: "We respond within three business days.",
  },

  footer: {
    brand: "DE LINE CONCEPT",
    blurb: "Furniture sourcing and manufacturing from Foshan. We take your design, translate it into shop drawings the right factories build correctly, run QA, and ship complete projects worldwide.",
    columns: [
      {
        title: "Foshan",
        links: ["佛山市，广东省", "New office — opening soon"],
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
  langName: { en: "EN", ru: "RU", zh: "中文" },

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
    secondaryCityLabel: "Чжуншань",
    heading: "Внутри мебельного кластера Китая.",
    lead: "Вы предоставляете дизайн. Мы производим и доставляем готовый проект из Фошаня — сердца мебельной индустрии Китая.",
    cards: [
      {
        title: "Изготовлено по вашему дизайну",
        body: "Ваши чертежи — изготовлены с точностью до миллиметра на подходящей фабрике из нашей проверенной сети.",
      },
      {
        title: "Согласовано до производства",
        body: "Каждый материал и отделка утверждаются заранее — по образцам или на фабрике в Фошане.",
      },
      {
        title: "Проверено по спецификации",
        body: "Контроль на этапах материалов, производства и перед отгрузкой — дефекты за наш счёт, фотоотчёт в тот же день.",
      },
      {
        title: "Поставлено как единый проект",
        body: "Один менеджер проекта, полный пакет экспортных документов и организация доставки — единый проект под ключ.",
      },
    ],
    hqLabel: "Фабрика в Фошане",
    addressLocal: "佛山市，广东省",
    addressRoman: "Новый шоурум — скоро открытие",
  },

  journey: {
    eyebrow: "От вашего дизайна до доставки",
    heading: "Каждый проект идёт по одной линии.",
    lead: "Вы приносите дизайн — а дальше все этапы ведёт одна команда, и каждый из них вы видите: от первого чертежа до установленного и принятого изделия.",
    stages: [
      { label: "Бриф и смета", desc: "Ваши требования — в чертежи и цену" },
      { label: "Дизайн-тур", desc: "Утвердите отделку на фабрике или по фото и образцам" },
      { label: "Производство", desc: "Образец утверждён, изготовлено по спецификации" },
      { label: "Контроль", desc: "Многоэтапный контроль — фото, приём или отказ" },
      { label: "Экспорт", desc: "Упаковка, фитосертификат, все документы готовы" },
      { label: "Доставка", desc: "Отгрузка партнёрами, монтаж и приёмка" },
    ],
  },

  portfolio: {
    eyebrow: "Избранные работы",
    heading: "Портфолио.",
    lead: "Подборка недавних проектов в сфере гостиниц, жилья, коммерции и крупных объектов.",
    filters: [
      { key: "all", label: "Все" },
      { key: "hospitality", label: "Гостиницы" },
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
    heading: "Реальные люди, отвечающие за результат.",
    lead: "Лично отвечают за ваш проект — от цехов в Китае до работы с клиентами.",
    portraitLabel: "Портрет",
    previousLabel: "Ранее",
    members: [
      {
        name: "Зульяр Турганов",
        role: "Генеральный директор",
        location: "Китай",
        summary: "Двадцать лет в Китае, тринадцать — в текстиле. В 2018 году основал фабрику Haining Desire Fabrics.",
        previously: "Директор по продажам · MF Ltd.",
        distinctions: ["20 лет в Китае", "Магистратура в Китае", "Торговля и управление"],
      },
      {
        name: "Салтанат Умбеталина",
        role: "Директор по маркетингу",
        location: "Международный мост",
        summary: "Сооснователь студии: дизайн интерьера и прямые поставки из Китая — единый контакт от идеи до закупок.",
        previously: "Закупки · KSS Pipeline",
        distinctions: ["8 лет в закупках", "Маркетинг и бренд", "Дизайн и проекты"],
      },
      {
        name: "Даурен Газизов",
        role: "Директор по продукту",
        location: "Цех в Фошане",
        summary: "22 года в дизайне интерьеров — говорит на языке дизайна и контролирует каждую деталь на производстве ради качества.",
        previously: "Дизайнер интерьера · Shanyraq",
        distinctions: ["22 года в дизайне", "Контроль на производстве", "Переговоры с фабрикой"],
      },
      {
        name: "Данияр Кенжеханов",
        role: "Операционный директор",
        location: "База в Фошане",
        summary: "13+ лет в Китае: развитие сети поставщиков, стратегические закупки, цены и переговоры с фабриками вплоть до поставки.",
        previously: "Коммерческий директор · Parqour",
        distinctions: ["13+ лет в Китае", "Международный MBA, Шанхай", "9+ лет в операциях"],
      },
    ],
  },

  social: {
    eyebrow: "Что говорят клиенты",
    heading: "Нам доверяют архитекторы, гостиницы и девелоперы.",
    lead: "Студии, гостиницы и девелоперы, для которых мы строим.",
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
    logos: ["Гостиничная группа", "Архитектурная студия", "Бутик-коллекция", "Дизайн-практика", "Девелоперская группа", "Курортный оператор", "Розничный бренд", "Девелопер недвижимости"],
    certs: ["Фабрики с аудитом BSCI", "Древесина с сертификатом FSC", "Пожарный стандарт EN 1021", "Контроль качества ISO 9001"],
  },

  contact: {
    eyebrow: "Начать проект",
    heading: "Расскажите, что вы создаёте.",
    lead: "Поделитесь концепцией, объёмом и сроками. Мы вернёмся в течение трёх рабочих дней с предварительной оценкой и понятным следующим шагом.",
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
    successBody: "Отвечаем в течение трёх рабочих дней.",
  },

  footer: {
    brand: "DE LINE CONCEPT",
    blurb: "Закупки и производство мебели из Фошаня. Мы берём ваш дизайн, переводим его в чертежи, по которым нужные фабрики изготовят всё правильно, контролируем качество и поставляем проекты под ключ по всему миру.",
    columns: [
      {
        title: "Фошань",
        links: ["佛山市，广东省", "Новый офис — скоро открытие"],
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

const zh: typeof en = {
  langName: { en: "EN", ru: "RU", zh: "中文" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "每个项目，都始于 De Line",
    links: [
      { label: "据点", href: "#foshan" },
      { label: "流程", href: "#journey" },
      { label: "案例", href: "#portfolio" },
      { label: "团队", href: "#team" },
      { label: "联系", href: "#contact" },
    ],
    cta: "启动项目",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    themeToLight: "切换到浅色主题",
    themeToDark: "切换到深色主题",
    language: "语言",
  },

  hero: {
    eyebrow: "家具采购与制造",
    title: [
      { a: "家具，", em: "", b: "" },
      { a: "", em: "由您设计", b: "，" },
      { a: "", em: "由我们交付", b: "。" },
    ],
    sub: "您提供设计，我们让它成真。由值得信赖的工厂网络按图施工，每个环节严格质检，交付即可安装。适用于各种规模的高端室内空间——从住宅到商业。",
    stats: [
      { target: 16, label: "年中国采购经验" },
      { target: 20, label: "年家具专业积累" },
      { target: 150, label: "来自20国的客户" },
    ],
    ctaPrimary: "查看案例",
    ctaSecondary: "启动您的项目",
    caption: { drawn: "图纸", built: "成品" },
    pieces: ["休闲椅 — 从图纸到成品", "沙发 — 从图纸到成品", "衣柜 — 从图纸到成品"],
  },

  foshan: {
    eyebrow: "据点 · 佛山",
    dateline: "佛山 · 广东 · 北纬23.0° 东经113.1°",
    locatorLabel: "扎根佛山，亲临现场",
    cityLabel: "佛山",
    secondaryCityLabel: "中山",
    heading: "深入中国家具产业带。",
    lead: "您提供设计。我们在中国家具产业的核心——佛山，为您生产并交付。",
    cards: [
      {
        title: "按您的设计制造",
        body: "您的图纸，由甄选网络中合适的工厂，按精确公差打造。",
      },
      {
        title: "生产前确认",
        body: "每一种材料与饰面都预先确认——可寄送样品，或亲临佛山工厂。",
      },
      {
        title: "按规格验收",
        body: "选材、生产中、发货前三道查验——不良由我们承担返工，当天出具记录。",
      },
      {
        title: "作为整体项目交付",
        body: "一位双语负责人、完整出口单证、统筹货运——作为一个完整项目交付。",
      },
    ],
    hqLabel: "佛山工厂",
    addressLocal: "佛山市，广东省",
    addressRoman: "全新展厅 — 即将开业",
  },

  journey: {
    eyebrow: "从您的设计到交付",
    heading: "每个项目，都遵循同一条线。",
    lead: "您提供设计——之后由同一支团队完成每个阶段，并让您看到每一步，从第一张图纸到成品安装、验收签收。",
    stages: [
      { label: "需求与报价", desc: "依据您的需求出图、定规格、给报价" },
      { label: "设计考察", desc: "在工厂确认饰面，或通过照片与寄样确认" },
      { label: "生产", desc: "样品确认后，按规格量产" },
      { label: "质检", desc: "多环节质检——拍照、合格或退回" },
      { label: "出口", desc: "装箱、木材熏蒸认证、单证齐备" },
      { label: "交付", desc: "由合作伙伴运输、安装、验收签收" },
    ],
  },

  portfolio: {
    eyebrow: "精选案例",
    heading: "案例。",
    lead: "近期在酒店、住宅、商业及大型设施项目中的部分合作。",
    filters: [
      { key: "all", label: "全部" },
      { key: "hospitality", label: "酒店" },
      { key: "residential", label: "住宅" },
      { key: "commercial", label: "商业" },
      { key: "facility", label: "大型设施" },
    ],
    viewProject: "查看项目",
    close: "关闭",
    projects: [
      {
        tag: "hospitality",
        title: "精品酒店套房",
        category: "酒店餐饮 · 42间客房",
        status: "生产中",
        materials: "意大利仿麂皮、微焊PVD黄铜、阻燃认证",
        body: "为欧洲精品酒店客户定制木作与座椅方案，统筹42间客房的全套FF&E（家具、固装与设备）。",
      },
      {
        tag: "residential",
        title: "私人住宅 — 里维埃拉",
        category: "住宅",
        status: "2025年交付",
        materials: "Arabescato大理石、手工胡桃木、定制青铜五金",
        body: "为私人住宅提供全程定制木作与座椅，单柜拼装交付。",
      },
      {
        tag: "commercial",
        title: "企业总部 — 亚太",
        category: "项目 · 8层",
        status: "生产中",
        materials: "吸音木皮饰板、功能面料软包、集成走线",
        body: "八个楼层的办公空间软装，采用统一定制设计语言、批量采购并全程质检。",
      },
      {
        tag: "facility",
        title: "康养度假村 — 爱琴海",
        category: "大型设施",
        status: "2025年交付",
        materials: "户外级柚木、船用级不锈钢、抗UV面料",
        body: "为120套客房的康养度假村提供室内外座椅方案，工厂直送港口拼柜。",
      },
    ],
  },

  team: {
    eyebrow: "De Line 背后的团队",
    heading: "真实的人，亲临现场，对结果负责。",
    lead: "从中国的工厂车间到客户管理，亲自为您的项目负责。",
    portraitLabel: "肖像",
    previousLabel: "曾任",
    members: [
      {
        name: "Zulyar Turganov",
        role: "首席执行官",
        location: "中国",
        summary: "在中国二十年，其中十三年深耕纺织制造——2018年创办自有工厂 Haining Desire Fabrics。",
        previously: "销售总监 · MF Co., Ltd",
        distinctions: ["在华20年", "中国本硕学历", "贸易与管理"],
      },
      {
        name: "Saltanat Umbetalina",
        role: "首席市场官",
        location: "国际桥梁",
        summary: "一家工作室的联合创始人，将室内设计与中国直采结合——从概念到采购，一站对接。",
        previously: "采购 · KSS Pipeline",
        distinctions: ["8年采购经验", "战略营销与品牌", "室内设计与项目管理"],
      },
      {
        name: "Dauren Gazizov",
        role: "首席产品官",
        location: "佛山车间",
        summary: "二十二年室内设计经验——既懂设计语言，又能亲临车间把控每个细节，守护客户品质。",
        previously: "室内设计师 · Shanyraq Interior",
        distinctions: ["22年室内设计", "工厂验收专家", "工厂直接谈判"],
      },
      {
        name: "Daniyar Kenzhekhanov",
        role: "首席运营官",
        location: "佛山基地",
        summary: "在华13年以上，主导供应商开发、战略采购、定价及工厂谈判，直至交付。",
        previously: "首席商务官 · Parqour",
        distinctions: ["在华13年以上", "上海国际MBA", "9年以上运营管理"],
      },
    ],
  },

  social: {
    eyebrow: "客户评价",
    heading: "深受建筑师、酒店方与开发商信赖。",
    lead: "我们服务过的部分工作室、酒店方与开发商。",
    prev: "上一条评价",
    next: "下一条评价",
    testimonials: [
      {
        quote: "De Line 是唯一一家送到的成品与我们图纸完全一致的中国合作伙伴。原因就在于他们的质检报告。",
        author: "建筑设计总监",
        org: "酒店集团，西欧",
      },
      {
        quote: "三个项目下来，他们从未错过任何节点。仅拼柜一项，每批货就为我们节省一个月。",
        author: "采购负责人",
        org: "精品酒店集团，海湾地区",
      },
      {
        quote: "他们把一摞情绪板变成了工厂真正能落地的施工图。这正是关键所在。",
        author: "室内设计师",
        org: "私人住宅工作室",
      },
    ],
    clientsLabel: "部分客户",
    certsLabel: "认证与合规",
    logos: ["酒店集团", "建筑事务所", "精品系列", "设计事务所", "开发集团", "度假村运营商", "零售品牌", "地产开发商"],
    certs: ["BSCI审核工厂", "FSC认证木材", "EN 1021阻燃合规", "ISO 9001质量管理"],
  },

  contact: {
    eyebrow: "启动您的项目",
    heading: "告诉我们，您要打造什么。",
    lead: "分享您的概念、规模与时间安排。我们将在三个工作日内回复，给出可行性评估和清晰的下一步。",
    rows: [
      { label: "办公室", primary: "中国佛山", secondary: "佛山市，广东省" },
      { label: "邮箱", primary: "hello@deline.studio", secondary: "" },
      { label: "微信 / WhatsApp", primary: "可应需提供", secondary: "" },
    ],
    fields: {
      name: "您的姓名",
      email: "邮箱",
      company: "公司 / 工作室",
      scope: "项目类型（酒店、住宅、大型项目）",
      message: "介绍一下您的项目",
    },
    submit: "发送咨询",
    sending: "发送中…",
    privacyPre: "提交即表示您同意我们的",
    privacyLink: "隐私政策",
    successTitle: "谢谢 — 我们会尽快联系您。",
    successBody: "我们将在三个工作日内回复。",
  },

  footer: {
    brand: "DE LINE CONCEPT",
    blurb: "立足佛山的家具采购与制造。我们将您的设计转化为施工图，交由合适的工厂精准生产，全程质检，并将完整项目发往全球。",
    columns: [
      {
        title: "佛山",
        links: ["佛山市，广东省", "新办公室 — 即将开业"],
      },
      { title: "作品", links: ["据点", "流程", "案例"] },
      { title: "公司", links: ["团队", "联系", "隐私政策", "条款"] },
    ],
    copyright: "© 2026 De Line Concept. 版权所有。",
    locations: "佛山 · 全球",
  },

  common: {
    imagePlaceholder: "图片待添加",
  },
};

export const translations: Record<Lang, typeof en> = { en, ru, zh };
export type Dict = typeof en;
