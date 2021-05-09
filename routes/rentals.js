// const { Movie } = require('../models/movie');
// const { Genre } = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rentals = await Movie.find().sort('name');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    let genre = await Genre.findById(req.body.genreId);
    console.log(genre, 'found ganre by id');
    if (!genre) return status(400).send('Invalid rental.')
    let rental = new Rental({
    });
    rental = await rental.save();
    res.send(rental);
});

module.exports = router;
