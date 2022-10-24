import React, { Component } from 'react'

class Form extends Component {
  
    initialState = {
    name: '',
    price: '',
  }

  state = this.initialState
  

  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, price } = this.state;
  
    return (
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-2'>
        <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={ name }
          onChange={this.handleChange} />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={ price }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} className="btn-primary"/>
      </form>
    );
  }
}

export default Form;