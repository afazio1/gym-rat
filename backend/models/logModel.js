const mongoose = require("mongoose");
const { Exercise } = require("./routineModel");

const logSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise"
    },
    routine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Routine"
    },
    actual_sets: {
        type: Number,
        required: true
    },
    actual_reps: {
        type: [Number],
        required: true
    },
    weight: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Log', logSchema);