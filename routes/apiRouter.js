const express = require("express");
const Resource = require("../models/resource");
const User = require("../models/user");

const router = express.Router();

router.post("/api/register", async (req, res) => {
    console.log(req.body);

    // const { email, password } = req.body;
    const email = req.body.uname;
    const password = req.body.pwd;
    console.log(email, password);
    const user = new User({ email, password });
    const result = await user.save();
    console.log(result);
    // res.redirect("/users");
});

router.post("/api/createRes", async (req, res) => {
    console.log(req.body);

    const title = req.body.title;
    const from = req.body.from;

    const resource = new Resource({ title, from });
    const result = await resource.save();
    console.log(result); 
});

router.get("/users", (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("users", { resources: results });
        })
});


module.exports = router;