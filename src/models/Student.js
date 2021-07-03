const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    schoolId:{
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

const student=new mongoose.model('student',studentSchema);

module.exports= student;