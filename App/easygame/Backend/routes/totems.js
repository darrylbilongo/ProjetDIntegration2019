const router = require('express').Router();
let Totem = require('../models/totem.model');

router.route('/').get((req, res) => {
    Totem.find()
        .then(totems => res.json(totems))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Utilisateur_id = req.body.Utilisateur_id;
    const totem_id = req.body.totem_id;
    const totem_nom = req.body.totem_nom;

    const nouveau = new Totem({
        totem_id,
        totem_nom
    });

    nouveau.save()
            .then(() => res.json('Totem added!'))
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;