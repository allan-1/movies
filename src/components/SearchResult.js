/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Search from './Search';

function SearchResult({ match }) {
    const [searches, setSearches] = useState([]);
    useEffect(() => {
        fetchSearches()
    }, [])
    const fetchSearches = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c0921ec673b4e6941354543faa86678d&language=en-US&query=${match.params.name}&page=1&include_adult=false`);
        const search = await data.json();
        setSearches(search.results)
    }
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    return (
        <div>
            <Search/>
            <div className="search_header">
                <h4>Showing results for: { match.params.name}</h4>
            </div>
            <div className="searchcontent">
                {
                    searches.map(search => (
                        <div className="searches">
                        <Link className='search_link' to={`/discover/${search.id}`}>
                            <div key={search.id} className="search_items">
                                <div className="image">
                                    <img src={baseImage + search.poster_path} alt={ search.original_title} width='90px'/>
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        <h3>{search.original_title}</h3>
                                        <p>{ search.release_date}</p>
                                    </div>
                                    <div className="description">
                                        <p>{search.overview.substring(0, 270)} ...</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResult
