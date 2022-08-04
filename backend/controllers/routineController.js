const { Routine } = require("../models/routineModel");

module.exports.index = async (req, res) => {
    const routines = await Routine.find({});
    res.json(routines);
}

module.exports.show = async (req, res) => {
    const routine = await Routine.findById({ _id: req.params.id });
    res.json({ routine });
}