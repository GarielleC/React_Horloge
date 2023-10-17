import { useState, useEffect } from 'react';
import './Horloge.scss';


// Création d'une horloge numérique
function Clock() {
    // État local pour stocker l'heure actuelle
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Nettoie l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.toLocaleDateString(); // permet d'obtenir la date complète

    return (
        <div>
            <h1>Horloge</h1>
            <p>{date}</p>
            <p>
                {hours < 10 ? `0${hours}` : hours}:
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </p>
        </div>
    );
}

export default Clock;
