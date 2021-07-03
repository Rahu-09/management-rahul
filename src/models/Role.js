const mongoose=require("mongoose");
const validator=require("validator");

const roleSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    scopes :[String],
    createdDateTime: {
        type: Date,
        default: Date.now
    },
    updatedDateTime: {
        type: Date,
        default: Date.now
    }
})

const role=new mongoose.model('role',roleSchema);

module.exports= role;