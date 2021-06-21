/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Videos from './Videos'
import '../App.css';
import Casts from './Casts';
import Recomedations from './Recomedations';

function MovieItem({ match }) {
    const [item, setItem] = useState({})
    useEffect(() => {
        fetchItem()
    }, [match])
    const fetchItem = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=c0921ec673b4e6941354543faa86678d&language=en-US`);
        const movie = await data.json();
        setItem(movie)
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
                        <meter id='rating' value={item.vote_average / 10}>{item.vote_average * 10}%</meter>
                        <p className='tagline'>{item.tagline }</p>
                        <div className="overview">
                            <h2>Overview</h2>
                            <p>{item.overview}</p>
                            <a className="dlinks" target="_blank" rel="noreferrer" href={`https://thepiratebay10.org/search/${item.original_title}/1/99/0`}><i class="fas fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Casts movieId={match.params.id}/>
            <Videos moviedId={match.params.id} />
            <Recomedations movieid={match.params.id }/>
        </div>
    )
}
export default MovieItem
