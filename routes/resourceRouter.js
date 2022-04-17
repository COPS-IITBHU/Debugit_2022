const express = require("express");
const Resource = require("../models/resource");
const User = require("../models/user");

const router = express.Router();

router.get("/resources", (req, res) => {
    Resource.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("resources", { resources: results });
        })
});

router.get("/users", (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("resources", { resources: results });
        })
});

module.exports = router;
