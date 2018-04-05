import React, { Component } from 'react';
import './App.css';
import AddCardForm from './components/AddCardForm'
import CardList from './components/CardList'
import CardData from './components/CardData.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: CardData
    }
  }

  addCard = (card) => {
    console.log('adding card >>>', card)
    this.setState({
      cards: this.state.cards.concat(card)
    })
  }

  render() {
    return (
      <div>
        <CardList title="Ken's ToDo List" cards={ this.state.cards } />
        <AddCardForm addCard={ this.addCard } />
      </div>
    );
  }
}

export default App;
