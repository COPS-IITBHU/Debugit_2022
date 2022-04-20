const express = require("express");
const Resource = require("../models/resource");

const router = express.Router();

router.get("/resources", (req, res) => {
    Resource.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("resources", { title: "All Resources", resources: results });
        })
});

router.get("/createRes", (req, res) => {
  res.render("createRes", { title: "Create a New Resource :)" });  
})

module.exports = router;
