const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const resourceRouter = require("./routes/resourceRouter");
const apiRouter = require("./routes/apiRouter");
const cookies = require("cookie-parser");

const app = express();

const dbURI = "mongodb+srv://debugit22:debugit22abhinav@cluster0.jgtvt.mongodb.net/dev0?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })    
    .then(results => {
        console.log("successfully connected to the database");
        app.listen(process.env.PORT || 8888, () => {
            console.log("the server for debugIt 2022 is now live at port 8888");
        });
    })
    .catch(err => {
        console.log(`there was an error connecting to the database: ${err}`);
    });

// setting important middleware
app.set("view engine", "ejs");
app.use(express.static("static-src"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.use((req, res, next) => {
    console.log("Request details: ");
    console.log(`host: ${req.hostname}`);
    console.log(`method: ${req.method}`);
    console.log(`path: ${req.path}`);
    next();
})


// '/all' will redirect to '/resources', which is a list of all the resources
app.get("/all", (req, res) => {
    console.log("redirecting to /resources");
    res.redirect("/resources");
    
})

app.use(resourceRouter);
app.use(apiRouter);


app.get("/", (req, res) => {
    console.log("sending index.ejs as response...");
    res.redirect("index");
});