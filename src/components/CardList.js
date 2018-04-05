// map over card with data rendering list of cards
import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  renderCards() {
    return this.props.cards.map((card, i) => {
      return <Card { ...card } key={ i } />
    })
  }

  render() {
    return (
      <fieldset>
        <h1>{ this.props.title }</h1>
        <ul>
          { this.renderCards() }
        </ul>
      </fieldset>
    )
  }
}

export default CardList

CardList.defaultProps = {
  cards: []
}
