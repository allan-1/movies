import React, { useState, useEffect } from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function Discover() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchDiscover()
    }, [])

    const fetchDiscover = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1');
        const movies = await data.json();
        setMovies(movies.results)
    }
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    return (
        <div className='discover'>
            <div className="discoverheader">
                <h1>Discover</h1>
            </div>'
            <div className="discover_contents">
                {movies.map(movie => (
                    <div className='movies_discover' key={movie.id}>
                        <Link className='movielink' to={`/discover/${movie.id}`}>
                            <img src={baseImage+movie.poster_path} alt={movie.id}/>
                            <h4>{movie.original_title} </h4>
                            <p className='ratings'><i className="fas fa-star"></i> {movie.vote_average}</p>
                        </Link>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover
