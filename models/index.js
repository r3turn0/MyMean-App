// Create your connection to the database here then sync it with the server in server.js

const dbConfig = require("../config/dbconfig.js"); // not added to the db module because its sensitive data

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// exporting the db

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./model.js")(sequelize, Sequelize);

module.exports = db;