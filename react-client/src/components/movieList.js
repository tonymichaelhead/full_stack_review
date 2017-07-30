import React, { Component } from 'react'
import Movie from './movie'

const MovieList = ({ movies }) => (
  <ul>
     {movies.map(movie => <li><Movie movie={movie}/></li>)} 
  </ul>
)

export default MovieList

