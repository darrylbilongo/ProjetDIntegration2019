const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nomUtilisateur = req.body.nomUtilisateur;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const motDePasse = req.body.motDePasse;
    const dateNaissance = req.body.dateNaissance;
    const estSupprime = req.body.estSupprime;
    const totem = req.body.totem;
    const fonction = req.body.fonction;

    const nouveau = new User({
        nomUtilisateur,
        nom,
        prenom,
        email,
        motDePasse,
        dateNaissance,
        estSupprime,
        totem,
        fonction
    });

    nouveau.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    
})

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json("User deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>{
    User.findById(req.params.id)
        .then(user => {
            user.nomUtilisateur = req.body.nomUtilisateur;
            user.nom = req.body.nom;
            user.prenom = req.body.prenom;
            user.email = req.body.email;
            user.motDePasse = req.body.motDePasse;
            user.dateNaissance = req.body.dateNaissance;
            user.estSupprime = req.body.estSupprime;
            user.totem = req.body.totem;
            user.fonction = req.body.fonction;

            user.save()
                .then(() => res.json('User Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;