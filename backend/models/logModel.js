const mongoose = require("mongoose");
const { exerciseSchema } = require("./routineModel");

const logSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exercise: {
        type: exerciseSchema,
        required: true
    },
    routine: {
        type: Schema.Types.ObjectId,
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