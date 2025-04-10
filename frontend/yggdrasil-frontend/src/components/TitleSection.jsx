import './TitleSection.css';

function TitleSection({title})
{
  return (
    <div className="Section">
      <div className='Section-Title'>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default TitleSection;