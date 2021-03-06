require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/middleware.config")(app);
require("./config/session.config")(app);

const authRoutes = require("./routes/auth.routes")
app.use("/auth",authRoutes)

app.listen(process.env.PORT, () => console.log("server running on",process.env.PORT));