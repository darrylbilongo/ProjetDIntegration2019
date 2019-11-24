const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    proprietaire: {
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true   
});

const devices = mongoose.model('devices', deviceSchema);

module.exports = devices;