const express = require("express");
const todoModel = require("./models/todos.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.static("./public"));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fullstack-todo-k50r.onrender.com",
    ],
    credentials: true,
  }),
);

module.exports = app;

// todos POST API

app.post("/api/todo", async (req, res) => {
  const { task, priority, category, completed } = req.body;

  const todos = await todoModel.create({
    task,
    priority,
    category,
    completed,
  });

  res.status(201).json({
    message: "Todo Created Successfully!",
    todos,
  });
});

// todos GET API

app.get("/api/todo", async (req, res) => {
  const todos = await todoModel.find();
  res.status(200).json({
    message: "Todos fetched successfully!",
    todos,
  });
});

// todos DELETE API

app.delete("/api/todo/:id", async (req, res) => {
  const id = req.params.id;

  const todos = await todoModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Todo Delete Successfully!",
    todos,
  });
});

// todos PATCH API
app.patch("/api/todo/:id", async (req, res) => {
  const id = req.params.id;
  const { task, priority, category, completed } = req.body;

  const todos = await todoModel.findByIdAndUpdate(id, {
    task,
    priority,
    category,
    completed,
  });

  res.status(200).json({
    message: "Task Update successfully!",
    todos,
  });
});
