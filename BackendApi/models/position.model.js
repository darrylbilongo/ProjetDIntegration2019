const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionSchema = new Schema({
    idAnimateur: {
        type: String,
        required: true
    },
    lon: {
        type: Schema.Types.Decimal128,
        required: true,
        trim: true,
    },
    lat: {
        type: Schema.Types.Decimal128,
        trim: true,
    },
    alt: {
        type: Schema.Types.Decimal128,
        required: true,
        trim: true,
    }
},{
    timestamps: true   
});

const positions = mongoose.model('positions', positionSchema);

module.exports = positions;