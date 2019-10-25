const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const totemSchema = new Schema({
    totem_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    totem_nom: {
        type: String,
        required: true,
        trim: true,
    },

},{
    timestamps: true   
});

const totem = mongoose.model('totems', totemSchema);

module.exports = totem;