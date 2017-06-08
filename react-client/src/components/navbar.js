import React, { Component } from 'react'

const Navbar = ({ handleUserClick, handleMovieClick }) => (
  <nav>
    <button className="user-btn" onClick={handleUserClick}>Users</button>
    <button className="movie-btn" onClick={handleMovieClick}>Movies</button>
  </nav>
)

export default Navbar