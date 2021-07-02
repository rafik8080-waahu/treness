const mongoose = require("mongoose")

const traineesSchema=mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    destination: {
        type:String,
        reqiured:true,
    },
    email: {
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
},
    {
        timestamps:true,
    })

    const Trainee = mongoose.model("Trainee",traineesSchema);
    module.exports = Trainee; 