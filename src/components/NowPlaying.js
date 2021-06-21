/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NowPlaying() {
    const [nowplaying, setNowPlaying] = useState([]);
    const [page, setPage] = useState(1)
    const fetchNowPlaying = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=${page}`);
        const nowplaying = await data.json();
        setPage(nowplaying.page)
        setNowPlaying(nowplaying.results);
    }
    useEffect(() => {
        fetchNowPlaying()
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
                <h1>Now Playing</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        nowplaying.map((nowplaying) => (
                            <div key={nowplaying.id} className="trend_items">
                                <Link className='movielink' to={`/discover/${nowplaying.id}`}>
                                    <img src={baseImage + nowplaying.poster_path} alt={nowplaying.id} />
                                    <h4>{nowplaying.original_title}</h4>
                                    <p className='ratings'><i className="fas fa-star"></i> {nowplaying.vote_average}</p>
                                </Link>
                                <p>{nowplaying.release_date}</p>
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

export default NowPlaying
