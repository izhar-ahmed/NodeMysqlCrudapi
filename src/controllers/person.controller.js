
const personModel = require("../models/person.model");

//Get all persons record
exports.getPersonsList = (req, res) =>{
    // console.log("Here all person list");
    personModel.getAllPersons((err, persons) =>{
        if(err)
        res.send(err);
        console.log("persons", persons);
        res.send(persons);
    })
}

//Get person by ID
exports.getPersonById = (req, res) =>{
    // console.log("Person by id");
    personModel.getPersonById(req.params.id, (err, person)=>{
        if(err)
        res.send(err);
        console.log("Single person data");
        res.send(person);
    })
}

//Create new person
exports.createPerson = (req, res)=>{
   
    const personData = new personModel(req.body);
    console.log(personData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({Success: false, message: "Please fill all field."});
    }
    else
    {
        console.log("valid data");
        personModel.createPerson(personData, (err, person)=>{
            if(err)
                
              res.send(err);
              res.json({Success: true, message: "person created successfully.", data: person});
            
        })
    }
}


// Update person by ID
exports.updatePerson = (req, res) =>{
    const personData = new personModel(req.body);
    console.log(personData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({Success: false, message: "Please fill all field."});
    }
    else
    {
        console.log("valid data");
        personModel.updatePerson(req.params.id, personData, (err, person)=>{
            if(err)
                
              res.send(err);
              res.json({Success: true, message: "person updated successfully.", data: person});
            
        })
    }
}

// Delete person by ID
exports.deletePerson = (req, res)=>{
    personModel.deletePerson(req.params.id, (err, person)=>{
        if(err)
        res.send(err);
        res.json({Success: true, message: "person deleted successfully.", data: person});

    })
}