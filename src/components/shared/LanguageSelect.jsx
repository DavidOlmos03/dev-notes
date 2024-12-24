import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambiar el idioma
  };

  return (
    <div className="d-flex gap-3 justify-content-center align-items-center mt-3">
      <button
        className={`btn btn-language ${
          currentLanguage === 'en' ? 'selected' : ''
        }`}
        onClick={() => changeLanguage('en')}
      >
        <img
          src="src/assets/imgs/iconEn.png" // Ruta al archivo .png de la bandera
          alt="English"
          className="flag-icon"
        />
      </button>
      <button
        className={`btn btn-language ${
          currentLanguage === 'es' ? 'selected' : ''
        }`}
        onClick={() => changeLanguage('es')}
      >
        <img
          src="src/assets/imgs/iconEs.png" // Ruta al archivo .png de la bandera
          alt="Español"
          className="flag-icon"
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;

