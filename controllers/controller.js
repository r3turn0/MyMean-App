const db = require("../models/index.js");
const Tasks = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a task
  const task = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed ? req.body.completed : false
  };

  // Save task in the database
  Tasks.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the task."
      });
    });
};

// Retrieve all tasks from the database.
exports.findAll = (req, res) => {
  
};

// Find a single task with an id
exports.findOne = (req, res) => {
  
};

// Update a task by the id in the request
exports.update = (req, res) => {
  
};

// Delete a task with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all tasks from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all completed tasks
exports.findAllCompleted = (req, res) => {
  
};