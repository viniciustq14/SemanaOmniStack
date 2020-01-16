const mongoose = require('mongoose');

const Point = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    cooedinates: {
        type: [Number],
        required: true,
    },
});

module.exports = Point;