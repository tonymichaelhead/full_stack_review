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
    // TODO: fill in your function binds (if necessary)
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleDisplayAddMovie = this.handleDisplayAddMovie.bind(this);
  }

  handleMovieClick() {
    let url = '/api/movies'
    axios
      .get(url)
      .then(
        // TODO: FILL ME IN
        //update this.state.movies with fetched data
        
      )
      .catch(err => {
        console.log(err);
      })
  }

  handleDisplayAddMovie() {
    this.setState({ displayAddMovieForm: !this.state.displayAddMovieForm });
  }

  render() {
    return(
      <div>
        <Navbar 
          handleMovieClick={this.handleMovieClick} 
          handleDisplayAddMovie={this.handleDisplayAddMovie}
        />
        <div>Welcome to Blockbuster</div>
        {this.state.displayMovies ? <MovieList /> : null}
        {this.state.displayAddMovieForm ? <AddMovieForm /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
