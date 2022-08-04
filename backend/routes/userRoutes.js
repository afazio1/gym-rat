const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// USER
router.get("/", userController.index); // all users
router.get("/:id", userController.singleUser); // user profile page and all data should be on the user object

// ROUTINE
router.post("/:id/routines", userController.newRoutine);
router.delete("/:id/routines/:routine_id", userController.deleteRoutine);
router.put("/:id/routines/:routine_id", userController.editRoutine);

// LOGS
router.get("/:id/logs", userController.getLogs);
router.post("/:id/logs", userController.newLog);
router.delete("/:id/logs/:log_id", userController.deleteLog);
router.put("/:id/logs/:log_id", userController.editLog);


module.exports = router;