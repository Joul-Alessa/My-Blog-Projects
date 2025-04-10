import './TechScroll.css';

function TechScroll({stack})
{
  return (
    <div className='TechScroll'>
      <div>
        {stack.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>

      <div>
        {stack.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>

      <div>
        {stack.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>

      <div>
        {stack.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>

      <div>
        {stack.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>
    </div>
  );
}

export default TechScroll;