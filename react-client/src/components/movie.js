import React, { Component } from 'react'

const Movie = (props) => (
  <div className="single-movie">
    <span>Title: {props.movie.title}</span>
    <span>Copies sold: {props.movie.copies}</span>
    <span>rating: {props.movie.rating}</span>
  </div>
)

export default Movie

{/* {
    title: String,
    copies: Number,
    rating: Number,
} */}