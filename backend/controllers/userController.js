const User = require("../models/userModel");
const { Routine } = require("../models/routineModel");

module.exports.index = async (req, res) => {
    const users = await User.find({});
    return res.json(users);
}

module.exports.singleUser = async (req, res) => {
    const singleUser = await User.findById({ _id: req.params.id });
    return res.json({ singleUser });
}

module.exports.newRoutine = async (req, res) => {
    const newRoutine = new Routine({ name: "new routine" });
    await newRoutine.save();
    res.redirect("/")
}

module.exports.deleteRoutine = async (req, res) => {
    await Routine.findByIdAndDelete({ _id: req.params.routine_id });
    res.redirect("/")
}

module.exports.editRoutine = async (req, res) => {
    await Routine.findByIdAndUpdate({ _id: req.params.routine_id }, { name: "updated routine" });
    res.redirect("/")
}