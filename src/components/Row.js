import React from 'react'
import { getMovies } from '../api'

const imageHost = "https://image.tmdb.org/t/p/original";
const Row = ({ title, path }) => {
    const [movies, setMovies] = React.useState([])
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log(data)
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
                {movies?.map((movie)=>{
                    return (
                       <img key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.title}></img> 
                    )
                })}
            </div>
        </div>
    )
}

export default Row;