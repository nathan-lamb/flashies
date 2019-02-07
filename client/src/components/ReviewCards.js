import React, { Component } from 'react'

import QuestionCard from './QuestionCard'
import AnswerCard from './AnswerCard';

class ReviewCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCardIndex: 0,
            checkAnswer: false,
        }

        this.handleCheckAnswer = this.handleCheckAnswer.bind(this)
        this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this)
        this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this)
    }

    handleCheckAnswer() {
        if (!this.state.checkAnswer) {
            this.setState({
                checkAnswer: true
            })
        }
    }

    handleIncorrectAnswer() {
        this.showNextCard()

        this.setState({
            checkAnswer: false
        })
    }

    handleCorrectAnswer() {
        this.props.handleRemoveCorrectAnswer(this.state.currentCardIndex)

        if (this.state.currentCardIndex + 1 >= this.props.cards.length) {
            this.setState({
                currentCardIndex: 0,
                checkAnswer: false
            })
        } else {
            this.setState({
                checkAnswer: false
            })
        }
    }

    showNextCard() {
        let currentCardIndex = 0

        if (this.state.currentCardIndex + 1 < this.props.cards.length) {
            currentCardIndex = this.state.currentCardIndex + 1
        }

        this.setState({
            currentCardIndex
        })
    }

    render() {
        return (
            <div onClick={this.handleCheckAnswer}>
                {this.state.checkAnswer ? <AnswerCard currentCard={this.props.cards[this.state.currentCardIndex]} handleIncorrectAnswer={this.handleIncorrectAnswer} handleCorrectAnswer={this.handleCorrectAnswer} /> : <QuestionCard currentCard={this.props.cards[this.state.currentCardIndex]} />}
            </div>
        )
    }
}

export default ReviewCards