const dbConn = require("../../config/db.config");

let Person = function(person) {
    this.PersonID = person.PersonID;
    this.LastName = person.LastName;
    this.FirstName = person.FirstName;
    this.Address = person.Address;
    this.City = person.City;
}

// Get all persons
Person.getAllPersons = (result) => {
    dbConn.query("SELECT * FROM Persons", (err, res) => {
        if(err){
            console.log("Error while fetching persons", err);
            result(null, err);
        } else{
            console.log("persons fetch successfuly.");
            result(null, res);
        }
    })
}

// Get person by ID
Person.getPersonById = (id, result) =>{
    dbConn.query(`SELECT * FROM Persons WHERE PersonID =${id}`, (err, res)=>{
        if(err){
            console.log("error while fetching employee by id", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// Create new person
Person.createPerson = (personData, result)=>{
      dbConn.query("INSERT INTO Persons SET ?", personData, (err, res)=>{
          if(err){
              console.log("Error while inserting person");
              result(null, {status: false, message: err});
          }else{
              console.log("Person created successfully.");
              result(null, {status: true, message: "Person created successfully.", insertId: res.id});
          }
      })
}

// Update person
Person.updatePerson = (id, personData, result)=>{
    dbConn.query("UPDATE Persons SET PersonID = ?, LastName = ?, FirstName = ?, Address = ?, City = ? WHERE PersonID = ?", [personData.PersonID, personData.LastName, personData.FirstName, personData.Address, personData.City, id], (err, res)=>{
        if(err){
            console.log("Error while updating");
            result(null, err);
        }else{
            console.log("person created successfully.");
            result(null, res);
        }
    })
}

// Delete person
Person.deletePerson = (id, result)=>{
    dbConn.query("DELETE FROM Persons WHERE PersonID = ?", [id], (err, res)=>{
        if(err){
            console.log("Error while deleting the record.");
            result(null, err);
        }
        else{
            console.log("Person delete successfully.");
            result(null, res);
        }
    })
}

module.exports = Person;