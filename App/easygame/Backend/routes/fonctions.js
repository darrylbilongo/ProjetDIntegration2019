const router = require('express').Router();
let Fonction = require('../models/fonction.model');

router.route('/').get((req, res) => {
    Fonction.find()
        .then(fonctions => res.json(fonctions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fonction_id = req.body.fonction_id;
    const fonction_nom = req.body.fonction_nom;

    const nouveau = new Fonction({
        fonction_id,
        fonction_nom
    });

    nouveau.save()
            .then(() => res.json('Fonction added!'))
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;