const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.index); // all users
router.get("/:id", userController.singleUser); // user profile page and all data should be on the user object

router.post("/:id/routines", userController.newRoutine);
router.delete("/:id/routines/:routine_id", userController.deleteRoutine);
router.put("/:id/routines/:routine_id", userController.editRoutine);

module.exports = router;