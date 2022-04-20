const express = require("express");
const Resource = require("../models/resource");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = "qwertyuiopasdfghjkzxcvbnm";

router.post("/api/login", async (req, res) => {
        const email = req.body.uname;
        const password = req.body.pwd;

        const user = await User.find({ email }).lean();

        if(user.length === 0) {
            return res.json({ status: "Error", error: "Invalid username/password" });
        }

        console.log(user);
        console.log(email, password);

        if (await bcrypt.compare(password, user[0].password)) {
            const token = await jwt.sign({ id: user._id, uname: email }, JWT_SECRET);
            res.cookie("auth-token", token, {
                maxAge: 60 * 60 * 1000
            });

            return res.json({ status: "ok", data: token });
            
        } else {
            return res.json({ status: "Error", error: "Invalid username/password" });
        }  

    
});

router.post("/api/register", async (req, res) => {
    console.log(req.body);

    // const { email, password } = req.body;
    const email = req.body.uname;
    const password = req.body.pwd;

    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        // console.log(email, password);
        const user = new User({ email, password: hashedPwd });
        const result = await user.save();
        console.log(result);
        res.json({ code: "ok" });
    } catch {
        res.json({ code: "Error" });
    }
         
    // res.redirect("/users");
});

router.post("/api/createRes", async (req, res) => {

    try {
        const authToken = req.cookies["auth-token"];
        console.log(authToken);
        const infoToken = authToken.split(".")[1];
        console.log(infoToken);
        const infoObj = atob(infoToken);
        console.log(req.body);

        console.log(infoObj);
        const username = JSON.parse(infoObj).uname;

        const title = req.body.title;
        const about = req.body.about;

        const resource = new Resource({ title, from: username, about });
        const result = await resource.save();
        console.log(result);

        res.json({ status: "ok", data: "Resource created successfully" });
    } catch {
        res.json({ status: "Error", error: "Could not create this resource" });
    }
     
});

router.get("/users", (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("users", { resources: results });
        })
});

router.get("/api/logout", (req, res) => {
    res.cookie("auth-token", " ", { maxAge: 1 });
    res.redirect("/");
});


module.exports = router;