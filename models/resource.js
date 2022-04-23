const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    from: {
        type: String
    },
    about: {
        type: String
    }
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;