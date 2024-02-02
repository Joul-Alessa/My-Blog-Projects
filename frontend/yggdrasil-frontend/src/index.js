import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Introduction from './components/Introduction'
import TitleSection from './components/TitleSection';
import Job from './components/Job';
import reportWebVitals from './reportWebVitals';

import HermesCorp from './assets/images/02-professional-experience/hermescorp.jpg'
import Freelancer from './assets/images/02-professional-experience/freelancer.jpg'
import BachUAA from './assets/images/03-studies/bachuaa.jpg'
import BI from './assets/images/03-studies/bi.jpg'
import UAA from './assets/images/03-studies/uaa.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Introduction />
    <TitleSection title = 'Professional Experience' />
    <Job image={Freelancer} title={'Independent software developer'} period={'2023 - 2024'} role={'Full Stack Developer & Machine Learning Engineer'} description={'Software developer for diverse clients in web, desktop, and mobile environments. Analyst and data scientist for client projects employing Machine Learning techniques.'}/>
    <Job image={HermesCorp} title={'HermesCorp'} period={'2022 - 2023'} role={'BackEnd Developer'} description={'Development of REST API backend applications with Node.js, storing data in MongoDB and PostgreSQL, and deploying them on AWS Linux servers using Docker.'}/>

    <TitleSection title = 'Studies' />
    <Job image={UAA} title={'Aguascalientes Autonomous University'} period={'2018 - 2023'} role={'Intelligent Computing Engineer'}/>
    <Job image={BI} title={'International Baccalaureate'} period={'2016 - 2018'} role={'International Baccalaureate Diploma Programme'}/>
    <Job image={BachUAA} title={'High School Center of the Aguascalientes Autonomous University'} period={'2015 - 2018'} role={'General High School Studies'}/>

    <TitleSection title = 'Technologies' />
    <TitleSection title = 'My Projects' />
    <TitleSection title = 'Learning Projects' />
    <TitleSection title = 'Projects to get to know me better' />
    <TitleSection title = 'Pseudo-Resume' />
    <TitleSection title = 'Recommended resources' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();