import React, { Component } from 'react'

export default class AddCardForm extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    console.log('new todo >>>', this.refs.title.value)
    this.props.addCard({
      "title": this.refs.title.value
    })
    this.refs.title.value =  ''
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <fieldset>
          <label htmlFor="title">ToDo: </label>
          <input type="text" ref="title" />
          <button>Add ToDo</button>
        </fieldset>
      </form>
    )
  }
}
