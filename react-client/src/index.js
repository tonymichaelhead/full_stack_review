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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  handleMovieClick() {
    if (!this.state.displayMovies) {
      this.getMovies();
    } else {
      this.setState({ displayMovies: false });
    }
  }

  getMovies() {
    let url = '/api/movies'
    axios
      .get(url)
        .then(results => {
          console.log(results.data);
          this.setState({ movies: results.data, displayMovies: true });
        })
        .catch(err => {
          console.log(err);
        })
  }

  handleFormSubmit() {
    let url = '/api/movies'
    axios
      .post(url)
        .then(results => {
          console.log('successfully POSTED');
          this.getMovies();
        })
        .catch(err => {
          console.log(err);
        })
  }

  handleDisplayAddMovie() {
    this.setState({ displayAddMovieForm: !this.state.displayAddMovieForm });
  }

  componentDidMount(){
    this.getMovies();
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
        {this.state.displayAddMovieForm ? <AddMovieForm handleFormSubmit={this.handleFormSubmit}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
