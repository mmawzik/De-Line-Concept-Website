export type Lang = "en" | "ru" | "zh";

/* English is the source of truth for the shape; `ru` and `zh` must match it. */
const en = {
  langName: { en: "EN", ru: "RU", zh: "中文" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "Every project starts with De Line",
    links: [
      { label: "Presence", href: "#foshan" },
      { label: "Team", href: "#team" },
      { label: "Process", href: "#journey" },
      { label: "Portfolio", href: "#portfolio" },
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
    error: "Something went wrong. Please try again, or email us directly.",
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

  privacy: {
    title: "Privacy Policy",
    updated: "Last updated · July 2026",
    back: "← Back to site",
    email: "hello@deline.studio",
    intro:
      "De Line Concept (“De Line”, “we”, “us”) coordinates custom furniture manufacturing and sourcing from Foshan, China, for clients worldwide. This policy explains what personal information we collect when you contact us or use de-line.co, how we use it, and the choices you have. We only ask for what a project actually requires.",
    sections: [
      {
        h: "1. Information we collect",
        p: [
          "**Information you give us.** When you submit the inquiry form or email us, we collect your name, email address, and the project details you choose to share (scope, type, timeline, references). If a project proceeds, we may also collect the billing, shipping, and contact details needed to deliver it.",
          "**Information collected automatically.** Our hosting provider and any analytics we use may record limited technical data such as IP address, browser type, and pages viewed, to keep the site secure and understand traffic. The site also stores your language and theme preferences locally in your browser — these never leave your device.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "2. How we use your information",
        p: ["We use it to:"],
        list: [
          "Respond to your inquiry and prepare quotes or feasibility assessments.",
          "Plan, manufacture, inspect, and deliver your project.",
          "Communicate with you about your project and, where relevant, our services.",
          "Keep records and meet our legal, tax, and accounting obligations, and prevent fraud or abuse.",
        ],
        pAfter: [
          "We do not sell your personal information, and we do not use it for automated decision-making that produces legal effects on you.",
        ],
      },
      {
        h: "3. Who we share it with",
        p: [
          "**Logistics and freight partners.** We do not operate our own logistics. To move and deliver your order, we share the details a carrier needs — such as delivery address, contact, and shipment specifications — with independent freight, customs, and installation partners.",
          "**Service providers.** We use third parties to run this website (hosting) and to process form submissions and email so your inquiry reaches us. They act on our instructions and only for these purposes.",
          "**Legal and safety.** We may disclose information where required by law, or to protect our rights, safety, or the integrity of a transaction.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "4. Our supply chain is confidential",
        p: [
          "Protecting our manufacturing network is core to how we work. We do not disclose the identity of the factories, workshops, or suppliers in our network to clients or third parties — that information is our confidential business information, and your relationship and contract are with De Line. In turn, we treat your designs, drawings, and specifications as confidential and share them with a manufacturer only to the extent needed to build your project.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "5. International transfers",
        p: [
          "De Line operates in China and serves clients globally, and our service providers may be located in other countries. Your information may therefore be processed or stored outside your country of residence, including in China. Where required, we take steps to keep your information protected when it is transferred.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "6. How long we keep it",
        p: [
          "We keep inquiry information for as long as needed to respond and to pursue a potential project, and project information for as long as needed to fulfil the engagement and meet our legal, tax, and accounting obligations. When it is no longer needed, we delete or anonymise it.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "7. Security",
        p: [
          "We use reasonable technical and organisational measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "8. Your rights",
        p: [
          "Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information, to object to or restrict certain processing, and to withdraw consent. To exercise any of these, email us at hello@deline.studio. EU/UK residents may also lodge a complaint with their local data-protection authority.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "9. Cookies and local storage",
        p: [
          "We keep cookies to a minimum. The site uses essential local storage for your language and theme preferences. Any analytics we use is limited to understanding aggregate traffic and site performance.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "10. Children",
        p: [
          "This site and our services are intended for businesses and professionals and are not directed to children under 16. We do not knowingly collect their information.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "11. Changes to this policy",
        p: [
          "We may update this policy from time to time. The “last updated” date above reflects the latest version; material changes will be reflected on this page.",
        ],
        list: [] as string[],
        pAfter: [] as string[],
      },
      {
        h: "12. Contact",
        p: ["Questions about this policy or your information? Email us at hello@deline.studio."],
        list: [] as string[],
        pAfter: [] as string[],
      },
    ],
  },
};

const ru: typeof en = {
  langName: { en: "EN", ru: "RU", zh: "中文" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "Каждый проект начинается с De Line",
    links: [
      { label: "Присутствие", href: "#foshan" },
      { label: "Команда", href: "#team" },
      { label: "Процесс", href: "#journey" },
      { label: "Портфолио", href: "#portfolio" },
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
    error: "Что-то пошло не так. Попробуйте ещё раз или напишите нам на почту.",
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

  privacy: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление · июль 2026",
    back: "← Назад на сайт",
    email: "hello@deline.studio",
    intro:
      "De Line Concept («De Line», «мы», «нас») организует изготовление и поставку мебели на заказ из Фошаня (Китай) для клиентов по всему миру. Эта политика объясняет, какие персональные данные мы собираем, когда вы связываетесь с нами или пользуетесь сайтом de-line.co, как мы их используем и какие у вас есть права. Мы запрашиваем только то, что действительно необходимо для проекта.",
    sections: [
      {
        h: "1. Какие данные мы собираем",
        p: [
          "**Данные, которые вы предоставляете.** Когда вы отправляете форму запроса или пишете нам, мы собираем ваше имя, адрес электронной почты и сведения о проекте, которыми вы решите поделиться (объём, тип, сроки, референсы). Если проект переходит в работу, мы также можем собирать платёжные, отгрузочные и контактные данные, необходимые для его выполнения.",
          "**Данные, собираемые автоматически.** Наш хостинг-провайдер и используемая аналитика могут фиксировать ограниченные технические данные — IP-адрес, тип браузера, просмотренные страницы — для безопасности сайта и понимания трафика. Сайт также хранит ваши настройки языка и темы локально в браузере — они не покидают ваше устройство.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "2. Как мы используем ваши данные",
        p: ["Мы используем их, чтобы:"],
        list: [
          "Ответить на ваш запрос и подготовить расчёт или оценку осуществимости.",
          "Спланировать, произвести, проверить и поставить ваш проект.",
          "Общаться с вами по вашему проекту и, при необходимости, о наших услугах.",
          "Вести учёт, выполнять юридические, налоговые и бухгалтерские обязательства и предотвращать мошенничество.",
        ],
        pAfter: [
          "Мы не продаём ваши персональные данные и не используем их для автоматизированного принятия решений, влекущего для вас юридические последствия.",
        ],
      },
      {
        h: "3. С кем мы делимся данными",
        p: [
          "**Логистические и транспортные партнёры.** Мы не занимаемся логистикой сами. Чтобы отгрузить и доставить ваш заказ, мы передаём необходимые перевозчику сведения — адрес доставки, контакт и параметры отгрузки — независимым транспортным, таможенным и монтажным партнёрам.",
          "**Поставщики услуг.** Мы привлекаем третьих лиц для работы сайта (хостинг) и обработки заявок и почты, чтобы ваш запрос дошёл до нас. Они действуют по нашим инструкциям и только для этих целей.",
          "**Закон и безопасность.** Мы можем раскрыть данные, если этого требует закон, либо для защиты наших прав, безопасности или целостности сделки.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "4. Наша производственная сеть конфиденциальна",
        p: [
          "Защита нашей производственной сети — основа нашей работы. Мы не раскрываем клиентам и третьим лицам, какие фабрики, цеха и поставщики входят в нашу сеть, — это наша конфиденциальная деловая информация, а ваши отношения и договор — с De Line. В свою очередь, мы считаем ваши дизайны, чертежи и спецификации конфиденциальными и передаём их производителю только в объёме, необходимом для изготовления вашего проекта.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "5. Международная передача данных",
        p: [
          "De Line работает в Китае и обслуживает клиентов по всему миру, а наши поставщики услуг могут находиться в других странах. Поэтому ваши данные могут обрабатываться или храниться за пределами страны вашего проживания, в том числе в Китае. При необходимости мы принимаем меры для защиты ваших данных при передаче.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "6. Сколько мы храним данные",
        p: [
          "Мы храним данные запроса столько, сколько нужно, чтобы ответить и проработать возможный проект, а данные по проекту — столько, сколько нужно для его выполнения и соблюдения юридических, налоговых и бухгалтерских обязательств. Когда данные больше не нужны, мы удаляем или обезличиваем их.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "7. Безопасность",
        p: [
          "Мы применяем разумные технические и организационные меры для защиты ваших данных. Ни один способ передачи или хранения не является полностью безопасным, поэтому мы не можем гарантировать абсолютную защиту.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "8. Ваши права",
        p: [
          "В зависимости от страны проживания вы можете иметь право получить доступ к своим персональным данным, исправить, удалить или получить их копию, возразить против обработки или ограничить её, а также отозвать согласие. Чтобы воспользоваться этими правами, напишите нам на hello@deline.studio. Жители ЕС/Великобритании также могут подать жалобу в местный орган по защите данных.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "9. Файлы cookie и локальное хранилище",
        p: [
          "Мы сводим использование cookie к минимуму. Сайт использует необходимое локальное хранилище для настроек языка и темы. Любая используемая аналитика ограничивается пониманием совокупного трафика и работы сайта.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "10. Дети",
        p: [
          "Этот сайт и наши услуги предназначены для бизнеса и специалистов и не адресованы детям младше 16 лет. Мы сознательно не собираем их данные.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "11. Изменения в политике",
        p: [
          "Мы можем время от времени обновлять эту политику. Дата «последнее обновление» выше отражает актуальную версию; существенные изменения будут отражены на этой странице.",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "12. Контакты",
        p: ["Вопросы об этой политике или ваших данных? Напишите нам на hello@deline.studio."],
        list: [],
        pAfter: [],
      },
    ],
  },
};

const zh: typeof en = {
  langName: { en: "EN", ru: "RU", zh: "中文" },

  nav: {
    brand: "DE LINE CONCEPT",
    tagline: "每个项目，都始于 De Line",
    links: [
      { label: "据点", href: "#foshan" },
      { label: "团队", href: "#team" },
      { label: "流程", href: "#journey" },
      { label: "案例", href: "#portfolio" },
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
    error: "出了点问题。请重试，或直接给我们发邮件。",
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

  privacy: {
    title: "隐私政策",
    updated: "最后更新 · 2026年7月",
    back: "← 返回网站",
    email: "hello@deline.studio",
    intro:
      "De Line Concept（以下称“De Line”“我们”）为全球客户在中国佛山协调定制家具的生产与采购。本政策说明当您联系我们或使用 de-line.co 时，我们会收集哪些个人信息、如何使用，以及您拥有的选择。我们只会索取项目真正需要的信息。",
    sections: [
      {
        h: "1. 我们收集的信息",
        p: [
          "**您提供的信息。**当您提交咨询表单或给我们发邮件时，我们会收集您的姓名、电子邮箱，以及您选择分享的项目信息（规模、类型、时间安排、参考资料）。若项目继续推进，我们还可能收集交付所需的账单、收货和联系信息。",
          "**自动收集的信息。**我们的托管服务商及所用的分析工具可能记录有限的技术数据，如 IP 地址、浏览器类型和浏览的页面，用于保障网站安全和了解访问情况。网站还会将您的语言和主题偏好保存在您的浏览器本地——这些数据不会离开您的设备。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "2. 我们如何使用您的信息",
        p: ["我们将其用于："],
        list: [
          "回复您的咨询，并准备报价或可行性评估。",
          "规划、生产、检验并交付您的项目。",
          "就您的项目与您沟通，并在相关时介绍我们的服务。",
          "保存记录，履行法律、税务和会计义务，并防范欺诈或滥用。",
        ],
        pAfter: ["我们不会出售您的个人信息，也不会将其用于对您产生法律效果的自动化决策。"],
      },
      {
        h: "3. 我们与谁共享信息",
        p: [
          "**物流与货运合作伙伴。**我们不自行经营物流。为运输和交付您的订单，我们会将承运方所需的信息——如收货地址、联系人和货物规格——共享给独立的货运、报关和安装合作伙伴。",
          "**服务提供商。**我们借助第三方来运行本网站（托管）并处理表单提交和邮件，以便您的咨询送达我们。他们仅按我们的指示、为上述目的处理信息。",
          "**法律与安全。**在法律要求时，或为保护我们的权利、安全或交易的完整性，我们可能披露信息。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "4. 我们的供应链是保密的",
        p: [
          "保护我们的生产网络是我们工作方式的核心。我们不会向客户或第三方披露我们网络中工厂、车间或供应商的身份——这属于我们的商业机密信息，您的合作与合同关系是与 De Line 建立的。同样，我们将您的设计、图纸和规格视为机密，仅在制造您的项目所需范围内提供给生产方。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "5. 跨境数据传输",
        p: [
          "De Line 在中国运营并服务全球客户，我们的服务提供商可能位于其他国家或地区。因此，您的信息可能在您居住国以外（包括中国）处理或存储。在必要时，我们会采取措施在传输过程中保护您的信息。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "6. 我们保存多久",
        p: [
          "我们会在回复及推进潜在项目所需的期间内保存咨询信息；对于项目信息，则保存至完成合作并满足法律、税务和会计义务所需的期限。当不再需要时，我们会删除或匿名化处理。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "7. 安全",
        p: [
          "我们采取合理的技术和组织措施保护您的信息。任何传输或存储方式都无法做到完全安全，因此我们无法保证绝对安全。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "8. 您的权利",
        p: [
          "视您所在地区而定，您可能有权访问、更正、删除或获取您个人信息的副本，反对或限制某些处理，以及撤回同意。如需行使上述权利，请发邮件至 hello@deline.studio。欧盟/英国居民还可向当地数据保护机构投诉。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "9. Cookie 与本地存储",
        p: [
          "我们尽量减少 Cookie 的使用。网站会使用必要的本地存储来保存您的语言和主题偏好。我们所用的任何分析仅限于了解整体访问量和网站性能。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "10. 未成年人",
        p: [
          "本网站及我们的服务面向企业和专业人士，并非面向 16 岁以下的儿童。我们不会有意收集其信息。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "11. 政策的变更",
        p: [
          "我们可能会不时更新本政策。上方的“最后更新”日期反映最新版本；重大变更将在本页面体现。",
        ],
        list: [],
        pAfter: [],
      },
      {
        h: "12. 联系我们",
        p: ["对本政策或您的信息有疑问？请发邮件至 hello@deline.studio。"],
        list: [],
        pAfter: [],
      },
    ],
  },
};

export const translations: Record<Lang, typeof en> = { en, ru, zh };
export type Dict = typeof en;
