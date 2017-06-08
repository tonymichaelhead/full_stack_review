import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Navbar from './components/navbar'
import MovieList from './components/movieList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      displayMovies: false
    }
    this.handleMovieClick = this.handleMovieClick.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
  }

  handleMovieClick() {
    let url = 'http://localhost:3000/api/movies'
    axios
      .get(url)
      .then(movies => {
        this.setState({ 
          displayMovies: true,
          movies: movies.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleAddMovie() {

  }

  render() {
    return(
      <div>
        <Navbar 
          handleMovieClick={this.handleMovieClick} 
          handleAddMovie={this.handleAddMovie}
        />
        <div>Welcome to Blockbuster</div>
        {this.state.displayMovies ? <MovieList movies={this.state.movies}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
