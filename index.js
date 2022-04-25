const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();

//Setup server port
const port = process.env.PORT || 3000;

// Use body parser url encoded
app.use(bodyParser.urlencoded({extended: false}));

// Use body parser json
app.use(bodyParser.json());

// Define root route
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// Import person routes
const personRoutes = require("./src/routes/person.route");

//Create person routes
app.use("/api/v1/person", personRoutes);


//Listen to port
app.listen(port, () => {
    console.log(`Server in running on port ${port}`);
})