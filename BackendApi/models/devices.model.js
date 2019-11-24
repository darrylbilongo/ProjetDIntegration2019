const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    nom: {
        type: String,
        trim: true,
        unique: true
    },
    proprietaire: {
        type: String,
        trim: true,
    }
},{
    timestamps: true   
});

const devices = mongoose.model('devices', deviceSchema);

module.exports = devices;