const { Genre } = require('../models/genre');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
});

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found');

    res.send(genre)
});

module.exports = router;
