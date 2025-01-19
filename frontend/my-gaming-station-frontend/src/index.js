import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import './index.css';
import HeaderMain from './components/HeaderMain';
import HeaderReturnToMain from './components/HeaderReturnToMain';
import HeaderReturnToVideogame from './components/HeaderReturnToVideogame';
import Introduction from './components/Introduction';
import VideogamesSection from './components/VideogamesSection';
import VideogamesDescription from './components/VideogamesDescription';
import SeriesDescription from './components/SeriesDescription';
import reportWebVitals from './reportWebVitals';
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeaderMain />
        <Introduction />

        <VideogamesSection />
      </div>
    ),
  },
  {
    path: "/:slug",
    element: (
      <div>
        <HeaderReturnToMain />
        <VideogamesDescription />
      </div>
    ),
  },
  {
    path: "/:slugVideogame/:slugSerie",
    element: (
      <div>
        <HeaderMain />
        <HeaderReturnToMain />
        <HeaderReturnToVideogame />

        <SeriesDescription />
      </div>
    ),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
