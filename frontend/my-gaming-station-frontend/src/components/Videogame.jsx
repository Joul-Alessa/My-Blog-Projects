import './Videogame.css'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Videogame({data})
{
  const { t, i18n } = useTranslation();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  return (
    <div className="Videogame">
      <Link to={"/" + data.slug}>
        <img src={backendUrl + data.logo.url} className="Videogame-Picture" alt={data.name + " illustration"} />
        <p>{data.name}</p>
      </Link>
    </div>
  );
}

export default Videogame;