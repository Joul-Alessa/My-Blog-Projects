import './HeaderReturnToVideogame.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function HeaderReturnToVideogame()
{
  let { slugVideogame, slugSerie } = useParams();

  const [videogameContent, setVideogameContent] = useState([]);
  const getVideogameContent = () => {
    axios.get("http://localhost:1337/api/videogames?populate=*").then((value) => {
      const contentFound = value.data.data.find(content => content.attributes.slug === slugVideogame);
      setVideogameContent(contentFound.attributes);
    });
  };

  useEffect(() => {
    getVideogameContent();
  });

  // TENGO QUE ARREGLAR ESTO
  return (
    <div className="HeaderReturnToVideogame">
      <Link to={"/" + slugVideogame}>
        <img src={videogameContent.logo.data.attributes.formats.url} className="HeaderReturnToVideogame-Picture" alt={"Return to " + videogameContent.name} />

        <p>{videogameContent.name}</p>
      </Link>
    </div>
  );
}

export default HeaderReturnToVideogame;