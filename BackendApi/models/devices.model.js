const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    nomDevice: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    proprietaire: {
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true   
});

const devices = mongoose.model('devices', deviceSchema);

module.exports = devices;