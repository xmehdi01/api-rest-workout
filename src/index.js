const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const v1WorkoutRoutes = require("./routes/v1/workoutRoutes");
app.use("/api/v1/workouts", v1WorkoutRoutes);

app.listen(PORT, () => {
  console.log(`🔥 server running on port ${PORT}`);
});
