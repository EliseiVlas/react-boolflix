const CreazioneCard = (props) => {

    // destructuring dell'oggetto props
    const { film } = props;

    return (
        <>
            <div className='cardItem'>
            <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt={film.title || film.name} />
                <h1>{film.title || film.name}</h1>
                <h2>{film.original_title || film.original_name}</h2>
                <span>{film.original_language}</span>
                <br />
                <span>{film.vote_average}</span>
            </div>

        </>
    )

}

export default CreazioneCard