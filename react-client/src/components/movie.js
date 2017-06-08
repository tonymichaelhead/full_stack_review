import React, { Component } from 'react'

const Movie = ({ movieData }) => (
  <div className="single-movie">
    <h3>{movieData.title}</h3>
    <h5>Number of Copies: {movieData.numberOfCopies}</h5>
    <h5>IMDB Rating: {movieData.IMDBrating}</h5>
  </div>
)

export default Movie
