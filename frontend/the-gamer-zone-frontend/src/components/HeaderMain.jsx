import personalPicture from '../assets/images/FotoPerfil.jpg'
import './HeaderMain.css';

function HeaderMain()
{
  return (
    <header className="HeaderMain">
        <a href="https://joul24py.github.io/">
            <img src={personalPicture} className="HeaderMain-Personal" alt="Return to Yggdrasil" />

            <p>Joul ESSA</p>
        </a>
    </header>
  );
}

export default HeaderMain;