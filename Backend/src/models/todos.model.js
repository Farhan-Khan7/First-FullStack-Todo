const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : String,
    priority : String,
    category : String, 
})


const todoModel = mongoose.model("todosData" , todoSchema)

module.exports = todoModel