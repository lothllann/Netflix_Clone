import movieTrailer from 'movie-trailer';
import React from 'react'
import ReactPlayer from 'react-player';
import { getMovies } from '../../api'
import './Row.css'

const imageHost = "https://image.tmdb.org/t/p/original";
const Row = ({ title, path, isLarge }) => {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState('');

    const handleOnClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
                .then((url) => {
                    setTrailerUrl(url)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    };

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results)
        } catch (error) { console.log(error) }
    };

    React.useEffect(() => {
        fetchMovies(path);
    }, [path])

    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>
                {movies?.map((movie) => {
                    return (
                        <img
                            className={`movie-card ${isLarge && 'movie-card-large'}`}
                            onClick={() => handleOnClick(movie)}
                            key={movie.id}
                            src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
                            alt={movie.title}>
                        </img>
                    )
                })}
            </div>
            {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
        </div>
    )
}

export default Row;