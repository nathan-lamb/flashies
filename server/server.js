const express = require('express');
const bodyParser = require('body-parser')
// const path = require('path');
const app = express();

const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)

app.use(bodyParser.json())

app.get('/cards', function (req, res) {
    knex.select().from('default_deck').then(cards => {
        res.send(cards);
    })
})

app.post('/add', (req, res) => {
    console.log(req.body)
    knex('default_deck').insert({
        front: req.body.front,
        back: req.body.back
    })
        .then(() => { })
})

app.listen(process.env.PORT || 8080);