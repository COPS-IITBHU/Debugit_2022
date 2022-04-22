const mongoose= require("mongoose");
const userObj = new mongoose.Schema({
    username :{
        type:String,
        require:true,
        min:4,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
         max:40,
         min:10,
    },
    password:{
        type:String,
        require:true,
        min:5,
    },
},{
    timestamps:true,
}
);
module.exports=mongoose.model("User",userObj);