const express = require("express");
const { default: mongoose } = require("mongoose");
const Resource = require("./models/resource");

const app = express();

const dbURI = "mongodb+srv://<username>:<password>@cluster0.jgtvt.mongodb.net/testing0?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })    
    .then(results => {
        console.log("ssuccessfully connected to the database");
        app.listen(8000, () => {
            console.log("the server for debugIt 2022 is now live");
        });
    });

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log("Request details: ");
    console.log(`host: ${req.hostname}`);
    console.log(`method: ${req.method}`);
    console.log(`path: ${req.path}`);
    next();
})

app.get("/", (req, res) => {
    console.log("sending index.ejs");
    res.render("index");

    
})