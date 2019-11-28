const router = require('express').Router();
let Animateur = require('../models/fonction.model');

router.route('/').get((req, res) => {
    Fonction.find()
        .then(fonctions => res.json(animateur))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const fonction = req.body.fonction;

    const nouveauAnimateur = new Animateur({
        nom,
        prenom,
        fonction
    });

    nouveauAnimateur.save()
            .then(() => res.json('Animateur ajouté!'))
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;