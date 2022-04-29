const express = require("express");
const app = express();

const middleware = require("./middleware");
const api = require("./api");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/flappy-scores");

app.use(express.json());

app.use("/api", api);

app.get("/", (req, res)=>{
    res.json(true);
})

app.post("/", (req, res)=>{
    res.json((req.body.test == true) ? true : false);
})

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5522, ()=> {
    console.log("nice");
})