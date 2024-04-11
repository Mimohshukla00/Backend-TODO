// create controller of todo list
const Todo = require("../models/Todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;
    // create a new todo object and insert in db
    const response = await Todo.create({ title, description });
    // send a json response
    res.status(200).json({
      status: "success",
      data: response,
      message: "Todo created successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      status: "error",
      data: "internal server error",
      message: "Server error",
    });
  }
};
