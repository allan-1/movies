import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Trending from './components/Trending'
import MovieItem from './components/MovieItem'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import NowPlaying from './components/NowPlaying'
import Upcoming from './components/Upcoming';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopRated from './components/TopRated';
import TvItem from './components/TvItem';
import TvAir from './components/TvAir';
import Footer from './components/Footer';

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
