import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderMain from './components/HeaderMain';
import Introduction from './components/Introduction';
import Presentation from './components/Presentation';
import VideogamesSection from './components/VideogamesSection';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderMain />
    <Introduction />
    <Presentation />

    <VideogamesSection />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals   <Videogame picture = "_44785daa-d6ed-49c1-bbd4-ffdf533f221b.jpeg" name = "Mecapumble" />
reportWebVitals();
