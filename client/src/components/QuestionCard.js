import React from 'react'

import { Segment } from 'semantic-ui-react'

const QuestionCard = (props) => {
    return (
        <Segment textAlign='center'>{props.currentCard.front}</Segment>
    )
}

export default QuestionCard