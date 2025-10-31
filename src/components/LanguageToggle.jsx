// src/components/LanguageToggle.jsx
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {translations[language].button}
    </button>
  );
};

export default LanguageToggle;
