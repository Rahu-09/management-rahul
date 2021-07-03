const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:[true,"Email is Necessary"],
        unique:[true,"Email Should be unique"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    mobile:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    roleId:{
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

const user=new mongoose.model('user',userSchema);

module.exports= user;