import mainPicture from '../assets/images/_74f7bd92-10a3-4116-a066-62017a085bb0.jpeg'
import './Introduction.css'

function Introduction()
{
    return (
        <div className="Introduction">
            <div className="Introduction-Text">
                <h1>The Gamer Zone</h1>
                
                <p>This is my gaming corner</p>
            </div>

            <img src={mainPicture} className="Introduction-Picture" alt="Gaming illustration" />
        </div>
    );
}

export default Introduction;