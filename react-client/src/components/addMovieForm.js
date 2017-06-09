import React, { Component } from 'react'
import axios from 'axios'

class AddMovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      numberOfCopies: null,
      IMDBrating: null
    }
    // this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleCopyChange = this.handleCopyChange.bind(this)
    // this.handleRatingChange = this.handleRatingChange.bind(this)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
  }

  handleInputChange(e) {
    let input = {}
    input[e.target.name] = e.target.value
    this.setState(() => {
      return input
    })
  }

  handleAddMovie(input) {
    console.log(input)
    let url = "http://localhost:3000/api/movies"
    axios
      .post(url, input)
      .then(response => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // handleTitleChange(e) {
  //   console.log(e.target.name)
  //   this.setState({
  //     title: e.target.value
  //   })
  // }

  // handleCopyChange(e) {
  //   this.setState({
  //     numberOfCopies: e.target.value
  //   })
  // }

  // handleRatingChange(e) {
  //   this.setState({
  //     IMDBrating: e.target.value
  //   })
  // }

  render() {
    return (
      <div>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            onChange={this.handleInputChange}
          />
          <input 
            type="text" 
            name="numberOfCopies" 
            placeholder="Number of Copies" 
            onChange={this.handleInputChange}
          />
          <input 
            type="text" 
            name="IMDBrating" 
            placeholder="IMDB Rating"
            onChange={this.handleInputChange}
          />
          <button 
            value="Submit" 
            onClick={()=> { this.handleAddMovie(this.state) }}
          />
      </div>
    )
  }
}


export default AddMovieForm
