// importiamo il contesto globale e la parte REact di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from '../context/GlobalContest'

// import componente Card nel listato
import CreazioneCard from "../components/CreazioneCard";

export default function HomePage() {
    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { card } = useContext(GlobalContext);
    

    return (
        <main>
            {  
                card.map((film) => (
                    <CreazioneCard key={film.id} film={film} />
                ))
            }
        </main>
    );
}