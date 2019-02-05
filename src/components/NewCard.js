import React from 'react'

import { Button, Header, Input, Segment } from 'semantic-ui-react'

import '../App.css'

const NewCard = () => {
    return (
        <div>
            <Header as='h3' content='Add New Card' textAlign='center' />
            <Segment>
                Front
                <Input />
            </Segment>
            <Segment>
                Back
                <Input />
            </Segment>
            <Button.Group floated='right'>
                <Button icon='plus' />
            </Button.Group>
        </div>
    )
}

export default NewCard