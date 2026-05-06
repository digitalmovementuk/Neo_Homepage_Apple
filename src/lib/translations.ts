export type Lang = "de" | "en";

/**
 * Full string-table for the NEO homepage. German is the canonical version.
 * British English follows agency-tone (concise, no Americanisms — "organise"
 * not "organize", "behaviour" not "behavior", etc.).
 *
 * Add new strings here, not inline in components.
 */

type NavLink = { label: string; href: string };

export type Translations = {
  nav: {
    links: NavLink[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    languages: { de: string; en: string };
  };
  hero: {
    eyebrow: string;
    headlineTop: string;
    headlineBottom: string;
    sub: string;
    services: string[];
    priceLine: string;
    priceLineSub: string;
    cta: string;
    pauseLabel: string;
    playLabel: string;
  };
  snapshot: {
    title: string;
    tagline: string;
    items: { index: string; label: string; headline: string; detail: string }[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    description: string;
    prevLabel: string;
    nextLabel: string;
    soundOn: string;
    soundOff: string;
    visit: string;
    items: { name: string; role: string; description: string }[];
  };
  whyManifesto: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    closing: string;
    founderName: string;
    founderRole: string;
  };
  principles: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { title: string; body: string; kicker: string }[];
  };
  services: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { key: string; title: string; promise: string; detail: string; bullets: string[] }[];
  };
  cases: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    serviceLabel: string;
    timelineLabel: string;
  };
  comparison: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    columns: { other: string; neo: string };
    rows: { topic: string; other: string; neo: string }[];
  };
  process: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    steps: { n: string; eta: string; title: string; body: string }[];
  };
  metrics: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { value: number; suffix: string; label: string }[];
  };
  founder: {
    eyebrow: string;
    headlinePre: string;
    headlineSoft: string;
    paragraphs: string[];
    signature: string;
    signatureBlock: string;
  };
  contact: {
    eyebrow: string;
    headlinePre: string;
    headlineSoft: string;
    intro: string;
    form: { name: string; email: string; company: string; message: string; submit: string; success: string };
    tiles: { kicker: string; value: string }[];
  };
  footer: {
    blurb: string;
    sections: { title: string; links: NavLink[] }[];
    rights: string;
    legal: NavLink[];
  };
  sticky: { cta: string; arrow: string };
  modal: {
    eyebrow: string;
    headline: string;
    sub: string;
    name: string;
    email: string;
    submit: string;
    dismiss: string;
  };
};

const de: Translations = {
  nav: {
    links: [
      { label: "Was wir tun", href: "#services" },
      { label: "Kundenprojekte", href: "#cases" },
      { label: "Zahlen", href: "#metrics" },
      { label: "Kontakt", href: "#contact" },
    ],
    cta: "Erstgespräch",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    languageLabel: "Sprache",
    languages: { de: "Deutsch", en: "English" },
  },

  hero: {
    eyebrow: "High-End Performance Marketing",
    headlineTop: "Digitales",
    headlineBottom: "Wachstum.",
    sub: "Wir machen Ihre Website zum Asset und generieren kontinuierliche Kundenanfragen.",
    services: [
      "Search Engine Optimization",
      "AI Search Optimization",
      "High-End Website Development",
    ],
    priceLine: "Kostenloses Erstgespräch",
    priceLineSub: "Antwort in 24 h",
    cta: "Start",
    pauseLabel: "Hero-Video pausieren",
    playLabel: "Hero-Video starten",
  },

  snapshot: {
    title: "Snapshot",
    tagline: "In 30 Sekunden klar — was, für wen, was Sie bekommen.",
    items: [
      {
        index: "01",
        label: "Was",
        headline: "Mehr Kundenanfragen.",
        detail: "Performance Marketing & SEO, das messbar Umsatz bringt.",
      },
      {
        index: "02",
        label: "Für wen",
        headline: "Für Inhaber & Mittelstand.",
        detail: "Beratung, Handwerk, Dienstleister, B2B.",
      },
      {
        index: "03",
        label: "Was Sie bekommen",
        headline: "Kontinuierliche Kundenanfragen.",
        detail: "Festpreis, 90 Tage, keine Mindestlaufzeit.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Stimmen unserer Kunden",
    headline: "In ihren eigenen Worten.",
    description:
      "Fünf Inhaber erzählen, was sich in den ersten 90 Tagen mit NEO messbar verändert hat.",
    prevLabel: "Vorherige Stimme",
    nextLabel: "Nächste Stimme",
    soundOn: "Ton an",
    soundOff: "Ton",
    visit: "Visit Website",
    items: [
      {
        name: "Ayham Muhrez",
        role: "CEO & Founder Azura Living Bali",
        description:
          "Von 0 auf Seite 1 für 'villa rental bali' in 90 Tagen — kontinuierliche Direktbuchungen statt Plattform-Kommission.",
      },
      {
        name: "Faisaö Chauhan",
        role: "Director ADDRESSBALI®",
        description:
          "Premium-Villenmarke. Komplettes Website-Re-Design plus Performance-Marketing-Sprint, 8× Anfragen-Pipeline.",
      },
      {
        name: "Enting Man",
        role: "Founder & Director Cunos",
        description:
          "B2B-Beratungsmarke. Klare Positionierung, SEO-First Architektur, qualifizierte Inbound-Leads ab Tag 30.",
      },
      {
        name: "Dana",
        role: "Marketing Director Pentadoc",
        description:
          "Document-Intelligence-Plattform. Editoriale Homepage, klare Conversion-Architektur, Demo-Requests verdoppelt.",
      },
      {
        name: "Johannes",
        role: "Founder & CEO CX",
        description:
          "Customer-Excellence-Plattform. Sunset-Hero plus Service-Karten. SEO-Architektur trägt das B2B-Pipeline-Wachstum.",
      },
    ],
  },

  whyManifesto: {
    eyebrow: "Wofür wir stehen",
    headline: "Committment.",
    paragraphs: [
      "Unsere Kundenprojekte vereint ein Ziel: Unternehmenswachstum durch digitales Marketing. Erfolgreich sind wir, wenn unsere Kunden ihren Umsatz steigern.",
      "NEO THE AGENCY® ist eine High-End Performance Marketing-Agentur. Projekterfolge sind bei uns messbar. Wir liefern Kundenanfragen.",
      "Als ehemalige Strategieberater, Unternehmensberater und Projektmanager bekommen unsere Kunden das Komplettpaket: Digitalstrategie, professionelles Projektmanagement und Expertentum.",
    ],
    closing: "Customer Excellence ist unser Kompass. Deshalb arbeiten wir mit drei klaren Prinzipien.",
    founderName: "Raoul Müller",
    founderRole: "Gründer · NEO THE AGENCY",
  },

  principles: {
    eyebrow: "Wie wir arbeiten",
    headlineMain: "Drei Prinzipien.",
    headlineSub: "Eine Methode.",
    intro:
      "Customer Excellence ist abstrakt. Konkret heißt das für uns: Commitment, Performance, Fairer Preis. Drei Sätze, die jeden Tag entscheiden, was wir tun — und was wir lassen.",
    items: [
      {
        title: "Commitment",
        body:
          "Wir gehen mit. Sie bekommen den Gründer am Telefon, nicht einen Account-Manager mit Excel-Tabelle. Jedes Projekt wird zu unserem.",
        kicker: "Prinzip",
      },
      {
        title: "Performance",
        body:
          "Wir messen Anfragen, nicht Klicks. Jeden Monat sehen Sie, was sich bewegt hat — und warum. Kein Schönreden, keine Eitelkeitsmetriken.",
        kicker: "Prinzip",
      },
      {
        title: "Fairer Preis",
        body:
          "Festpreis vom ersten Tag an. Keine Setup-Surprise, keine Mindestlaufzeit, keine versteckten Stunden. Sie wissen, was Sie bekommen.",
        kicker: "Prinzip",
      },
    ],
  },

  services: {
    eyebrow: "Was wir tun",
    headlineMain: "Vier Disziplinen.",
    headlineSub: "Eine Pipeline.",
    intro:
      "Eng verzahnt, weil sich Wachstum nicht in Silos einsperren lässt. Klicken Sie sich durch — oder lassen Sie den Carousel laufen.",
    items: [
      {
        key: "seo",
        title: "SEO",
        promise: "Google Seite 1 in nur 90 Tagen.",
        detail:
          "Technische Korrekturen, Inhalte mit Klicks und Linkaufbau, der sich auszahlt. Wir zeigen Ihnen jeden Monat die Mathematik dahinter — was sich bewegt hat, warum, und was als Nächstes kommt.",
        bullets: [
          "Technisches SEO-Audit",
          "Content + On-Page",
          "Autoritätsaufbau",
          "Monatliche Auswertung",
        ],
      },
      {
        key: "google-ads",
        title: "Google Ads",
        promise: "ROI-positiver bezahlter Traffic, der druckt.",
        detail:
          "Eng gefasste Kampagnen, mit Conversions getrackte Landingpages und wöchentliches Verschwendungs-Trimming. Wir bieten nicht auf Eitelkeitsbegriffe — wir bieten auf Umsatz.",
        bullets: [
          "Search + Performance Max",
          "Conversion-Tracking",
          "Landingpages, die konvertieren",
          "Wöchentliche Optimierung",
        ],
      },
      {
        key: "social",
        title: "Social Media",
        promise: "Inhalte, die Anfragen bringen — keine Eitelkeitsmetriken.",
        detail:
          "Short-Form-Video, Paid Social und Kreatives, gebaut für Ihre Zielgruppe und Plattform. Follower sind nett — gebuchte Termine sind besser.",
        bullets: [
          "Short-Form-Video",
          "Paid Social",
          "Kreativ-Produktion",
          "Lead-getriebener Posting-Plan",
        ],
      },
      {
        key: "websites",
        title: "Websites",
        promise: "Conversion-optimierte Seiten, die ab Tag 1 ranken.",
        detail:
          "Schnelle, moderne, mobile-first Websites, die schnell laden, gut aussehen und Besucher zu Anfragen machen. Auf Plattformen, die Sie selbst pflegen können.",
        bullets: [
          "Mobile-first Design",
          "Core Web Vitals",
          "Auf Conversion gebaut",
          "Selbst editierbar",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Kundenprojekte",
    headlineMain: "Echte Marken.",
    headlineSub: "Echte Zahlen.",
    intro:
      "Eine Auswahl. Mit allen Kunden seit fünf Jahren am Tisch — oder gar nicht erst angefangen.",
    serviceLabel: "Leistungen",
    timelineLabel: "Zeitraum",
  },

  comparison: {
    eyebrow: "NEO vs. Andere",
    headlineMain: "Was wir anders machen.",
    headlineSub: "Sechs Punkte.",
    intro:
      "Damit Sie wissen, worauf Sie sich einlassen — bevor Sie sich einlassen.",
    columns: { other: "Andere Agenturen", neo: "NEO THE AGENCY" },
    rows: [
      {
        topic: "Vertragslaufzeit",
        other: "12 oder 24 Monate, schwer zu beenden",
        neo: "90-Tage-Sprint, monatlich verlängerbar",
      },
      {
        topic: "Reporting",
        other: "Eitelkeitsmetriken in 30-seitigen PDFs",
        neo: "Anfragen, Umsatz, Quellen — eine Seite",
      },
      {
        topic: "Ansprechpartner",
        other: "Account-Manager, der Excel vorliest",
        neo: "Der Gründer, am Telefon",
      },
      {
        topic: "Preisgestaltung",
        other: "Stundensätze, Setup-Fees, Mehrkosten",
        neo: "Festpreis, alles inklusive, transparent",
      },
      {
        topic: "Ziel",
        other: "Mehr Klicks, mehr Reichweite",
        neo: "Mehr qualifizierte Anfragen",
      },
      {
        topic: "Lock-in",
        other: "Daten und Accounts beim Wechsel verloren",
        neo: "Sie besitzen alles vom ersten Tag",
      },
    ],
  },

  process: {
    eyebrow: "Der 90-Tage-Sprint",
    headlineMain: "Vier Meilensteine.",
    headlineSub: "Keine Überraschungen.",
    intro:
      "Was an Tag 1, 30, 60 und 90 passiert. Wir sagen es vorher, wir halten uns dran, und wir zeigen Ihnen jeden Monat die Mathematik.",
    steps: [
      {
        n: "01",
        eta: "Tag 1",
        title: "Audit & Kickoff",
        body:
          "Technisches SEO-Audit, Kanal-Diagnose, Konkurrenz-Mapping. 30-Min-Screen-Share, ein Gründer am Bildschirm.",
      },
      {
        n: "02",
        eta: "Tag 30",
        title: "Launch",
        body:
          "Tracking live, neue Landingpages online, Google-Ads-Kampagnen aktiv, On-Page-SEO-Fixes ausgeliefert.",
      },
      {
        n: "03",
        eta: "Tag 60",
        title: "Erste Page-1-Keywords",
        body:
          "Erste kommerzielle Keywords ranken auf Seite 1. Pipeline füllt sich, monatlicher Klartext-Report mit den nächsten Hebeln.",
      },
      {
        n: "04",
        eta: "Tag 90",
        title: "8× Pipeline",
        body:
          "Gemessene Steigerung qualifizierter Anfragen. Ab hier monatliche Optimierung — keine Überraschungen, keine Mindestlaufzeit.",
      },
    ],
  },

  metrics: {
    eyebrow: "Zahlen",
    headlineMain: "Was wirklich zählt.",
    headlineSub: "Anfragen, nicht Klicks.",
    intro: "Drei Zahlen aus laufenden Kunden — gemessen, nicht behauptet.",
    items: [
      { value: 8, suffix: "×", label: "mehr Anfragen pro Monat" },
      { value: 90, suffix: "", label: "Tage bis Google Seite 1" },
      { value: 47, suffix: "", label: "Kundenprojekte abgeschlossen" },
    ],
  },

  founder: {
    eyebrow: "Eine Notiz vom Gründer",
    headlinePre: "Sie reden mit der Person,",
    headlineSoft: "die auch liefert.",
    paragraphs: [
      "Ich habe NEO gegründet, weil ich es leid war zu sehen, wie gute Unternehmen Tausende Euro pro Monat an Agenturen zahlen, die ihnen Eitelkeitsmetriken zeigen statt echte Anfragen im Posteingang.",
      "Bei NEO bekommen Sie keinen Account-Manager, der eine Excel-Tabelle vorliest. Sie bekommen mich am Telefon, einen Festpreis ohne Lock-in, und einen 90-Tage-Sprint, hinter dem ich mit meinem Namen stehe.",
      "Wenn das nach Ihrer Art zu arbeiten klingt — schreiben Sie mir unten. Ich antworte werktags innerhalb 24 h, persönlich.",
    ],
    signature: "Raoul",
    signatureBlock: "Raoul Müller · Gründer, NEO THE AGENCY",
  },

  contact: {
    eyebrow: "Schreiben Sie uns",
    headlinePre: "Lassen Sie uns",
    headlineSoft: "starten.",
    intro:
      "Kostenloses Erstgespräch. Antwort werktags innerhalb 24 h, persönlich vom Gründer.",
    form: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen (optional)",
      message: "Was möchten Sie erreichen?",
      submit: "Nachricht senden",
      success: "Danke. Sie hören innerhalb von 24 h von uns.",
    },
    tiles: [
      { kicker: "Telefon", value: "+49 30 123 4567" },
      { kicker: "E-Mail", value: "kontakt@neo-agency.de" },
      { kicker: "Adresse", value: "Hardenbergstraße 1, 10623 Berlin" },
    ],
  },

  footer: {
    blurb:
      "NEO THE AGENCY ist eine High-End Performance Marketing-Agentur. Wir machen Websites zu Assets und liefern qualifizierte Anfragen.",
    sections: [
      {
        title: "Leistungen",
        links: [
          { label: "SEO", href: "#services" },
          { label: "Google Ads", href: "#services" },
          { label: "Social Media", href: "#services" },
          { label: "Websites", href: "#services" },
        ],
      },
      {
        title: "Agentur",
        links: [
          { label: "Wofür wir stehen", href: "#why" },
          { label: "Wie wir arbeiten", href: "#principles" },
          { label: "Kundenprojekte", href: "#cases" },
          { label: "Kontakt", href: "#contact" },
        ],
      },
    ],
    rights: "© NEO THE AGENCY. Alle Rechte vorbehalten.",
    legal: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
  },

  sticky: {
    cta: "Kostenloses Erstgespräch",
    arrow: "→",
  },

  modal: {
    eyebrow: "Bevor Sie weiterlesen",
    headline: "Kostenloses Audit Ihrer Website.",
    sub: "30-Minuten-Walkthrough plus Ein-Seiten-Audit per E-Mail. Egal, ob Sie mit uns arbeiten oder nicht.",
    name: "Name",
    email: "E-Mail",
    submit: "Audit anfordern",
    dismiss: "Später vielleicht",
  },
};

const en: Translations = {
  nav: {
    links: [
      { label: "What we do", href: "#services" },
      { label: "Case studies", href: "#cases" },
      { label: "Numbers", href: "#metrics" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Free consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Language",
    languages: { de: "German", en: "English" },
  },

  hero: {
    eyebrow: "High-end performance marketing",
    headlineTop: "Digital",
    headlineBottom: "Growth.",
    sub: "We turn your website into an asset and generate a continuous flow of qualified enquiries.",
    services: [
      "Search Engine Optimisation",
      "AI Search Optimisation",
      "High-End Website Development",
    ],
    priceLine: "Free consultation",
    priceLineSub: "Reply within 24 h",
    cta: "Start",
    pauseLabel: "Pause hero video",
    playLabel: "Play hero video",
  },

  snapshot: {
    title: "Snapshot",
    tagline: "Clear in 30 seconds — what, for whom, what you get.",
    items: [
      {
        index: "01",
        label: "What",
        headline: "More enquiries.",
        detail: "Performance marketing & SEO that measurably drives revenue.",
      },
      {
        index: "02",
        label: "For whom",
        headline: "For owners & SMEs.",
        detail: "Consultancies, trades, professional services, B2B.",
      },
      {
        index: "03",
        label: "What you get",
        headline: "Continuous enquiries.",
        detail: "Fixed price, 90 days, no minimum term.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Voices of our clients",
    headline: "In their own words.",
    description:
      "Five owners describe what measurably changed in the first 90 days with NEO.",
    prevLabel: "Previous voice",
    nextLabel: "Next voice",
    soundOn: "Sound on",
    soundOff: "Sound",
    visit: "Visit Website",
    items: [
      {
        name: "Ayham Muhrez",
        role: "CEO & Founder, Azura Living Bali",
        description:
          "From zero to page one for 'villa rental bali' in 90 days — direct bookings instead of platform commission.",
      },
      {
        name: "Faisaö Chauhan",
        role: "Director, ADDRESSBALI®",
        description:
          "Premium villa brand. Full website redesign plus a performance-marketing sprint, 8× the enquiry pipeline.",
      },
      {
        name: "Enting Man",
        role: "Founder & Director, Cunos",
        description:
          "B2B consultancy. Sharp positioning, SEO-first architecture, qualified inbound leads from day 30.",
      },
      {
        name: "Dana",
        role: "Marketing Director, Pentadoc",
        description:
          "Document-intelligence platform. Editorial homepage, clean conversion architecture, demo requests doubled.",
      },
      {
        name: "Johannes",
        role: "Founder & CEO, CX",
        description:
          "Customer-excellence platform. Sunset hero plus service cards. SEO architecture carries the B2B pipeline.",
      },
    ],
  },

  whyManifesto: {
    eyebrow: "What we stand for",
    headline: "Commitment.",
    paragraphs: [
      "Our client work shares one goal: business growth through digital marketing. We're successful when our clients grow revenue.",
      "NEO THE AGENCY® is a high-end performance marketing agency. Project success is measurable. We deliver enquiries.",
      "As former strategy consultants, management consultants and project managers, our clients get the full package: digital strategy, professional project management, and genuine expertise.",
    ],
    closing:
      "Customer excellence is our compass. That's why we work to three clear principles.",
    founderName: "Raoul Müller",
    founderRole: "Founder · NEO THE AGENCY",
  },

  principles: {
    eyebrow: "How we work",
    headlineMain: "Three principles.",
    headlineSub: "One method.",
    intro:
      "Customer excellence is abstract. In practice, it means: commitment, performance, a fair price. Three sentences that decide what we do — and what we don't — every day.",
    items: [
      {
        title: "Commitment",
        body:
          "We're in. You get the founder on the phone, not an account manager with a spreadsheet. Every project becomes ours.",
        kicker: "Principle",
      },
      {
        title: "Performance",
        body:
          "We measure enquiries, not clicks. Every month you see what moved — and why. No spin, no vanity metrics.",
        kicker: "Principle",
      },
      {
        title: "Fair price",
        body:
          "Fixed price from day one. No setup surprise, no minimum term, no hidden hours. You know exactly what you get.",
        kicker: "Principle",
      },
    ],
  },

  services: {
    eyebrow: "What we do",
    headlineMain: "Four disciplines.",
    headlineSub: "One pipeline.",
    intro:
      "Tightly interlocked, because growth doesn't sit in silos. Click through — or let the carousel run.",
    items: [
      {
        key: "seo",
        title: "SEO",
        promise: "Google page one in 90 days.",
        detail:
          "Technical fixes, content that earns clicks, and link-building that pays off. We show you the maths every month — what moved, why, and what's next.",
        bullets: [
          "Technical SEO audit",
          "Content + on-page",
          "Authority building",
          "Monthly review",
        ],
      },
      {
        key: "google-ads",
        title: "Google Ads",
        promise: "ROI-positive paid traffic that prints.",
        detail:
          "Tightly scoped campaigns, conversion-tracked landing pages, and weekly waste trimming. We don't bid on vanity terms — we bid on revenue.",
        bullets: [
          "Search + Performance Max",
          "Conversion tracking",
          "Landing pages that convert",
          "Weekly optimisation",
        ],
      },
      {
        key: "social",
        title: "Social Media",
        promise: "Content that drives enquiries — not vanity metrics.",
        detail:
          "Short-form video, paid social, and creative built for your audience and platform. Followers are nice — booked calls are better.",
        bullets: [
          "Short-form video",
          "Paid social",
          "Creative production",
          "Lead-driven posting plan",
        ],
      },
      {
        key: "websites",
        title: "Websites",
        promise: "Conversion-optimised pages that rank from day one.",
        detail:
          "Fast, modern, mobile-first websites that load quickly, look right, and turn visitors into enquiries. On platforms you can edit yourself.",
        bullets: [
          "Mobile-first design",
          "Core Web Vitals",
          "Built for conversion",
          "Self-editable",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Case studies",
    headlineMain: "Real brands.",
    headlineSub: "Real numbers.",
    intro:
      "A selection. We've been at the table with every client for five years — or we don't start.",
    serviceLabel: "Services",
    timelineLabel: "Timeline",
  },

  comparison: {
    eyebrow: "NEO vs. others",
    headlineMain: "What we do differently.",
    headlineSub: "Six points.",
    intro: "So you know what you're signing up for — before you sign up.",
    columns: { other: "Other agencies", neo: "NEO THE AGENCY" },
    rows: [
      {
        topic: "Contract length",
        other: "12 or 24 months, hard to leave",
        neo: "90-day sprint, renewed monthly",
      },
      {
        topic: "Reporting",
        other: "Vanity metrics across 30-page PDFs",
        neo: "Enquiries, revenue, sources — one page",
      },
      {
        topic: "Point of contact",
        other: "Account manager reading a spreadsheet",
        neo: "The founder, on the phone",
      },
      {
        topic: "Pricing",
        other: "Hourly rates, setup fees, surcharges",
        neo: "Fixed price, all-in, transparent",
      },
      {
        topic: "Goal",
        other: "More clicks, more reach",
        neo: "More qualified enquiries",
      },
      {
        topic: "Lock-in",
        other: "Data and accounts lost when you leave",
        neo: "You own everything from day one",
      },
    ],
  },

  process: {
    eyebrow: "The 90-day sprint",
    headlineMain: "Four milestones.",
    headlineSub: "No surprises.",
    intro:
      "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show you the maths every month.",
    steps: [
      {
        n: "01",
        eta: "Day 1",
        title: "Audit & kickoff",
        body:
          "Technical SEO audit, channel diagnosis, competitor mapping. 30-minute screen share, a founder on the call.",
      },
      {
        n: "02",
        eta: "Day 30",
        title: "Launch",
        body:
          "Tracking live, new landing pages online, Google Ads campaigns active, on-page SEO fixes shipped.",
      },
      {
        n: "03",
        eta: "Day 60",
        title: "First page-one keywords",
        body:
          "First commercial keywords rank on page one. Pipeline starts filling, monthly plain-talk report with the next levers.",
      },
      {
        n: "04",
        eta: "Day 90",
        title: "8× pipeline",
        body:
          "Measured uplift in qualified enquiries. From here on, monthly optimisation — no surprises, no minimum term.",
      },
    ],
  },

  metrics: {
    eyebrow: "Numbers",
    headlineMain: "What actually counts.",
    headlineSub: "Enquiries, not clicks.",
    intro: "Three numbers from live clients — measured, not claimed.",
    items: [
      { value: 8, suffix: "×", label: "more enquiries per month" },
      { value: 90, suffix: "", label: "days to Google page one" },
      { value: 47, suffix: "", label: "client projects shipped" },
    ],
  },

  founder: {
    eyebrow: "A note from the founder",
    headlinePre: "You'll talk to the person",
    headlineSoft: "who delivers.",
    paragraphs: [
      "I founded NEO because I was tired of watching good companies pay agencies thousands a month to be shown vanity metrics instead of real enquiries in the inbox.",
      "At NEO you don't get an account manager reading a spreadsheet. You get me on the phone, a fixed price with no lock-in, and a 90-day sprint I put my name on.",
      "If that sounds like your way of working — drop me a line below. I reply personally, on weekdays, within 24 h.",
    ],
    signature: "Raoul",
    signatureBlock: "Raoul Müller · Founder, NEO THE AGENCY",
  },

  contact: {
    eyebrow: "Get in touch",
    headlinePre: "Let's get",
    headlineSoft: "started.",
    intro:
      "Free consultation. Reply within 24 h on weekdays, personally from the founder.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "What do you want to achieve?",
      submit: "Send message",
      success: "Thank you. You'll hear from us within 24 h.",
    },
    tiles: [
      { kicker: "Phone", value: "+49 30 123 4567" },
      { kicker: "Email", value: "kontakt@neo-agency.de" },
      { kicker: "Address", value: "Hardenbergstraße 1, 10623 Berlin" },
    ],
  },

  footer: {
    blurb:
      "NEO THE AGENCY is a high-end performance marketing agency. We turn websites into assets and deliver qualified enquiries.",
    sections: [
      {
        title: "Services",
        links: [
          { label: "SEO", href: "#services" },
          { label: "Google Ads", href: "#services" },
          { label: "Social Media", href: "#services" },
          { label: "Websites", href: "#services" },
        ],
      },
      {
        title: "Agency",
        links: [
          { label: "What we stand for", href: "#why" },
          { label: "How we work", href: "#principles" },
          { label: "Case studies", href: "#cases" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    rights: "© NEO THE AGENCY. All rights reserved.",
    legal: [
      { label: "Imprint", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },

  sticky: {
    cta: "Free consultation",
    arrow: "→",
  },

  modal: {
    eyebrow: "Before you scroll on",
    headline: "Free audit of your website.",
    sub: "30-minute walkthrough plus a one-page audit by email. Whether you work with us or not.",
    name: "Name",
    email: "Email",
    submit: "Request audit",
    dismiss: "Maybe later",
  },
};

export const translations: Record<Lang, Translations> = { de, en };
