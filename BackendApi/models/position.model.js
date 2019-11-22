const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionSchema = new Schema({
    idDevice: {
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
        required: true,
    }
},{
    timestamps: true   
});

const positions = mongoose.model('position', positionSchema);

module.exports = positions;