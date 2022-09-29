// This creates an express ap with a json body parser and cors middlewares.
// Notice origin is set to localhost:8081 while we listen in port 8080 for incoming requests

const express = require("express"); // web framework for building REST APIs
const cors = require("cors"); // provides middleware to enable CORS with various options
const app = express();

var coreOptions = {
    origin: "http://localhost:8081" // mySQL database points to port 8080 or 8081
}

app.use(cors(coreOptions));

// parse requests of content-type application/json
app.use(express.json());

//parse requests of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const db = require("./models");
// In development, you may need to drop existing tables and re-sync database. Just use force: true
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Dropping and re-syncing db.");
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the MyMEAN App",
        description: "A MySQL, Express, Angular, Node.js Task List Application",
        objective: "To build a Task List application. The server will listen for any incoming requests to the API designated by routes of the application. This is where CRUD operations are performed defined by the controller. The controller will make queries to the database modeled in model and is exported in index where it will sync with the server application."
    });
});

require("./routes/routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});