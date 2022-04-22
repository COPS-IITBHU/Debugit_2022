const express= require("express");
const User = require("../New/User");
const bcrypt = require("bcrypt");
// const { findOne } = require("../New/User");
const router = express.Router();

router.post("/signUp", async (req,res)=>{
  try {
  const Body = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(Body.password ,salt);
  const ifUser = await User.findOne({email:Body.email});
  
    if(!ifUser){
    const newUser = new User({
      username : Body.username,
      email:Body.email,
      password:hashedPass,
    })
    const user = await newUser.save();
    res.status(200).json(user._id);
    }
  else{
    res.status(400).json("A user with this email already exist");
  }
}
  catch(err){
    res.status(500).json(err);
  }
})

router.post("/login",async (req,res) =>{
  try {
    const Body=req.body;
    const user = await User.findOne({username : Body.username})
    if(user==false){
      res.status(300).json("Invalid UserName or Password username")
    }
    const validatePass = await bcrypt.compare(Body.password,user.password);
    if(validatePass==false){
      res.status(400).json("Invalid UserName or Password pass");
    }
    res.status(200).json({id:user._id,username:user.username});
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;