const router = require('express').Router();
let Position = require('../models/position.model');

router.route('/').get((req, res) => {
    position.find()
        .then(positions => res.json(positions))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const position_id = req.body.position_id;
    const position_nom = req.body.position_nom;

    const nouveau = new position({
        position_id,
        position_nom
    });

    nouveau.save()
            .then(() => res.json({message: 'position added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

module.exports = router;