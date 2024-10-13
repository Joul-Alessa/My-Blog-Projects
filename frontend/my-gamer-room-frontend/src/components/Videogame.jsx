import './Videogame.css'
import { Link } from "react-router-dom";

function Videogame({data})
{
  return (
    <div className="Videogame">
      <Link to={"/" + data.attributes.slug}>
        <img src={"http://localhost:1337" + data.attributes.logo.data.attributes.url} className="Videogame-Picture" alt={data.attributes.name + " illustration"} />
        <p>{data.attributes.name}</p>
      </Link>
    </div>
  );
}

export default Videogame;