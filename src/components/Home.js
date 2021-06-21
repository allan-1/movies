import React from 'react'
import Discover from './Discover'
import Trending from './Trending'
import './App.css';
import Search from './Search';

function Home() {
    

    return (
        <div>
            <Search/>
            <div className="discover_home">
                <Discover/>
            </div>
            <div className="trending_home">
                <Trending/>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}

export default Home