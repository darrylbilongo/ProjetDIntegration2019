const router = require('express').Router();
let Planning = require('../models/planning.model');

router.route('/').get((req, res) => {
    Planning.find()
        .then(plannings => res.json(plannings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nomUtilisateur = req.body.nomUtilisateur;
    const description = req.body.description;
    const duree = req.body.duree;
    const date = req.body.date;

    const nouveau = new Planning
    ({
        nomUtilisateur,
        description,
        duree,
        date
    });

    nouveau.save()
            .then(() => res.json('planning added!'))
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