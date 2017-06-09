import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Navbar from './components/navbar'
import MovieList from './components/movieList'
import AddMovieForm from './components/addMovieForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      displayMovies: false,
      displayAddMovieForm: false
    }
    this.handleMovieClick = this.handleMovieClick.bind(this)
    this.handleDisplayAddMovie = this.handleDisplayAddMovie.bind(this)
  }

  handleMovieClick() {
    let url = 'http://localhost:3000/api/movies'
    axios
      .get(url)
      .then(movies => {
        this.setState({ 
          displayMovies: true,
          displayAddMovieForm: false,
          movies: movies.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleDisplayAddMovie() {
    this.setState({
      displayMovies: false,
      displayAddMovieForm: true
    })
  }

  render() {
    return(
      <div>
        <Navbar 
          handleMovieClick={this.handleMovieClick} 
          handleDisplayAddMovie={this.handleDisplayAddMovie}
        />
        <div>Welcome to Blockbuster</div>
        {this.state.displayMovies ? <MovieList movies={this.state.movies}/> : null}
        {this.state.displayAddMovieForm ? <AddMovieForm /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
