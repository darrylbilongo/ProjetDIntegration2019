const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    fonction:{
        type: String,
        default: 'scout'
    },
    idAnimateur: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }

},{
    timestamps: true   
});

const users = mongoose.model('users', userSchema);

module.exports = users;