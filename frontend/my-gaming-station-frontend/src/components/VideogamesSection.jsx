import axios from 'axios';
import Videogame from './Videogame';
import './VideogamesSection.css'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function VideogamesSection()
{
  const { t, i18n } = useTranslation();
  
  const [videogames, setVideogames] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const getVideogames = () => {
    axios.get(backendUrl + "/api/videogames?sort=name&locale=" + i18n.language).then((value) => {
      console.log(value);
      setVideogames(value.data.data);
    });
  };

  useEffect(() => {
    getVideogames();
  });

  return (
    <div className='videogames'>
      {videogames.map((item) => {
        return (
          <Videogame key={item.slug} data={item} />
        );
      })}
    </div>
  );
}

export default VideogamesSection;