const router = require('express').Router();
let Device = require('../models/devices.model');

router.route('/').get((req, res) => {
    Device.find()
        .then(device => res.json(device))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/add').post((req, res) => {
    const nomDevice = req.body.nomDevice;
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
    Device.find({
        proprietaire: req.body.proprietaire
    })
    .then((device) => res.json(device))
    .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/:id').delete((req, res) =>{
    Device.findByIdAndDelete(req.params.id)
        .then(device => res.json("Device supprimé!"))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

module.exports = router;