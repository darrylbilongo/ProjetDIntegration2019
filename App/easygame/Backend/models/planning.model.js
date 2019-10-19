const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plannigSchema = new Schema({
    nomUtilisateur: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    duree: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },

},{
    timestamps: true   
});

const plannings = mongoose.model('plannings', plannigSchema);

module.exports = plannings;