const express= require("express");
const Favorite = require("../New/Favorite");
const router = express.Router();
// const mongodb=require("mongodb");
router.post("/favorite", async (req,res)=>{
    try {
        const newFavorite = new Favorite(req.body)
    const favorite = await newFavorite.save();
    res.status(200).json(favorite);
    } catch (err) {
        res.status(500).json(err);
    }
    
})

router.get("/favorite", async (req,res)=>{
    try {
         const favorites = await Favorite.find();
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/favorite/delete",async(req,res)=>{
    console.log(req.body);
       try {
           const id=req.body.id;
           console.log(id);
           await Favorite.findByIdAndDelete({"_id":id});
           res.status(200).json("Pin deleted successfully");
       } catch (error) {
           console.log(error);
       }
})
module.exports = router;