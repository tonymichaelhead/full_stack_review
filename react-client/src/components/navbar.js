import React, { Component } from 'react'

const Navbar = ({ handleAddMovie, handleMovieClick }) => (
  <nav>
    <button className="movie-btn" onClick={handleMovieClick}>Movies</button>
    <button className="add-movie-btn" onClick={handleAddMovie}>Add Movie</button>
  </nav>
)

export default Navbar