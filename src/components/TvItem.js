/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

function TvItem({ match }) {
    const [item, setItem] = useState({})
    useEffect(() => {
        fetchItem()
    }, [match])
    const fetchItem = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=c0921ec673b4e6941354543faa86678d&language=en-US`);
        const tv = await data.json();
        setItem(tv)
    }
    const baseImage = 'https://image.tmdb.org/t/p/w300'    
    return (
        <div>
            <div className='movie_item'>
                <div className="movie_image">
                    <img src={baseImage+item.poster_path} alt=""/>
                </div>
                <div className="contentpart">
                    <div className="top">
                        <h1 className='title'>{item.original_title}</h1>
                        <div className="top_details">
                            {item.genres !== undefined && item.genres.map((genre) => (
                                <div key={genre.id}>
                                    <p>{genre.name }, </p>
                                </div>
                            ))}
                            
                        </div>
                        <p className="ratings"><i className="fas fa-star fa-1x"></i> {item.vote_average} /10</p>
                        <p className='tagline'>{item.tagline }</p>
                        {/* <meter id='rating' value='0.5'>50%</meter> */}
                        <div className="overview">
                            <h2>Overview</h2>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default TvItem
