// import the model
const Todo=require("../models/Todo");

// define route handler

exports.createTodo=async(req,res)=>{
    try{
        // extract title and description from request body 
        const {title,description}=req.body;
        // create a new todo object and insert in db
        const response=await Todo.create
    }
}