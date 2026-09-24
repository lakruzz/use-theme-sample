export default {
  theme: "mindovermachine-dev/mom-doc-theme@main",
  title: {
    en: "Use Theme Sample",
    da: "Brug-Tema Eksempel",
  },
  rootRedirect: null,
  favicon: "/favicon.svg",
  logo: {
    src: "./src/assets/remote/mom-logo.png",
  },
  customCss: [],
  defaultLocale: "root",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    da: {
      label: "Dansk",
      lang: "da",
    },
  },
  social: [
    {
      icon: "github",
      label: "GitHub",
      href: "https://github.com/lakruzz",
    },
  ],
  sidebar: [
    {
      label: "Vision & Mission",
      translations: { da: "Vision & Mission" },
      items: [
        { label: "The Manifesto", translations: { da: "Manifestet" }, slug: "vision/manifesto" },
        {
          label: "The Regenerative Charter",
          translations: { da: "Det regenerative Charter" },
          slug: "vision/charter",
        },
        {
          label: "The C.R.O.W.D. Values",
          translations: { da: "C.R.O.W.D. Værdierne" },
          slug: "vision/crowd-values",
        },
      ],
    },
    {
      label: "About Us",
      translations: { da: "Om Os" },
      items: [
        { label: "Join Us", translations: { da: "Vær med" }, slug: "about/join" },
        { label: "Contact", translations: { da: "Kontakt" }, slug: "about/contact" },
        {
          label: "Founder's Story",
          translations: { da: "Founder's Story" },
          slug: "about/founder-story",
        },
      ],
    },
    {
      label: "Organization",
      translations: { da: "Organisation" },
      items: [
        {
          label: "The Three Pillars",
          translations: { da: "De tre Søjler" },
          slug: "governance/three-pillars",
        },
        {
          label: "Initiative Circle",
          translations: { da: "Initiativkredsen" },
          slug: "governance/initiative-circle",
        },
        {
          label: "Registration & Founding Documents",
          translations: { da: "Stiftelsesdokumenter" },
          slug: "governance/registration",
        },
      ],
    },
    {
      label: "Methodology",
      translations: { da: "Metoder" },
      items: [
        { label: "Collaboration", translations: { da: "Samarbejde" }, slug: "methodology/collaboration" },
        { label: "How We Work", translations: { da: "Sådan arbejder vi" }, slug: "methodology/how-we-work" },
      ],
    },
  ],
};
