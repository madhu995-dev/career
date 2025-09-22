import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import te from "./locales/te/translation.json";
import ta from "./locales/ta/translation.json";

// Detect preferred language from localStorage OR browser
const savedLang = localStorage.getItem("language");
const browserLang = navigator.language.split("-")[0]; // e.g. "en-US" -> "en"

// Only allow languages we support
const supportedLangs = ["en", "hi", "te", "ta"];
const initialLang = savedLang && supportedLangs.includes(savedLang)
  ? savedLang
  : supportedLangs.includes(browserLang)
  ? browserLang
  : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      te: { translation: te },
      ta: { translation: ta },
    },
    lng: initialLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// 🔄 Keep localStorage in sync when language changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
