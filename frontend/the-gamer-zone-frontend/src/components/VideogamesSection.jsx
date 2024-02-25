import axios from 'axios';
import Videogame from './Videogame';
import './VideogamesSection.css'
import { useEffect, useState } from 'react';

function VideogamesSection()
{
  const [videogames, setVideogames] = useState([]);
  const getVideogames = () => {
    axios.get("http://localhost:1337/api/videogames?populate=*").then((value) => {
      console.log(value.data.data);
      setVideogames(value.data.data);
    });
  };

  useEffect(() => {
    getVideogames();
  });

  return (
    <div className='videogames'>
      {videogames.map((item) => {
        console.log(item.id + "   " + item.attributes.name);
        return (
          <Videogame key={item.id} data={item} />
        );
      })}
    </div>
  );
}

export default VideogamesSection;