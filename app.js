const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { restart } = require("nodemon");
const productRoutes = require("./routes/product.route.js");

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use("/api/v1/product", productRoutes);

module.exports = app;
