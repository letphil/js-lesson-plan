require("dotenv").config();

const path = require("path");
const express = require("express");
const { populateRoutes } = require("./routes");

const apiRoutes = require("./routes/api");

const dbConnect = require("./db/connect");

const app = express();

const PORT = process.env.PORT || 8888;

app.use("/populate", populateRoutes);

app.use("/api", apiRoutes);

app.get("/health", function (req, res) {
  res.send("OK");
});

app.listen(PORT, function () {
  console.log("server running on port:", PORT);
});
