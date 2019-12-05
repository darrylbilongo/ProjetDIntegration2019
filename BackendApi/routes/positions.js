const router = require('express').Router();
let Position = require('../models/position.model');

router.route('/').get((req, res) => {
    Position.find()
        .then(positions => res.json(positions))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const nomDevice = req.body.payload_fields.idDevice;
    const lon = req.body.payload_fields.location.longitude;
    const lat = req.body.payload_fields.location.latitude;

    const nouveau = new Position({
        nomDevice,
        lon,
        lat
    });

    nouveau.save()
            .then(() => res.json({message: 'position added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.route('/getLastPosition').post((req, res) =>{
    Position.findOne({
        nomDevice: req.body.nom
    })
    .sort({"createdAt": -1})
    .limit(1)
    .then((position) => res.json(position))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

module.exports = router;