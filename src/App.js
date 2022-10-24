import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form'

class App extends Component {
  
  state = {
    items: [
    ],
  }

  render() {
    const { items } = this.state

    return (
      <div className='flex flex-row'>
        <div className='basis-1/4'>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
        <div className='basis-3/4'>
          <Table items={ items } removeItem={this.removeItem} />
        </div>
      </div>
    )
  }

  handleSubmit = (item) => {
    this.setState({ items: [...this.state.items, item] })
  }

  removeItem = (index) => {
    const { items } = this.state
  
    this.setState({
      items: items.filter((item, i) => {
        return i !== index
      }),
    })
  }

}

export default App