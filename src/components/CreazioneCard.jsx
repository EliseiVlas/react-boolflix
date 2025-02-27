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
                <h1>{film.title || film.name}</h1>
                <h2>{film.original_title || film.original_name}</h2>
                {countryCode ? (
                    <Flag code={countryCode} style={{ width: "30px", height: "20px" }} />
                ) : (
                    <span>{film.original_language}</span> // Se non trova il codice, mostra un'icona globale
                )}
                <br />
                <span>{film.vote_average}</span>
            </div>
        </>
    )

}

export default CreazioneCard