const mysql = require("mysql");

//Create mysql connection
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1280",
    database: "testdb"
})

dbConn.connect(function(err){
    if(!err){
        console.log("Connected Successfully.");
    }else{
        console.log("Connection Failed");
    }
})

module.exports = dbConn;