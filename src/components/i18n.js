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
        zevrechner:"Zev",
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
        zevrechner:"sunboooot",
        de: "Allemand",
        fr: "Français",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", 
  fallbackLng: "de", 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
