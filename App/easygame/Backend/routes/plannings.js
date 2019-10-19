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
})

module.exports = router;