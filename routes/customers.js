const { Customer } = require('../models/customer');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    console.info(req.body, 'req.body')
    let genre = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    genre = await genre.save();

    res.send(genre);
});

module.exports = router;
