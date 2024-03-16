import './Introduction.css';
import ImageMe from '../assets/images/Me.jpg';
import GitHub from '../assets/images/01-socials/github.png';
import LinkedIn from '../assets/images/01-socials/linkedin.png';
import Kaggle from '../assets/images/01-socials/kaggle.png';
import GoogleDev from '../assets/images/01-socials/google-dev.png';
import HFace from '../assets/images/01-socials/hugging-face.png';
import Orcid from '../assets/images/01-socials/orcid.png';

function Introduction()
{
  return (
    <div className='Introduction-GridWrapper'>
      <div className='Introduction-PersonalPicture'>
        <div className='Inner-GridWrapper'>
          <img src={ImageMe} alt='Myself'/>
        </div>
      </div>

      <div className='Introduction-Greetings'>
        <div className='Inner-GridWrapper'>
          <p className='normalText'>Hi, I'm</p>
          <p className='highlightedText'>Joel Alejandro Espinoza Sánchez</p>
          <div className='socialMediaImages'>
            <a href='https://github.com/Joul24py' target='_blank' rel='noreferrer'>
              <img src={GitHub} alt='GitHub profile'/>
            </a>
            <a href='https://www.linkedin.com/in/joel-alejandro-espinoza-sanchez-b533a3253/' target='_blank' rel='noreferrer'>
              <img src={LinkedIn} alt='LinkedIn profile'/>
            </a>
            <a href='https://www.kaggle.com/joulespinozasanchez' target='_blank' rel='noreferrer'>
              <img src={Kaggle} alt='Kaggle profile'/>
            </a>
            <a href='https://developers.google.com/profile/u/115558684963200671859?hl=es-419&utm_source=developers.google.com' target='_blank' rel='noreferrer'>
              <img src={GoogleDev} alt='Google Developer profile'/>
            </a>
            <a href='https://huggingface.co/Joul24py' target='_blank' rel='noreferrer'>
              <img src={HFace} alt='Hugging Face profile'/>
            </a>
            <a href='https://orcid.org/0009-0004-2139-5109' target='_blank' rel='noreferrer'>
              <img src={Orcid} alt='OrcID profile'/>
            </a>
          </div>
        </div>
      </div>

      <div className='Introduction-PagePresentation'>
        <div className='Inner-GridWrapper'>
          <p className='normalText'>And this is my</p>
          <p className='highlightedText'>Yggdrasil tree</p>
        </div>
      </div>

      <div className='Introduction-PersonalResume'>
        <div className='Inner-GridWrapper'>
          <p className='normalText'>Computer Science Engineer graduated at the Aguascalientes Autonomous University.</p>
          <p className='normalText'>Work experience as backend developer with Node.js, MongoDB and Docker.</p>
          <p className='normalText'>Passionate of data science and artificial intelligence topics with an undergraduate thesis done applying machine learning insights.</p>
        </div>
      </div>

      <div className='Introduction-PageResume'>
        <div className='Inner-GridWrapper'>
          <p className='normalText'>This is my website. My portfolio of projects that I have developed: My Yggdrasil tree. The project that serves as the connection between all my projects. All my projects exist around this website.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;