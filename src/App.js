import React from 'react'
import './App.css';
import Nav from './Nav'
import Movies from './Movies'
import TvShows from './TvShows'
import Trending from './Trending'
import MovieItem from './MovieItem'
import Home from './Home'
import SearchResult from './SearchResult'
import NowPlaying from './NowPlaying'
import Upcoming from './Upcoming';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopRated from './TopRated';
import TvItem from './TvItem';
import TvAir from './TvAir';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' component={Movies} />
          <Route path='/tvs' exact component={TvShows} />
          <Route path='/nowplaying' component={NowPlaying} />
          <Route path='/upcoming' component={Upcoming }/>
          <Route path='/trending' component={Trending} />
          <Route path='/toprated' component={TopRated}/>
          <Route path='/discover/:id' component={MovieItem} />
          <Route path='/search/:name' component={SearchResult} />
          <Route path='/tvs/:id' component={TvItem} />
          <Route path='/airing' component={TvAir}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
