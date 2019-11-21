const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
        .then(fonctions => res.json(fonctions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const date = req.body.date;

    const nouveau = new Event({
        title,
        date,
    });

    nouveau.save()
            .then(() => res.json('Event added!'))
            .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) =>{
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Event.findByIdAndDelete(req.params.id)
        .then(planning => res.json("Evenenemet supprimé"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;