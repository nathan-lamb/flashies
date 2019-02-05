import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import './App.css'
import NewCard from './components/NewCard';

class App extends Component {
  render() {
    return (
      <Container className='app'>
        <Header as='h1' block inverted color='olive' content='Flashies' />
        <Segment className='main-interface'>
          <NewCard />
        </Segment>
      </Container>
    )
  }
}

export default App
