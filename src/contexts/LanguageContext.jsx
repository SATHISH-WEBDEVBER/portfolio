// // src/contexts/LanguageContext.jsx
// import { createContext, useContext, useState } from "react";

// const LanguageContext = createContext();

// export const useLanguage = () => useContext(LanguageContext);

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   const toggleLanguage = () => {
//     setLanguage((prev) => (prev === "en" ? "ta" : "en"));
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

/////////////////////////////////////////////////////////////////////////////

// import { createContext, useContext, useState, useEffect } from "react";

// const LanguageContext = createContext();

// export const useLanguage = () => useContext(LanguageContext);

// export const LanguageProvider = ({ children }) => {
//   // 1. Get saved language or fallback to 'en'
//   const getInitialLanguage = () => {
//     const savedLang = localStorage.getItem("appLang");
//     return savedLang ? savedLang : "en";
//   };

//   const [language, setLanguage] = useState(getInitialLanguage);

//   // 2. Update localStorage whenever language changes
//   useEffect(() => {
//     localStorage.setItem("appLang", language);
//   }, [language]);

//   const toggleLanguage = () => {
//     setLanguage((prev) => (prev === "en" ? "ta" : "en"));
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

///////////////////////////////////////////////////////////////////////////////////////

// src/contexts/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    // 1. First: Check sessionStorage (for reloads)
    const sessionLang = sessionStorage.getItem("appLang");
    if (sessionLang) return sessionLang;

    // 2. New visit (tab open) — default to 'en'
    return "en";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // 3. When language changes, save only to sessionStorage (not localStorage)
  useEffect(() => {
    sessionStorage.setItem("appLang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
