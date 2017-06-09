import React, { Component } from 'react'
import Movie from './movie'

const MovieList = ({ movies }) => (
  <ul>
    {movies.map((movie, i) => {
      return <li key={i}><Movie movieData={movie} /></li>
    })}
  </ul>
)

export default MovieList
