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

  // Definiendo el orden de los elementos
  var select = document.getElementById("VideogamesFilter");
  var sortParameter;
  var randomSeed = 1;
  // document.getElementById("VideogamesFilter").addEventListener("change", function() {
  //   if (this.value === "random") {
  //     randomSeed = Math.floor(Math.random() * 9999) + 1;
  //   }
  // });
  
  // if (select.value === "a-z") {
  //   sortParameter = "sort=name:asc";
  // }
  // if (select.value === "z-a") {
  //   sortParameter = "sort=name:desc";
  // }
  // if (select.value === "random") {
  //   sortParameter = "randomSeed=" + randomSeed;
  // }
  
  const getVideogames = () => {
    console.log(sortParameter);
    axios.get(backendUrl + "/api/videogames?populate=*&" + sortParameter + "&locale=" + i18n.language).then((value) => {
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