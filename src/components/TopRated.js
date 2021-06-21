/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function TopRated() {
    const [toprated, setTopRated] = useState([]);
    const [page, setPage] = useState(1)
    const fetchTopRated = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=${page}`);
        const toprated = await data.json();
        console.log(toprated)
        setPage(toprated.page)
        setTopRated(toprated.results);
    }
    useEffect(() => {
        fetchTopRated()
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
        <div>
            <div className="header">
                <h1>Top Rated</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        toprated.map((toprated) => (
                            <div key={toprated.id} className="trend_items">
                                <Link className='movielink' to={`/discover/${toprated.id}`}>
                                    <img src={baseImage + toprated.poster_path} alt={toprated.id} />
                                    <h4>{toprated.original_title}</h4>
                                    <p className='ratings'><i className="fas fa-star"></i> {toprated.vote_average}</p>
                                </Link>
                                <p>{toprated.release_date}</p>
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

export default TopRated
