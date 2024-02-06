import './Project.css'

function Project({name, image, technologies, description, url})
{
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className="Project">
        <div className="Project-Image">
          <div className="Project-Center-Image">
            <img src={image} alt={name + ' logo'} />
          </div>
        </div>

        <div className="text">
          <p className='Project-Title'>{name}</p>
          <p className='Project-Techs'>{technologies}</p>
          <p className='Project-Description' dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
      </div>
    </a>
  );
}

export default Project;