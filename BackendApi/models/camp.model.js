const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    lieu: {
        type: String,
        required: true,
    },
    responsable: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    materiel: {
        type: String,
        required: true,
    },
    participants: {
        type: [Users],
        required: true,
    },
},{
    timestamps: true   
});

const Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;