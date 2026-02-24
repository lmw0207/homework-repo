import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  ko: {
    greeting: "안녕하세요",
    welcome: "환영합니다",
    changeLanguage: "언어 변경"
  },
  en: {
    greeting: "Hello",
    welcome: "Welcome",
    changeLanguage: "Change Language"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ko");

  const t = (key) => translations[lang][key] || key;
  const toggleLang = () => setLang((lang) => (lang === "ko" ? "en" : "ko"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
