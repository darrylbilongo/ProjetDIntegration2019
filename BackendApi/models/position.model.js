const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionSchema = new Schema({
    lon: {
        type: Double,
        required: true,
        trim: true,
        minlength:5
    },
    alt: {
        type: Double,
        required: true,
        trim: true,
    },
    altitude: {
        type: Double,
        required: true,
        trim: true,
    }
},{
    timestamps: true   
});

const positions = mongoose.model('users', positionSchema);

module.exports = positions;