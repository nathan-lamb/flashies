import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import './App.css'
import NewCard from './components/NewCard';

class App extends Component {
  componentDidMount() {
    fetch('/cards', {
      accept: 'application/json',
    })
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
  }

  render() {
    return (
      <Container className='app'>
        <Header as='h1' block inverted color='olive' content='Flashies' />
        <Segment className='main-interface'>
          {this.state.cards.length !== 0 ? <ReviewCards cards={this.state.cards} /> : null}
        </Segment>
      </Container>
    )
  }
}

export default App
