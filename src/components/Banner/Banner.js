import React from 'react'
import categories, { getMovies } from '../../api'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = React.useState({})

    const fetchRandomMovie = async (_path) => {
        try {
            const data = await getMovies(categories.find(
                (category) => (category.name === 'netflixOriginals')
            ).path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length)
            setMovie(movies[randomIndex])
        } catch (error) {
            console.log(error)
        }
    }


    React.useEffect(() => {
        fetchRandomMovie();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.subtr(0, n-1) + '...' : str;
    }
    return (
        <header className='banner-container' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            roundPosition: 'center-center',
            boxsizing: 'border-box',
            display: 'block',
            maxwidth: '100%',
        }}>
            <div className='banner-content'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-button-container'>
                    <button className='banner-button'>Assistir</button>
                    <button className='banner-button'>Minha Lista</button>
                </div>
                <div className='banner-description'>
                    <div>{truncate(movie?.overview)}</div>
                </div>
            </div>

        </header>
    );
}

export default Banner