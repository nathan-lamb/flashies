import React from 'react'

import { Button, Segment } from 'semantic-ui-react'

const AnswerCard = (props) => {
    return (
        <div>
            <Segment textAlign='center'>{props.currentCard.back}</Segment>
            <Button.Group fluid>
                <Button icon='check' />
                <Button icon='x' />
            </Button.Group>
        </div>
    )
}

export default AnswerCard