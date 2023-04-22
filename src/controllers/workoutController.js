const workoutService = require("../services/workoutService");
const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};
const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(oneWorkout);
};
const createWorkout = (req, res) => {
  const { body } = req;
  if (!body.name) return;
  const newWorkout = {
    name: body.name,
  };
  const createdWorkout = workoutService.createOneWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};
const updateWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};
const deleteWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};
module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
