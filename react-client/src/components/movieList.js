import React, { Component } from 'react'
import Movie from './movie'

const MovieList = ({ movies }) => (
  <ul>
    <li>
      {movies.map((movie, i) => {
        return <Movie movieData={movie} key={i} />
      })}
    </li>
  </ul>
)

export default MovieList
