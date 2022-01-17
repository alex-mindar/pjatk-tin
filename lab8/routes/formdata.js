var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    const formFields = {
        name: req.body.name,
        surname: req.body.surname,
        snumber: req.body.snumber,
        grade: req.body.grade
    }

    let validated = true

    if (!formFields.name || /\d/.test(formFields.name)) {
        validated = false
    }
    if (!formFields.surname || /\d/.test(formFields.surname)) {
        validated = false
    }
    if (!formFields.snumber || formFields.snumber[0] !== 's') {
        validated = false
    }
    if (!formFields.grade || formFields.grade < 0 || formFields.grade > 5) {
        validated = false
    }

    if (!validated) {
        res.status(400)
        res.send('Invalid form parameters')
    }

    res.render('formdata', formFields)
})

module.exports = router