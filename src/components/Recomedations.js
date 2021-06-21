/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Recomedations({ movieid }) {
    const [recommendation, setRecommendation] = useState([]);
    const fetchRecommendation = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=1`)
        const recommendation = await data.json()
        setRecommendation(recommendation.results)
        console.log(recommendation.results)
    }
    useEffect(() => {
        fetchRecommendation()
    }, [])
    const Reload = () => {
        window.location.reload()
    }
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    return (
        <div className='recoms'>
            <div className="recoms_header">
                <h1>Recommendations</h1>
            </div>
            <div className="recom_each">
            {recommendation.map((recom) => (
                <div className='recom' onClick={Reload}>
                    {
                        recom.poster_path !== null &&
                        <Link className='movielink' to={`/discover/${recom.id}`}>
                        <img src={baseImage + recom.poster_path} alt="" />
                        <div className='recom_details'>
                            <h3>{recom.title}</h3>
                            <p className='rating'><i className="fas fa-star"></i> {recom.vote_average}</p>
                            </div>
                        </Link>                        
                    }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recomedations
