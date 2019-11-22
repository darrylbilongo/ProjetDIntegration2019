const router = require('express').Router();
let Position = require('../models/position.model');

router.route('/').get((req, res) => {
    Position.find()
        .then(positions => res.json(positions))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const idDevice = req.body.idDevice;
    const lon = req.body.location.longitude;
    const lat = req.body.location.latitude;

    const nouveau = new Position({
        idDevice,
        lon,
        lat
    });

    nouveau.save()
            .then(() => res.json({message: 'position added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.route('/getLastPosition').get((req, res) =>{
    Position.findOne({
        idDevice: req.body.idDevice
    })
    .sort({"createdAt": -1})
    .limit(1)
    .then((position) => res.json(position))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

module.exports = router;