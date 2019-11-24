const router = require('express').Router();
let Device = require('../models/devices.model');

router.route('/').get((req, res) => {
    Device.find()
        .then(device => res.json(device))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const nomDevice = req.body.nom;
    const proprietaire = req.body.proprietaire;

    const nouveau = new Device({
        nomDevice,
        proprietaire
    });

    nouveau.save()
            .then(() => res.json({message: 'devices added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
})

router.route('/getDevices').post((req, res) =>{
    Device.findOne({
        proprietaire: req.body.proprietaire
    })
    .then((device) => res.json(device))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

module.exports = router;