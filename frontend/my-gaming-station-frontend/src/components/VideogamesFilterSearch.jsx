import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './VideogamesFilterSearch.css';

function VideogamesFilterSearch()
{
  const { t, i18n } = useTranslation();

  return (
      <div className="DivFilterSearch">
        <div className="DivFilter">
          <label for="VideogamesFilter">{t('VideogamesFilterSearch-FilterLabel')}</label>
          <select id="VideogamesFilter">
            <option value="a-z">{t('VideogamesFilterSearch-FilterAscendent')}</option>
            <option value="z-a">{t('VideogamesFilterSearch-FilterDescendent')}</option>
            <option value="random">{t('VideogamesFilterSearch-FilterRandom')}</option>
          </select>
        </div>
        <div className="DivSearch">
          <label for="VideogamesSearch">{t('VideogamesFilterSearch-SearchLabel')}</label>
          <input type="text" id="VideogamesSearch" name="Videogames"/>
        </div>
      </div>
    );
}

export default VideogamesFilterSearch;