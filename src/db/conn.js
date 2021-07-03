const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://Student-api:Rahul123@cluster0.afez0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successfully");
}).catch((err)=>{
    console.log(err);
})