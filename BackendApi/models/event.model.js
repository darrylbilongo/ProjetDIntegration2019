const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event_id: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }

},{
    timestamps: true   
});

const event = mongoose.model('event', eventSchema);

module.exports = event;