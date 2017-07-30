import React, { Component } from 'react'

const Navbar = (props) => (
  <nav>
    <button onClick={props.handleMovieClick}className="movie-btn">Movies</button>
    <button onClick={props.handleDisplayAddMovie}className="add-movie-btn">Add Movie</button>
  </nav>
)

export default Navbar
