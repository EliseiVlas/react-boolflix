// importiamo il contesto globale e la parte REact di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from '../context/GlobalContest'

// import componente Card nel listato
import CreazioneCard from "../components/CreazioneCard";

export default function HomePage() {
    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { card, cardSerie } = useContext(GlobalContext);
    console.log(cardSerie);
    

    return (
        <main>
            <div className="titolo"><h1>Film</h1></div>
            <div className="main">
                {card.map((film) => (
                    <CreazioneCard key={film.id} film={film} />
                ))}
            </div>

            <div className="titolo"><h1>Serie TV</h1></div> 
            <div className="main">
                {cardSerie.map((film) => (
                    <CreazioneCard key={film.id} film={film} />
                ))}
            </div>
        </main>
    );
}