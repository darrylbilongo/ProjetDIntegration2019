const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nomUtilisateur: {
        type: String,
        required: true,
        trim: true,
        minlength:5
    },
    nom: {
        type: String,
        required: true,
        trim: true,
    },
    prenom: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    motDePasse: {
        type: String,
        required: true,
    },
    dateNaissance: {
        type: Date,
        required: true,
    },
    estSupprime: {
        type: Boolean,
        required: true,
        default: false
    },
    totem:{
        type: String,
        required: true,
    },
    fonction:{
        type: String,
        default: 'scout'
    }

},{
    timestamps: true   
});

const users = mongoose.model('users', userSchema);

module.exports = users;