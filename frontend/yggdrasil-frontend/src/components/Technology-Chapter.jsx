import './Technology-Chapter.css';
import TechScroll from './TechScroll';

function TechnologyChapter()
{
  return (
    <div className="Tech-Chapter-Container">
      <div className="Tech-Content">
        <p>Machine Learning Engineer & Data Scientist</p>
        <TechScroll stack={['Python', 'R', 'Tableau', 'Power BI', 'Sci-kit Learn', 'Tensorflow', 'Keras', 'Streamlit', 'PostgreSQL', 'MongoDB']}/>
        <TechScroll stack={['Web Scrapping', 'PCA', 'Bayesian Statistics', 'NLP', 'Text Mining', 'Deep Learning', 'Computer Vision']}/>

        <p>Full Stack Web Development</p>
        <TechScroll stack={['Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'C#']}/>
        <TechScroll stack={['Agile methodology', 'Scrum methodology', 'Kanban methodology']}/>

        <p>Desktop Development</p>
        <TechScroll stack={['C++', 'Java', 'C#', 'Python', 'Electron.js']}/>

        <p>Mobile Development</p>
        <TechScroll stack={['Java', 'Kotlin', 'React Native', 'Ionic Framework', 'Flutter']}/>
      </div>
    </div>
  );
}

export default TechnologyChapter;