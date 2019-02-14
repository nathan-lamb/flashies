const express = require('express');
const bodyParser = require('body-parser')
// const path = require('path');
const app = express();

const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)

app.use(bodyParser.json())

app.get('/cards', (req, res) => {
    knex.select()
        .from('defalt_deck')
        .then(cards => res.send(cards))
        .catch(err => {
            console.error(err)
            res.status(500).send(err)
        })
})

app.post('/add', (req, res) => {
    knex('default_deck')
        .insert({
            front: req.body.front,
            back: req.body.back
        })
})

app.listen(process.env.PORT || 8080);
