import axios from 'axios';
import './VideogamesDescription.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

function VideogamesDescription()
{
  let { slug } = useParams();

  const [videogameContent, setVideogameContent] = useState([]);
  const getVideogameContent = () => {
    axios.get("http://localhost:1337/api/videogames?populate=*").then((value) => {
      const contentFound = value.data.data.find(content => content.attributes.slug === slug);
      console.log("Esto es content found attributes");
      console.log(contentFound.attributes);
      setVideogameContent(contentFound.attributes);
    });
  };

  useEffect(() => {
    getVideogameContent();
  });

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
            <Link to={"/" + videogameContent.slug + "/" + element.attributes.slug}>
              <p key={index}>{element.attributes.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideogamesDescription;