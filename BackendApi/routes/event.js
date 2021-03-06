const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const userEmail = req.body.userEmail;

    const nouveau = new Event({
        title,
        date,
        userEmail
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
        .then(event => res.json("Evenenemet supprimé"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getEvents').post((req, res) =>{
    Event.find({
        userEmail: req.body.userEmail
    })
    .then((event) => res.json(event))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/getSpecialDate').post((req, res) => {

    Event.find({
        userEmail: req.body.userEmail,
        date: req.body.date
    })
    .then((event) => res.json(event))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
})


module.exports = router;