import React, { Component } from 'react';
import axios from 'axios';


class AddMovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      copies: '',
      rating: '',
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCopies = this.handleChangeCopies.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //create a handleChange for each form input
  handleChangeTitle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value }, () => {
      console.log('title: ', this.state.title);
    })
  }

  handleChangeCopies(e) {
    e.preventDefault();
    this.setState({ copies: e.target.value }, () => {
      console.log('copies: ', this.state.copies);
    })
  }

  handleChangeRating(e) {
    e.preventDefault();
    this.setState({ rating: e.target.value }, () => {
      console.log('rating: ', this.state.rating);
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let url = '/api/movies'
    let movie = this.state;
    console.log(movie);
    axios
      .post(url, movie)
        .then(results => {
          console.log('successfully POSTED: '), movie;
          this.props.getMovies();
        })
        .catch(err => {
          console.log(err);
        })
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" onChange={this.handleChangeTitle} value={this.state.title}/><br/>
          <input type="text" onChange={this.handleChangeCopies}/><br/>
          <input type="text" onChange={this.handleChangeRating}/><br/>
          <input type="submit"/> 
        </form> 
      </div>
    )
  }
}


export default AddMovieForm
