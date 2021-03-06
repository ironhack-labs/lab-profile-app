require("dotenv").config()
const express = require("express")
const app = express()

require("./confing/db.config")(app);
require("./confing/middleware.config")(app)
require("./confing/session.config")

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);


app.listen(process.env.PORT, () => console.log("server running 🏃‍ on port 4000"));
