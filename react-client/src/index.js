import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Navbar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      displayMovies: false
    }
    this.handleMovieClick = this.handleMovieClick.bind(this)
    this.handleUserClick = this.handleUserClick.bind(this)
  }

  handleMovieClick() {
    let url = 'http://localhost:3000/api/movies'
    axios
      .get(url)
      .then(movies => {
        this.setState({ 
          displayMovies: true,
          movies: movies
        })
      })
  }

  render() {
    return(
      <div>
        <Navbar handleMovieClick={this.handleMovieClick} />
        <div>Welcome to Blockbuster</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
