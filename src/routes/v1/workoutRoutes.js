const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
router
  .get("/workouts", workoutController.getAllWorkouts)
  .get("/:workoutId", workoutController.getOneWorkout)
  .post("/", workoutController.createWorkout)
  .patch("/:workoutId", workoutController.updateWorkout)
  .delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;
