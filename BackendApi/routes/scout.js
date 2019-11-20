const router = require('express').Router();
let Scout = require('../models/fonction.model');

router.route('/').get((req, res) => {
    Scout.find()
        .then(fonctions => res.json(scout))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;

    const nouveauAnimateur = new Scout({
        nom,
        prenom,
    });

    nouveauScout.save()
            .then(() => res.json('Scout ajouté!'))
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;