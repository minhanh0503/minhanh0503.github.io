import { createContext, useContext, useState } from "react";
import en from "../locales/en";
import vi from "../locales/vi";


const LanguageContext = createContext();


const languages = {
  en,
  vi,
};


export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );


  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };


  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: languages[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  return useContext(LanguageContext);
}