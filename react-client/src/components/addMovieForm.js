import React, { Component } from 'react'


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
  

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChangeTitle} value={this.state.title}/><br/>
          <input type="text" onChange={this.handleChangeCopies}/><br/>
          <input type="text" onChange={this.handleChangeRating}/><br/>
          <input type="submit" onSubmit={this.props.handleFormSubmit(this.state.)}/>
        </form> 
      </div>
    )
  }
}


export default AddMovieForm
