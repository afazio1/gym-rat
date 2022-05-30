import mongoose, { Schema } from "mongoose";
import { exerciseSchema } from "./routineModel";

const logSchema = new Schema({
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

const Log = mongoose.model('Log', logSchema);

export default Log;