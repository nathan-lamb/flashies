import React, { Component } from 'react'
// import _ from 'lodash'
// import { Button } from 'semantic-ui-react'

import cards from '../data'

import QuestionCard from './QuestionCard'
import AnswerCard from './AnswerCard';

class ReviewCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCard: cards[0],
            checkAnswer: false
        }

        this.handleCheckAnswer = this.handleCheckAnswer.bind(this)
    }

    handleCheckAnswer() {
        this.setState({
            checkAnswer: true
        })
    }

    render() {
        return (
            <div onClick={this.handleCheckAnswer}>
                <QuestionCard currentCard={this.state.currentCard} />
                {this.state.checkAnswer ? <AnswerCard currentCard={this.state.currentCard} /> : null}
            </div>
        )
    }
}

export default ReviewCards