const express = require("express");
const app = express();

const middleware = require("./middleware");
const api = require("./api");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/flappy-scores");

app.use(express.json());

app.use("/api", api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5522, ()=> {
    console.log("nice");
})