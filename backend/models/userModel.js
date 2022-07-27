const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    routines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Routine" }]
});

module.exports = mongoose.model("User", userSchema);