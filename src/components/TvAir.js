/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function TvAir() {
    const [movie, setmovie] = useState([]);
    const [page, setPage] = useState(1)
    const fetchMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=${page}`);
        const movie = await data.json();
        setPage(movie.page)
        setmovie(movie.results);
        console.log(movie)
    }
    useEffect(() => {
        fetchMovie()
    }, [page])
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    function next(){
        setPage(page + 1)
    }
    function previous() {
        if (page !== 1) {
            setPage(page - 1)
        }
    } 
    return (
       <div className='popular'>
            <div className="header">
                <h1>Airing on TV</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        movie.map((movie) => (
                            <div key={movie.id} className="trend_items">
                                <Link className='movielink' to={`/tvs/${movie.id}`}>
                                    <img src={baseImage + movie.poster_path} alt={movie.id} />
                                    <h4>{movie.name}</h4>
                                    <p className='ratings'><i className="fas fa-star"></i> {movie.vote_average}</p>
                                </Link>
                                <p>{movie.release_date}</p>
                            </div>
                        ))                    
                    } 
                </div>
                <div className="btns">
                    <button className='buttons' onClick={previous}><i className="fas fa-chevron-left fa-2x"></i></button>
                    <button className='buttons' onClick={next}><i className="fas fa-chevron-right fa-2x"></i></button>
                </div>
            </div>
        </div>
    )
}

export default TvAir
