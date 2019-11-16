const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animateurSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    fonction: {
        type: Number,
        required: true,
    },
},{
    timestamps: true   
});

const Animateur = mongoose.model('Animateur', animateurSchema);

module.exports = Animateur;