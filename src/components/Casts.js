/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

function Casts({movieId}) {
    const [casts, setCasts] = useState([])
    const fetchCast = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c0921ec673b4e6941354543faa86678d&language=en-US`);
        const casts = await data.json();
        setCasts(casts.cast);
    } 
    useEffect(() => {
        fetchCast()
    }, [])
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    return (
        <div className='casts'>
            <div className="cast_header">
                <h1>Casts</h1>
            </div>
            <div className="cast_each">
            {casts.slice(0, 15).map((cast) => (
                <div className='cast' key={cast.id}>
                    {cast.profile_path !== null &&
                        <div>
                            <img src={baseImage + cast.profile_path} alt="" width='150px' />
                            <h3>{cast.name}</h3>
                            <p>{cast.character}</p>
                        </div>}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Casts