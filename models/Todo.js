const mongoose =require("mongoose")
const todoSchema=new  mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String}
})

module.exports =mongoose.model("todo",todoSchema)