module.exports = app => {
    const tasks = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new task
    router.post("/", tasks.create);
  
    // Retrieve all tasks
    router.get("/", tasks.findAll);
  
    // Retrieve all published tasks
    router.get("/published", tasks.findAllPublished);
  
    // Retrieve a single task with id
    router.get("/:id", tasks.findOne);
  
    // Update a task with id
    router.put("/:id", tasks.update);
  
    // Delete a task with id
    router.delete("/:id", tasks.delete);
  
    // Delete all tasks
    router.delete("/", tasks.deleteAll);
  
    app.use('/api/tasks', router);
  };