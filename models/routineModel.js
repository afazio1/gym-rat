import mongoose, { Schema } from "mongoose";

const routineSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "My Routine"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    days: [{ type: Schema.Types.ObjectId, ref: "Day" }]
});

const daySchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const exerciseSchema = new Schema({
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

export { Routine, Day, Exercise, exerciseSchema };