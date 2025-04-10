import axios from 'axios';
import './SeriesDescription.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

function SeriesDescription()
{
  let { slugVideogame, slugSerie } = useParams();

  /* ARREGLAR ESTO
  const [videogameContent, setVideogameContent] = useState([]);
  const getVideogameContent = () => {
    axios.get("http://localhost:1337/api/videogames?populate=*").then((value) => {
      const contentFound = value.data.data.find(content => content.attributes.slug === slugVideogame);
      console.log(contentFound.attributes);
      setVideogameContent(contentFound.attributes);
    });
  };

  useEffect(() => {
    getVideogameContent();
  });
  */

  return (
    <div className='videogame-description'>
      <h1>{slugVideogame}</h1>

      <h1>{slugSerie}</h1>
    </div>
  );
}

export default SeriesDescription;