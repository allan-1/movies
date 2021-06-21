import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
                <Link className='links'  to='/'>
                    <h3>Allan Movies</h3>
                </Link>
                <ul className='nav-links'>
                    <div className='dropdown'>
                        <li>Movies </li>
                        <div className="dropdown-content">
                            <Link className='links' to='/movies'><li>Popular</li></Link>
                            <Link className='links' to='/nowplaying'><li>Now Playing</li></Link>
                            <Link className='links' to='/upcoming'><li>Upcoming</li></Link>
                            <Link className='links' to='/toprated'><li>Top Rated</li></Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <li>Tv Shows </li>
                        <div className='dropdown-content'>
                            <Link className='links' to='/tvs'><li>Popular</li></Link>
                            <Link className='links' to='/airing'><li>Airing Today</li></Link>
                            <Link className='links' to='/ontv'><li>On TV</li></Link>
                            <Link className='links' to='/toprated'><li>Top Rated</li></Link>
                        </div>
                    </div>
                    <Link className='links' to='/trending'>
                        <li>Trending </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
