const router = require('express').Router();
let Position = require('../models/position.model');

router.route('/').get((req, res) => {
    position.find()
        .then(positions => res.json(positions))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const idAnim = req.body.idAnim;
    const locationLon = req.body.location.lon;
    const locationLat = req.body.location.lat;
    const locationAlt = req.body.location.alt;

    const nouveau = new position({
        idAnim,
        locationLon,
        locationLat,
        locationAlt
    });

    nouveau.save()
            .then(() => res.json({message: 'position added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

module.exports = router;