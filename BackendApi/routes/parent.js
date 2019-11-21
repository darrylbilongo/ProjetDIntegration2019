const router = require('express').Router();
let Parent = require('../models/parent.model');

router.route('/').get((req, res) => {
    Parent.find()
        .then(parent => res.json(parent))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom

    const nouveau = new Parent
    ({
        nom,
        prenom
    });

    nouveau.save()
            .then(() => res.json('parent ajouté'))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    Planning.findById(req.params.id)
        .then(planning => res.json(planning))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Planning.findByIdAndDelete(req.params.id)
        .then(planning => res.json("Planning deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>{
    Planning.findById(req.params.id)
        .then(planning => {
            planning.nomUtilisateur = req.body.nomUtilisateur;
            planning.description = req.body.description;
            planning.duree = req.body.duree;
            planning.date = req.body.date;

            planning.save()
                .then(() => res.json('Planning Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;