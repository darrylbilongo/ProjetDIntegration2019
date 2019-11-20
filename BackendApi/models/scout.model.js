const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoutSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    }

},{
    timestamps: true   
});

const Scout = mongoose.model('Scout', scoutSchema);

module.exports = Scout;