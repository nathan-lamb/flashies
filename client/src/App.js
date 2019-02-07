import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
// import _ from 'lodash'

import './App.css'
// import NewCard from './components/NewCard'
import ReviewCards from './components/ReviewCards'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }

    this.removeCorrectAnswer = this.removeCorrectAnswer.bind(this)
  }

  componentDidMount() {
    fetch('/cards', {
      accept: 'application/json',
    })
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
  }

  removeCorrectAnswer(currentCardIndex) {
    let currentCardList = this.state.cards.slice()
    currentCardList.splice(currentCardIndex, 1)

    this.setState({
      cards: currentCardList
    })
  }

  render() {
    return (
      <Container className='app'>
        <Header as='h1' block inverted color='olive' content='Flashies' />
        <Segment className='main-interface'>
          {this.state.cards.length !== 0 ? <ReviewCards cards={this.state.cards} removeCorrectAnswer={this.removeCorrectAnswer} /> : null}
        </Segment>
      </Container>
    )
  }
}

export default App
