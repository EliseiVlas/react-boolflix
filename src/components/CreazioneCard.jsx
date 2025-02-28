import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Flag from 'react-world-flags'

const languageToCountry = {
    en: "GB", 
    it: "IT", 
    fr: "FR", 
    de: "DE", 
    es: "ES", 
    ja: "JP", 
    ko: "KR", 
    zh: "CN", 
    ru: "RU", 
    pt: "PT", 
    nl: "NL",
    pl: "PL",
    da: "DA",
    fa: "FA"
};
const CreazioneCard = (props) => {

    // destructuring dell'oggetto props
    const { film } = props;

     // Trova il codice paese corrispondente alla lingua
     const countryCode = languageToCountry[film.original_language];

    return (
        <>
            <div className='cardItem'>
                <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt={film.title || film.name} />
                <div className="none">
                    <span className="bold">{"Titolo: "}</span>
                    <span>{film.title || film.name}</span>
                    <br />
                    <span className="bold">{"Titolo originale: "}</span>
                    <span>{film.original_title || film.original_name}</span>
                    {countryCode ? (
                        <Flag code={countryCode} style={{ width: "30px", height: "20px" }} />
                    ) : (
                        <span>{film.original_language}</span> // Se non trova il codice, mostra un'icona globale
                    )}
                    <br />
                    <span className="bold">{"Voto: "}</span>
                    <span>
                    {Math.ceil(film.vote_average / 2) >= 1 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {Math.ceil(film.vote_average / 2) >= 2 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {Math.ceil(film.vote_average / 2) >= 3 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {Math.ceil(film.vote_average / 2) >= 4 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {Math.ceil(film.vote_average / 2) >= 5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    </span>
                    <br />
                    <span className="bold">{"Overview: "}</span>
                    <span>{film.overview}</span>
                </div>
            </div>
        </>
    )

}

export default CreazioneCard