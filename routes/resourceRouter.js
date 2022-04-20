const express = require("express");
const Resource = require("../models/resource");
const jwt = require("jsonwebtoken");


const router = express.Router();
const JWT_SECRET = "qwertyuiopasdfghjkzxcvbnm";

router.get("/logout", (req, res) => {
    try {
        const authToken = req.cookies["auth-token"];
        if (!authToken) {
            res.render("index", { title: "This is a title lmao" });
          } else {
                try {
                    const validToken = jwt.verify(authToken, JWT_SECRET);
                    if (validToken) {
                        res.render("logout", { title: "This is the logout page" });
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

router.get("/index", (req, res) => {
    try {
        const authToken = req.cookies["auth-token"];
        if (!authToken) {
            res.render("index", { title: "This is a title lmao" });
          } else {
                try {
                    const validToken = jwt.verify(authToken, JWT_SECRET);
                    if (validToken) {
                        res.render("logout", { title: "This is the logout page" });
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
  res.render("createRes", { title: "Create a New Resource :)" });  
})

module.exports = router;
