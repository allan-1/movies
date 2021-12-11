import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetchTrending()
    }, [])
    
    const fetchTrending = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&page=1');
        const trending = await data.json();
        setTrending(trending.results);
    }
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    return (
        <div className='trending'>
            <div className="trendingHeader">
                <h1>Trending</h1>
            </div>
            <div className="trending_content">
                {
                    trending.map((trend) => (
                        <div key={trend.id} className="trend_items">
                            <Link className='movielink' to={`/discover/${trend.id}`}>
                                <img src={baseImage + trend.poster_path} alt={trend.id} />
                                <h4>{trend.original_title}</h4>
                                <p className='ratings'><i className="fas fa-star"></i> {trend.vote_average}</p>
                            </Link>
                            <p>Release Date: {trend.release_date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Trending;
