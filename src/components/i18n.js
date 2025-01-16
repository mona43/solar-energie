import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      navbar: {
        home: "Willkommen",
        solar: "Solar",
        energy: "Energie",
        services: "Firma",
        contact: "Kontakt",
        de: "Deutsch", // لغة المانية
        fr: "Französisch", // لغة فرنسية
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        solar: "Solaire",
        energy: "Énergie",
        services: "Entreprise",
        contact: "Contact",
        de: "Allemand",
        fr: "Français",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", // اللغة الافتراضية هي الألمانية
  fallbackLng: "de", // في حالة عدم وجود ترجمة للغة المختارة، تستخدم الألمانية
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
