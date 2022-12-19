import React from 'react'
import categories, { getMovies } from '../api'
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
    return (
        <header className='banner-container' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            roundPosition: 'center-center'

        }}>

        </header>
    )
}

export default Banner