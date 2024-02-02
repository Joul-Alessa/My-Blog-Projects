import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Introduction from './components/Introduction'
import TitleSection from './components/TitleSection';
import Job from './components/Job';
import Study from './components/Study';
import reportWebVitals from './reportWebVitals';

import HermesCorp from './assets/images/02-professional-experience/hermescorp.jpg'
import Freelancer from './assets/images/02-professional-experience/freelancer.jpg'
import BachUAA from './assets/images/03-studies/bachuaa.jpg'
import BI from './assets/images/03-studies/bi.jpg'
import UAA from './assets/images/03-studies/uaa.jpg'
import Coursera from './assets/images/03-studies/coursera.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Introduction />
    <TitleSection title = 'Professional Experience' />
    <Job image={Freelancer} title={'Independent software developer'} period={'Aug 2023 - Feb 2024'} role={'Full Stack Developer & Machine Learning Engineer'} description={'Software developer for diverse clients in web, desktop, and mobile environments. Analyst and data scientist for client projects employing Machine Learning techniques.'}/>
    <Job image={HermesCorp} title={'HermesCorp'} period={'Feb 2022 - Apr 2023'} role={'BackEnd Developer'} description={'Development of REST API backend applications with Node.js, storing data in MongoDB and PostgreSQL, and deploying them on AWS Linux servers using Docker.'}/>

    <TitleSection title = 'Studies' />
    <Study image={Coursera} institution={'Coursera'} period={'Jul 2023 - Sep 2023'} study={'Google Data Analytics Certificate'} description={'Final project centered on analyze the correlation between three-point shot efficiency and percentage of victories in the NBA using Python and Matplotlib.'}/>
    <Study image={UAA} institution={'Aguascalientes Autonomous University'} period={'Jul 2018 - Jun 2023'} study={'Intelligent Computing Engineer'} description={"Undergraduate thesis on the implementation of supervised learning algorithms to classify neuronal activity in movement intention through a brain-computer interface. Five-time awardee of honorable mention in ACM/ICPC participations in 2018, 2019, and 2023. Six-time best grade of a semester (1st, 2nd, 3rd, 4th, 5th and 10th). Class of 2023's best grade with a performance of 9.667 (3.87 GPA equivalent). Graduated with honors after publishing my undergraduate thesis in the CONTIE 2023 journal."}/>
    <Study image={BI} institution={'International Baccalaureate'} period={'Aug 2016 - May 2018'} study={'International Baccalaureate Diploma Programme'} description={'Graduated from the Diploma Programme in the May 2018 examination session with 28 points: Spanish A: Literature (HL): 5. English B (HL): 5. History of America (Spanish) (HL): 4. Biology (Spanish) (SL): 4. Chemistry (Spanish) (SL): 3. Mathematics (Spanish) (SL): 5. Extended Essay in World Studies (Spanish): B. Theory of Knowledge: B.'}/>
    <Study image={BachUAA} institution={'High School Center of the Aguascalientes Autonomous University'} period={'Jul 2015 - Jun 2018'} study={'General High School Studies'} description={'Grade performance of 9.5 (3.84 GPA equivalent). Fifth place and awardee of honorable mention in final phase of the 2017 Mathematics Mexican Olimpiad, region Aguascalientes.'}/>

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