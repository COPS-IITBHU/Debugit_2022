const mongoose = require("mongoose");

const favObj= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    
    },
    locateLatitude:{
     type:Number,
     require:true
    },
    locateLongitude:{
        type:Number,
        require:true,
    }
},
{
  timestamps:true,
}
);

module.exports=mongoose.model("Favorite",favObj);