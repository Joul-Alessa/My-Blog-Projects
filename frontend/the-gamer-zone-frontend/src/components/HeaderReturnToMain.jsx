import mainPicture from '../assets/images/_74f7bd92-10a3-4116-a066-62017a085bb0.jpeg'
import './HeaderReturnToMain.css';
import { Link } from "react-router-dom";

function HeaderMain()
{
  return (
    <header className="HeaderReturnToMain">
      <Link to={"/"}>
        <img src={mainPicture} className="HeaderReturnToMain-Picture" alt="Return to the main page of The Gamer Zone" />

        <p>The Gamer Zone</p>
      </Link>
    </header>
  );
}

export default HeaderMain;