import './Job.css';

function Job({image, title, period, role, description})
{
  return (
    <div className="Job">
      <div className="Job-Image">
        <div className="Job-Center-Image">
          <img src={image} alt={title + ' logo'} />
        </div>
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