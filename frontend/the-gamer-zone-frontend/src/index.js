import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderMain from './components/HeaderMain';
import Introduction from './components/Introduction';
import Presentation from './components/Presentation';
import Videogame from './components/Videogame';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderMain />
    <Introduction />
    <Presentation />

    <div className='videogames'>
      <Videogame picture = "_5fb56a33-a4b6-480b-83cf-3ae4612366ff.jpeg" name = "Minecraft" />
      <Videogame picture = "_06b13383-1a87-4c22-9746-6db5710c3515.jpeg" name = "Rocket League" />
      <Videogame picture = "_44785daa-d6ed-49c1-bbd4-ffdf533f221b.jpeg" name = "Mecapumble" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
