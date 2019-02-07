import React from 'react'

import { Button, Segment } from 'semantic-ui-react'

class AnswerCard extends React.Component {

    render() {
        return (
            <div>
                <Segment textAlign='center'>{this.props.currentCard.front}</Segment>
                <Segment textAlign='center'>{this.props.currentCard.back}</Segment>
                <Button.Group fluid>
                    <Button icon='check' onClick={this.props.handleCorrectAnswer} />
                    <Button icon='x' onClick={this.props.handleIncorrectAnswer} />
                </Button.Group>
            </div>
        )
    }
}

export default AnswerCard