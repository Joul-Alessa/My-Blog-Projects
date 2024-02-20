import personalPicture from '../assets/images/FotoPerfil.jpg'
import './HeaderMain.css';

function HeaderMain()
{
  return (
    <header className="HeaderMain">
        <a href="https://joulessa.tech/">
            <img src={personalPicture} className="HeaderMain-Personal" alt="Return to Yggdrasil" />

            <p>Joul ESSA</p>
        </a>
    </header>
  );
}

export default HeaderMain;