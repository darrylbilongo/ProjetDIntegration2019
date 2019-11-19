const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
},{
    timestamps: true   
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;