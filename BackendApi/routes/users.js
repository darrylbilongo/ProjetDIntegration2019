const router = require('express').Router();
const User = require('../models/users.model');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.use(cors());


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/register').post((req, res) => {

    const userData = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        email : req.body.email,
        motDePasse : req.body.motDePasse,
        dateNaissance : req.body.dateNaissance,
        fonction : req.body.fonction,
        idAnimateur: req.body.idAnimateur
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.motDePasse, 10, (err, hash) =>{
                    userData.motDePasse = hash;
                    User.create(userData)
                    .then(user => {
                        res.json({
                                    message : user.email + ' est enregistré',
                                    utilisateur: user
                                })
                    })
                    .catch(err => {
                        res.status(400).json({message: 'Error: ' + err})
                    })
                })
            }
            else{
                res.json({ message: 'Utilisateur déja existant'})
            }
        })
        .catch(err => {
            res.status(400).json({message: 'Error: ' + err})
        });

    
});

router.route('/login').post((req, res) => {

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if(user) {
                if(bcrypt.compareSync(req.body.motDePasse, user.motDePasse)){
                    // Mots de Passe compatibles
                    const verif = {
                        _id: user._id,
                        nom : user.nom,
                        prenom : user.prenom,
                        email : user.email,
                        motDePasse : user.motDePasse,
                        dateNaissance : user.dateNaissance,
                        fonction : user.fonction,
                        idAnimateur: user.idAnimateur

                    };
                    let token = jwt.sign(verif, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });
                    //res.send(token)
                    res.json({
                        token: token,
                        message: 'Bienvenue!!!',
                        utilisateur: user
                    })
                }
                else{
                    //Mots de Passe pas identiques
                    res.json({message: 'Utilisateur avec mot de passe erroné!'})
                }
            }
            else{
                res.json({ message: 'Utilisateur inexistant'})
            }
        })
        .catch(err => {
            res.status(400).json({message: 'Error: ' + err})
        });

    
});

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json("Utilisateur supprimé!"))
        .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

router.route('/update/:id').post((req, res) =>{
    /*User.findById(req.params.id)
        .then(user => {
            if(bcrypt.compareSync(req.body.oldMotDePasse, user.motDePasse)){ 
                bcrypt.hash(req.body.newMotDePasse, 10, (err, hash) =>{
                    user.motDePasse = hash;

                    user.nom = req.body.nom;
                    user.prenom = req.body.prenom;
                    user.email = req.body.email;
                    user.dateNaissance = req.body.dateNaissance;

                    user.save()
                        .then(() => res.json({message: 'Profil à jour!'}))
                        .catch(err => res.status(400).json({message: 'Error: ' + err}));
                })
            }
        })
        .catch(err => res.status(400).json({message: 'Error: ' + err}));*/
        User.findOne({
            email: req.body.email
        })
            .then(user => {
                if(user) {
                    if(bcrypt.compareSync(req.body.oldMotDePasse, user.motDePasse)){ 
                        res.json("Manuelle")
                    }
                }
            })
            .catch(err => res.status(400).json({message: 'Error: ' + err}));        
});

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const motDePasse = req.body.motDePasse;
    const dateNaissance = req.body.dateNaissance;
    const fonction = req.body.fonction;
    const idAnimateur = req.body.idAnimateur;

    const nouveau = new User({
        nom,
        prenom,
        email,
        motDePasse,
        dateNaissance,
        fonction,
        idAnimateur
    });

    nouveau.save()
            .then(() => res.json({message: 'User added!'}))
            .catch(err => res.status(400).json({message: 'Error: ' + err}));
});

module.exports = router;