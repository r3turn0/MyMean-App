// this is an module.exports function that takes two parameters unlike module.exports object in dbconfig
// it takes two parameters and then returns an object called Tasks
module.exports = (sequelize, Sequelize) => {
    const Tasks = sequelize.define("tasks", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tasks;
  };