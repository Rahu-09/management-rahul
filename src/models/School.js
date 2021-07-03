const mongoose=require("mongoose");
const validator=require("validator");

const schoolSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    createdDateTime: {
        type: Date,
        default: Date.now
    },
    updatedDateTime: {
        type: Date,
        default: Date.now
    }
})

const school=new mongoose.model('school',schoolSchema);

module.exports= school;