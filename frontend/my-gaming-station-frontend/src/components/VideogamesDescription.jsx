import axios from 'axios';
import './VideogamesDescription.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

function VideogamesDescription()
{
  const { t, i18n } = useTranslation();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  let { slug } = useParams();

  const [videogameContent, setVideogameContent] = useState([]);
  const getVideogameContent = () => {
    axios.get(backendUrl + "/api/videogames/" + slug + "?populate=*").then((value) => {
      const contentFound = value.data;
      setVideogameContent(contentFound);
    });
  };

  useEffect(() => {
    getVideogameContent();
  }, []);

  return (
    <div>
      <div className='videogame-description'>
        <h1>{videogameContent.name}</h1>

        <div className="videogame-content">
          <ReactMarkdown>{videogameContent.description}</ReactMarkdown>
        </div>
      </div>

      {videogameContent.videogame_series && videogameContent.videogame_series.data.length > 0 && (
        <p>Some classifications related to this game</p>
      )}

      <div className="Series">
        {videogameContent.videogame_series && videogameContent.videogame_series.data.map((element, index) => (
          <div className='Serie'>
            <Link to={"/" + videogameContent.slug + "/" + element.slug}>
              <p key={index}>{element.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideogamesDescription;