const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    userEmail: { 
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true   
});

const event = mongoose.model('event', eventSchema);

module.exports = event;