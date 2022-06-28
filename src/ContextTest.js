import { useState, useContext, createContext, useEffect } from "react";
export const TranslateContext = createContext();
function TranslateProvider({ children }) {
  const [lang, setLang] = useState("en");
  const HandleLanguage = () => {
    const currentLang = localStorage.getItem("lang");
    // currentLang ? setLang(currentLang) : localStorage.setItem("lang", lang);
    lang === "en" ? setLang("ar") : setLang("en");
    // localStorage.setItem("lang", lang);
  };
  const translation = {
    en: ["the Dojo Blog", "Home", "New blog"],
    ar: ["عنوان", "اساسي", "انشاء"],
  };
  useEffect(() => {
    const currentLang = localStorage.setItem("lang", "en");
  }, []);

  const [translateState, setTranslateState] = useState(translation);
  return (
    <TranslateContext.Provider
      value={{ translateState, HandleLanguage, lang, setLang }}
    >
      {children}
    </TranslateContext.Provider>
  );
}
export default TranslateProvider;
