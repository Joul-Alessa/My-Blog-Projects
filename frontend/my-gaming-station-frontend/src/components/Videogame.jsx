import './Videogame.css'
import { Link } from "react-router-dom";

function Videogame({data})
{
  return (
    <div className="Videogame">
      <Link to={"/" + data.slug}>
        <img src={"http://localhost:1337" + data.logo.url} className="Videogame-Picture" alt={data.name + " illustration"} />
        <p>{data.name}</p>
      </Link>
    </div>
  );
}

export default Videogame;