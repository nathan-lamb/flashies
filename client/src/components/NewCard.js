import React from 'react'

import { Form } from 'semantic-ui-react'

import '../App.css'

class NewCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            front: null,
            back: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        fetch('/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Input label='Front' name='front' onChange={this.handleChange} />
                <Form.Input label='Back' name='back' onChange={this.handleChange} />
                <Form.Button floated='right' icon='plus' />
            </Form>
        )
    }
}

export default NewCard