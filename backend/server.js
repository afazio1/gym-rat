const express = require("express");
const connectDB = require("./config/db");
const port = 3000;

connectDB();

const app = express();

app.use("/api/routines", require("./routes/routineRoutes"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
