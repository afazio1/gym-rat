// hello from raspberry pi
const express = require("express");
const connectDB = require("./config/db");
const PORT = 3000;

connectDB();

const app = express();

app.use("/api/routines", require("./routes/routineRoutes"));
app.use("/api/users/", require("./routes/userRoutes"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
