const express = require("express");
const Resource = require("../models/resource");
const jwt = require("jsonwebtoken");


const router = express.Router();
const JWT_SECRET = "qwertyuiopasdfghjkzxcvbnm";

function authBeforeRender(req, res, isRedirect, dest, options) {
    if (isRedirect) {
        try {
            const authToken = req.cookies["auth-token"];
            if (!authToken) {
                res.render("index", { title: "This is a title lmao" });
              } else {
                    try {
                        const validToken = jwt.verify(authToken, JWT_SECRET);
                        if (validToken) {
                            res.redirect(dest);
                        }
                    } catch (error) {
                        console.log("error: ", error);  
                    }
                }
        } catch (error) {
            console.log(error);
            res.redirect("/");
        }   
    } else {
        try {
            const authToken = req.cookies["auth-token"];
            if (!authToken) {
                res.render("index", { title: "This is a title lmao" });
              } else {
                    try {
                        const validToken = jwt.verify(authToken, JWT_SECRET);
                        if (validToken) {
                            res.render(dest, options);
                        }
                    } catch (error) {
                        console.log("error: ", error);  
                    }
                }
        } catch (error) {
            console.log(error);
            res.redirect("/");
        }   
    }
}

router.get("/logout", (req, res) => {
    authBeforeRender(req, res, false, "logout", { title: "Welcome to ResourceJS" });
});

router.get("/index", (req, res) => {
    authBeforeRender(req, res, false, "logout", { title: "Welcome to ResourceJS" })   
});

router.get("/login", (req, res) => {
    try {
        const authToken = req.cookies["auth-token"];
        if (!authToken) {
            res.render("login", { title: "Login Page" });
          } else {
                try {
                    const validToken = jwt.verify(authToken, JWT_SECRET);
                    if (validToken) {
                        res.redirect("/all");
                    }
                } catch (error) {
                    console.log("error: ", error);  
                }
            }
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});

router.get("/resources", (req, res) => {
    Resource.find().sort({ createdAt: -1 })
        .then(results => {
            res.render("resources", { title: "All Resources", resources: results });
        })
});

router.get("/createRes", (req, res) => {
    authBeforeRender(req, res, false, "createRes", { title: "Create a New Res :)" }) ;
  
});

router.get("/search", (req, res) => {
    authBeforeRender(req, res, false, "search", { title: "Search for a Resource" });
});

module.exports = router;
