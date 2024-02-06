import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Introduction from './components/Introduction'
import TitleSection from './components/TitleSection';
import Job from './components/Job';
import Study from './components/Study';
import TechnologyChapter from './components/Technology-Chapter';
import Project from './components/Project';
import reportWebVitals from './reportWebVitals';

import HermesCorp from './assets/images/02-professional-experience/hermescorp.jpg'
import Freelancer from './assets/images/02-professional-experience/freelancer.jpg'

import BachUAA from './assets/images/03-studies/bachuaa.jpg'
import BI from './assets/images/03-studies/bi.jpg'
import UAA from './assets/images/03-studies/uaa.jpg'
import Coursera from './assets/images/03-studies/coursera.jpg'

import TheFirstCRUD from './assets/images/05-my-projects/the-first-crud.png'
import KaggleCommonlit from './assets/images/05-my-projects/kaggle-commonlit.png'
import UAAICIThesis from './assets/images/05-my-projects/uaa-ici-thesis.png'
import BrackleyHQ from './assets/images/05-my-projects/brackley-hq.jpg'
import DailyCodingProblem from './assets/images/05-my-projects/daily-coding-problem.jpg'
import UAAICI from './assets/images/05-my-projects/uaa-ici.png'

import AppCitasBack from './assets/images/06-learning-projects/appcitas-back.png'
import AppCitasFront from './assets/images/06-learning-projects/appcitas-front.png'
import TwelveDSProjects from './assets/images/06-learning-projects/12-data-science-projects.jpg'
import KaggleTitanicML from './assets/images/06-learning-projects/kaggle-titanicml.png'
import VuejsTodoApp from './assets/images/06-learning-projects/vuejs-todoapp.jpg'
import ThreejsTutorial from './assets/images/06-learning-projects/threejs-tutorial.jpg'
import TkinterProjects from './assets/images/06-learning-projects/tkinter-projects.png'

import MiCamino from './assets/images/07-get-to-know-me-better/mi-camino.png'

import LearnGitBranching from './assets/images/09-recommended-resources/learn-git-branching.png'
import ReactGG from './assets/images/09-recommended-resources/react-gg.png'
import DevDocs from './assets/images/09-recommended-resources/devdocs.png'
import OnlinePythonTutor from './assets/images/09-recommended-resources/online-python-tutor.png'
import FreeForDev from './assets/images/09-recommended-resources/free-for-dev.png'
import UXCollective from './assets/images/09-recommended-resources/ux-collective.png'
import OpenSourceAlternativeTo from './assets/images/09-recommended-resources/open-source-alternative-to.png'
import FullStackCafe from './assets/images/09-recommended-resources/full-stack-cafe.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Introduction />
    <TitleSection title = 'Professional Experience' />
    <Job image={Freelancer} title={'Independent software developer'} period={'Aug 2023 - Feb 2024'} role={'Full Stack Developer & Machine Learning Engineer'} description={'Software developer for diverse clients in web, desktop, and mobile environments.<br />Analyst and data scientist for client projects employing Machine Learning techniques.'}/>
    <Job image={HermesCorp} title={'HermesCorp'} period={'Feb 2022 - Apr 2023'} role={'BackEnd Developer'} description={'Development of REST API backend applications with Node.js, storing data in MongoDB and PostgreSQL, and deploying them on AWS Linux servers using Docker.'}/>

    <TitleSection title = 'Studies' />
    <Study image={Coursera} institution={'Coursera'} period={'Jul 2023 - Sep 2023'} study={'Google Data Analytics Certificate'} description={'Final project centered on analyze the correlation between three-point shot efficiency and percentage of victories in the NBA using Python and Matplotlib.'}/>
    <Study image={UAA} institution={'Aguascalientes Autonomous University'} period={'Jul 2018 - Jun 2023'} study={'Intelligent Computing Engineer'} description={"Undergraduate thesis on the implementation of supervised learning algorithms to classify neuronal activity in movement intention through a brain-computer interface.<br />Five-time awardee of honorable mention in ACM/ICPC participations in 2018, 2019, and 2023.<br />Six-time best grade of a semester (1st, 2nd, 3rd, 4th, 5th and 10th).<br />Class of 2023's best grade with a performance of 9.667 (3.87 GPA equivalent).<br />Graduated with honors after publishing my undergraduate thesis in the CONTIE 2023 journal."}/>
    <Study image={BI} institution={'International Baccalaureate'} period={'Aug 2016 - May 2018'} study={'International Baccalaureate Diploma Programme'} description={'Graduated from the Diploma Programme in the May 2018 examination session with 28 points:<br />Spanish A: Literature (HL): 5.<br />English B (HL): 5.<br />History of America (Spanish) (HL): 4.<br />Biology (Spanish) (SL): 4.<br />Chemistry (Spanish) (SL): 3.<br />Mathematics (Spanish) (SL): 5.<br />Extended Essay in World Studies (Spanish): B.<br />Theory of Knowledge: B.'}/>
    <Study image={BachUAA} institution={'High School Center of the Aguascalientes Autonomous University'} period={'Jul 2015 - Jun 2018'} study={'General High School Studies'} description={'Grade performance of 9.5 (3.84 GPA equivalent).<br />Fifth place and awardee of honorable mention in final phase of the 2017 Mathematics Mexican Olimpiad, region Aguascalientes.'}/>

    <TitleSection title = 'Technologies' />
    <TechnologyChapter />

    <TitleSection title = 'My Projects' />
    <div className='MyProjects'>
      <Project name={'UAA ICI: Thesis'} image={UAAICIThesis} technologies={'Python, Sci-kit learn, Emotiv API, Cykit, OpenViBE'} description={'Undergraduate thesis repository of my career ICI studied at the UAA about applying classification algorithms for movement intention comparing Support Vector Machine, Random Forest and Naive Bayes models.'} url={'https://github.com/Joul24py/UAA-ICI-Thesis'}/>
      <Project name={'UAA ICI: Programming Exercises'} image={UAAICI} technologies={'C, C++, C#, Java, Python, R, HTML, CSS, JavaScript, PHP, MySQL, ASM, PROLOG, Lisp, Kotlin'} description={'Programming exercises done while studying my undergraduate: Intelligent Computing Engineer at the Aguascalientes Autonomous University'} url={'https://github.com/Joul24py/UAA-ICI'}/>
      <Project name={'Kaggle: CommonLit competition'} image={KaggleCommonlit} technologies={'Python, Jupyter Notebook, Sci-kit learn'} description={'Personal approach of the Kaggle competition proposed by CommonLit to assess automatically summaries written by students in grades 3-12.'} url={'https://github.com/Joul24py/Kaggle-CommonLit'}/>
      <Project name={'Daily Coding Problem'} image={DailyCodingProblem} technologies={'Python'} description={'Personal solutions of the daily problems that the Daily Coding Problem website recommends.'} url={'https://github.com/Joul24py/DailyCodingProblem'}/>
      <Project name={'Brackley Headquarters'} image={BrackleyHQ} technologies={'C++'} description={'C++ project for memory and process management putting into practice buddy system and round robin algorithms.'} url={'https://github.com/Joul24py/Brackley-HQ'}/>
      <Project name={'The First CRUD'} image={TheFirstCRUD} technologies={'HTML, CSS, JavaScript, Electron.js'} description={'Vanilla frontend project to store users in the local PC storage compiling the web app into desktop app using Electron.js.'} url={'https://github.com/Joul24py/The-First-CRUD'} />
    </div>

    <TitleSection title = 'Learning Projects' />
    <div className='LearningProjects'>
      <Project name={'12 Data Science Projects'} image={TwelveDSProjects} technologies={'Python, Sci-kit learn, Streamlit'} description={'Twelve projects proposed by The Data Professor in freeCodeCamp to learn data science using Python and streamlit.'} url={'https://github.com/Joul24py/FCC-12Projects-DS'}/>
      <Project name={'Kaggle: Titanic Machine Learning'} image={KaggleTitanicML} technologies={'Python, Sci-kit learn'} description={'Kaggle proposed project to apply machine learning and predict if certaing participants would survive to the Titanic disaster.'} url={'https://github.com/Joul24py/Kaggle-TitanicML'}/>
      <Project name={'Vue.js To-do App'} image={VuejsTodoApp} technologies={'HTML, CSS, Vue.js'} description={'Web app project where it is developed a to-do application with Vue.js.'} url={'https://github.com/Joul24py/TodoApp-Vuejs'}/>
      <Project name={'Tkinter projects'} image={TkinterProjects} technologies={'Python, Tkinter'} description={'Projects proposed by the YouTube channel: Code First With Hala in order to learn to build graphical interfaces in Python using Tkinter.'} url={'https://github.com/Joul24py/CFWH-TkinterProjects'}/>
      <Project name={'Three.js tutorial'} image={ThreejsTutorial} technologies={'HTML, CSS, JavaScript, Three.js'} description={'Project following a video tutorial about learning to use the three.js library.'} url={'https://github.com/Joul24py/Threejs-Tutorial'}/>
      <Project name={'AppCitas-Front'} image={AppCitasFront} technologies={'HTML, CSS, Angular, TypeScript'} description={'Dating web app project to learn frontend professional software development.'} url={'https://github.com/Joul24py/AppCitas-Front'}/>
      <Project name={'AppCitas-Back'} image={AppCitasBack} technologies={'C#, .NET, SQLite'} description={'Dating web app project to learn backend professional software development.'} url={'https://github.com/Joul24py/AppCitas'}/>
    </div>

    <TitleSection title = 'Projects to get to know me better' />
    <div className='ProjectsGetToKnowMe'>
      <Project name={'My Way'} image={MiCamino} technologies={'HTML, CSS, JavaScript'} description={'My academic portfolio where I store all of my notes that I did during classes that I took since high school until university (spanish only).'} url={'https://joul24py.github.io/'}/>
    </div>

    <TitleSection title = 'Pseudo-Resume' />
    <TitleSection title = 'Recommended resources' />
    <div className='RecommendedResources'>
      <Project name={'Learn Git Branching'} image={LearnGitBranching} technologies={''} description={'Website to practice and visually see what Git commands were doing. From the simplest commands to the most complex ones.'} url={'https://learngitbranching.js.org/?locale=en'}/>
      <Project name={'React GG'} image={ReactGG} technologies={''} description={'Website to learn the React library in a very didactic way.'} url={'https://react.gg/'}/>
      <Project name={'DevDocs'} image={DevDocs} technologies={''} description={'Website that stores a lot of documentation from different programming languages.'} url={'https://devdocs.io/'}/>
      <Project name={'Online Python Tutor'} image={OnlinePythonTutor} technologies={''} description={'Visual compiler and debugger for various programming languages that allows to visually see what is being proposed in the code.'} url={'https://pythontutor.com/'}/>
      <Project name={'Free for Developers'} image={FreeForDev} technologies={''} description={'Website that compiles a wide collection of free resources for developers of various types: APIs, data, CI/CD, authentication, security, remote desktop tools, email tools, among many others.'} url={'https://free-for.dev/#/'}/>
      <Project name={'UX Collective'} image={UXCollective} technologies={''} description={'Collection of articles and examples about the best UX practices.'} url={'https://uxdesign.cc/'}/>
      <Project name={'Open Source Alternative To'} image={OpenSourceAlternativeTo} technologies={''} description={'Collection of open-source tools for performing different processes.'} url={'https://www.opensourcealternative.to/'}/>
      <Project name={'Full Stack Cafe'} image={FullStackCafe} technologies={''} description={'Website for practicing interview questions and job application assessments.'} url={'https://www.fullstack.cafe/'}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();