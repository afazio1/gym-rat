const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "My Routine"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    days: [{ type: mongoose.Schema.Types.ObjectId, ref: "Day" }]
});

const daySchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }]
});

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    sets: Number,
    reps: [Number]
});


const Exercise = mongoose.model('Exercise', exerciseSchema);
const Day = mongoose.model('Day', daySchema);
const Routine = mongoose.model('Routine', routineSchema);

module.exports = { Routine, Day, Exercise }; 