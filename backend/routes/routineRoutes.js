const express = require("express");
const router = express.Router();
const routineController = require("../controllers/routineController");

router.get("/", routineController.index);
router.get("/:id", routineController.show);

module.exports = router;