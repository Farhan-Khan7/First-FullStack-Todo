const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : String,
    priority : String,
    category : String, 
    completed : {
        type : Boolean,
        default : false
    }
})


const todoModel = mongoose.model("todosData" , todoSchema)

module.exports = todoModel