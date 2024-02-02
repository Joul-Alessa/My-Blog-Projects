import './Job.css';

function Job({image, title, period, role, description})
{
  return (
    <div className="Job">
      <div className="Job-Image">
        <img src={image} alt='HermesCorp logo' />
      </div>

      <div className="text">
        <p className='Job-Title'>{title}</p>
        <p className='Job-Period'>{period}</p>
        <p className='Job-Role'>{role}</p>
        <p className='Job-Description'>{description}</p>
      </div>
    </div>
  );
}

export default Job;