const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/api/register", async (req, res) => {
    console.log(req.body);

    const user = new User(req.body);
    await user.save();
    res.redirect("/users");
});

module.exports = router;