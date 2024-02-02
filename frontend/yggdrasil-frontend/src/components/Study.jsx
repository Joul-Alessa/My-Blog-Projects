import './Study.css';

function Study({image, institution, period, study, description})
{
  return (
    <div className="Study">
      <div className="Study-Image">
        <div className="Study-Center-Image">
          <img src={image} alt={institution + ' logo'} />
        </div>
      </div>

      <div className="text">
        <p className='Study-Title'>{institution}</p>
        <p className='Study-Period'>{period}</p>
        <p className='Study-Role'>{study}</p>
        <p className='Study-Description'>{description}</p>
      </div>
    </div>
  );
}

export default Study;