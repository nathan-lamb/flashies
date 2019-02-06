const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
const app = express();

const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)

app.get('/cards', function (req, res) {
    knex.select().from('default_deck').then(cards => {
        res.send(cards);
    })
});

app.listen(process.env.PORT || 8080);