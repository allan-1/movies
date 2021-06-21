/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Upcoming() {
    const [upcoming, setUpcoming] = useState([]);
    const [page, setPage] = useState(1)
    const fetchUpcoming = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=${page}`);
        const upcoming = await data.json();
        console.log(upcoming)
        setPage(upcoming.page)
        setUpcoming(upcoming.results);
    }
    useEffect(() => {
        fetchUpcoming()
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
                <h1>Upcoming</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        upcoming.map((upcoming) => (
                            <div key={upcoming.id} className="trend_items">
                                <Link className='movielink' to={`/discover/${upcoming.id}`}>
                                    <img src={baseImage + upcoming.poster_path} alt={upcoming.id} />
                                    <h4>{upcoming.original_title}</h4>
                                    <p className='ratings'><i className="fas fa-star"></i> {upcoming.vote_average}</p>
                                </Link>
                                <p>{upcoming.release_date}</p>
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

export default Upcoming
