import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import mainPicture from '../assets/images/_74f7bd92-10a3-4116-a066-62017a085bb0.jpeg'
import './HeaderReturnToMain.css';
import { Link } from "react-router-dom";

function HeaderMain()
{
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const language = i18n.language;
    const selectElement = document.getElementById('LanguageSelect');
    if (selectElement) {
      selectElement.value = language;
    }
    document.title = i18n.t('PageTitle');
  }, [i18n.language]);
  
  return (
    <div className="HeaderReturnToMain">
      <div className="FlexContainer">
        <div className="ItemReturnHeaderReturnToMain">
          <Link to={"/"}>
            <img src={mainPicture} className="HeaderReturnToMain-Picture" alt={t('HeaderReturnToMain-ImageAlt')} />

            <p>{t('HeaderReturnToMain-Text')}</p>
          </Link>
        </div>
        <div className="ItemLanguage">
          <label for="LanguageSelect">{t('LanguageChooser-Label')}</label>
          <select name="language" id="LanguageSelect" onChange={changeLanguage}>
            <option value="es">{t('LanguageChooser-es')}</option>
            <option value="en">{t('LanguageChooser-en')}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;