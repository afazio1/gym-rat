const User = require("../models/userModel");
const { Routine } = require("../models/routineModel");
const Log = require("../models/logModel");

module.exports.index = async (req, res) => {
    const users = await User.find({});
    res.json(users);
}

module.exports.singleUser = async (req, res) => {
    const singleUser = await User.findById({ _id: req.params.id });
    res.json({ singleUser });
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

module.exports.getLogs = async (req, res) => {
    const logs = await Log.find({ user: req.params.id });
    res.json(logs);
}

module.exports.newLog = async (req, res) => {
    const newLog = new Log({});
    await newLog.save();
    res.redirect("/");
}

module.exports.deleteLog = async (req, res) => {
    await Log.findByIdAndDelete({ _id: req.params.log_id });
    res.redirect("/")
}

module.exports.editLog = async (req, res) => {
    await Log.findByIdAndUpdate({ _id: req.params.log_id }, {});
    res.redirect("/")
}