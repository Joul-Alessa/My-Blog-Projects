import axios from 'axios';
import './VideogamesDescription.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function VideogamesDescription()
{
  let { slug } = useParams();

  const [videogameContent, setVideogameContent] = useState([]);
  const getVideogameContent = () => {
    axios.get("http://localhost:1337/api/videogames?populate=*").then((value) => {
      console.log("wenas");
      console.log(value);
      const contentFound = value.data.data.find(content => content.slug === slug);
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