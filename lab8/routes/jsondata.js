var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.post('/', jsonParser, function(req, res) {
    const fields = {
        name: req.body.name,
        surname: req.body.surname,
        snumber: req.body.snumber,
        group: req.body.group
    }

    res.render('jsondata', fields)
})

module.exports = router