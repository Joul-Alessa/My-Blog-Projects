import './Videogame.css'

function Videogame({picture, name})
{
    return (
        <div className="Videogame">
            <a href='#'>
                <img src={require("../assets/images/" + picture)} className="Videogame-Picture" alt={name + " illustration"} />
                <p>{name}</p>
            </a>
        </div>
    );
}

export default Videogame;