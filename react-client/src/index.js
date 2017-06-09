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

  }

  handleMovieClick() {
    let url = /*TODO: fill me in*/
    axios
      .get(url)
      .then(
        // TODO: FILL ME IN
      )
      .catch(
        // TODO: FILL ME IN
      )
  }

  handleDisplayAddMovie() {
    // TODO: FILL ME IN
    // ** hint: remember that you cannot directly manipulate state
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
