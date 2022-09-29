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