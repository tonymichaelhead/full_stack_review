import React, { Component } from 'react'

const Navbar = ({ handleDisplayAddMovie, handleMovieClick }) => (
  <nav>
    <button className="movie-btn" onClick={handleMovieClick}>Movies</button>
    <button className="add-movie-btn" onClick={handleDisplayAddMovie}>Add Movie</button>
  </nav>
)

export default Navbar