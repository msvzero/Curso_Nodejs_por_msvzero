const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    fuerza: {
        type:Number,
        required: true,
        trim: true

    },
    velocidad: {
        type:Number,
        required: true,
        trim: true
    }
});

const Hero = mongoose.model('Hero', heroSchema);
module.exports = { Hero };