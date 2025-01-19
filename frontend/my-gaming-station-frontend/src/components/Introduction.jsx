import { useTranslation } from 'react-i18next';
import mainPicture from '../assets/images/_74f7bd92-10a3-4116-a066-62017a085bb0.jpeg'
import './Introduction.css'

function Introduction()
{
  const { t, i18n } = useTranslation();
  
  return (
    <div className="Introduction">
      <div className="Introduction-Text">
        <h1>{t('Introduction-Title')}</h1>

        <p>{t('Introduction-Subtitle')}</p>
      </div>

      <img src={mainPicture} className="Introduction-Picture" alt="Gaming illustration" />
    </div>
  );
}

export default Introduction;