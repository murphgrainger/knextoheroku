const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});


app.get('/sports', function(req, res) {
    knex('sports').then(function(result) {
        res.json(result);
    });
});

app.get('/sports/:id', function(req, res) {
    knex('sports').where('id', req.params.id).then(function(result) {
        res.json(result);
    });
});

app.post('/sports', function(req, res, next) {
    knex('sports').insert({
        name: req.body.name,
        type: req.body.type,
        gender: req.body.gender,
        origin: req.body.origin,
    }, '*').then(function(result) {
        res.json(result);
    });
});
