import React, { Component } from 'react'

const Movie = (props) => (
  <div className="single-movie">
    <span>
      <strong>Title: </strong>{props.movie.title}<br/>
      <strong>Copies sold: </strong>{props.movie.copies}<br/>
      <strong>rating: </strong>{props.movie.rating}<br/>
    </span>
  </div>
)

export default Movie

{/* {
    title: String,
    copies: Number,
    rating: Number,
} */}