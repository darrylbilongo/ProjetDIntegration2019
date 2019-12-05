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
<<<<<<< HEAD
    idAnimateur: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
=======
    events:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    scouts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Scout'
        }
    ]


>>>>>>> 130cd48d4aa3835970d6810300594e8af34a751a

},{
    timestamps: true   
});

const users = mongoose.model('users', userSchema);

module.exports = users;