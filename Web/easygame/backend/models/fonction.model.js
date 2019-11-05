const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fonctionSchema = new Schema({
    fonction_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    fonction_nom: {
        type: String,
        required: true,
        trim: true,
    },

},{
    timestamps: true   
});

const Fonctions = mongoose.model('Fonctions', fonctionSchema);

module.exports = Fonctions;