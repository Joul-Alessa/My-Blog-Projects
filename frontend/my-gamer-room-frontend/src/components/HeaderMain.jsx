import { useTranslation } from 'react-i18next';
import personalPicture from '../assets/images/FotoPerfil.jpg'
import './HeaderMain.css';

function HeaderMain()
{
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header className="HeaderMain">
      <div class="FlexContainer">
        <div className="ItemReturn">
          <a href="https://joulessa.tech/">
            <img src={personalPicture} className="HeaderMain-Personal" alt={t('HeaderMain-ImageAlt')} />

            <p>{t('HeaderMain-Text')}</p>
          </a>
        </div>
        <div className="ItemLanguage">
          <label for="LanguageSelect">{t('LanguageChooser-Label')}</label>
          <select name="language" id="LanguageSelect" onChange={changeLanguage}>
            <option value="es">{t('LanguageChooser-es')}</option>
            <option value="en">{t('LanguageChooser-en')}</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;