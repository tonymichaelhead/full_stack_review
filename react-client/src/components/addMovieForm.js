import React, { Component } from 'react'


class AddMovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      copies: '',
      rating: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //create a handleChange for each form input
  handleChange(e) {
    e.preventDefault();
    this.setState({

    })
    console.log(this.state)
  }
  

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange}/><br/>
          <input type="text" onChange={this.handleChange}/><br/>
          <input type="text" onChange={this.handleChange}/><br/>
          <input type="submit" onSubmit={this.props.handleFormSubmit}/>
        </form> 
      </div>
    )
  }
}


export default AddMovieForm
