  
const LanguageSelect = ({i18n}) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  )
};

export default LanguageSelect;
