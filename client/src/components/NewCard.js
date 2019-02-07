import React from 'react'

import { Form } from 'semantic-ui-react'

import '../App.css'

const NewCard = () => {
    return (
        <Form>
            <Form.Input label='Front' />
            <Form.Input label='Back' />
            <Form.Button floated='right' icon='plus' />
        </Form>
    )
}

export default NewCard