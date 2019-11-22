const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionSchema = new Schema({
    idAnimateur: {
        type: String,
        required: true
    },
    lon: {
        type: Double,
        required: true,
        trim: true,
        minlength:5
    },
    lat: {
        type: Double,
        required: true,
        trim: true,
    },
    alt: {
        type: Double,
        required: true,
        trim: true,
    }
},{
    timestamps: true   
});

const positions = mongoose.model('positions', positionSchema);

module.exports = positions;