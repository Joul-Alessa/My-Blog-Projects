import './Videogame.css'

function Videogame({data})
{
  return (
    <div className="Videogame">
      <a href='#'>
        <img src={"http://localhost:1337" + data.attributes.logo.data.attributes.url} className="Videogame-Picture" alt={data.attributes.name + " illustration"} />
        <p>{data.attributes.name}</p>
      </a>
    </div>
  );
}

export default Videogame;