import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    routines: [{ type: Schema.Types.ObjectId, ref: "Routine" }]
});

const User = mongoose.model("User", userSchema);

export default User;