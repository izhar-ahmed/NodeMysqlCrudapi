const express = require("express");
const router = express.Router();

const personController = require("../controllers/person.controller");

// Get all persons
router.get("/", personController.getPersonsList);

// Get person by Id
router.get("/:id", personController.getPersonById);

// Create new person
router.post("/", personController.createPerson);    

// Update person
router.put("/:id", personController.updatePerson);

// Delete person
router.delete("/:id", personController.deletePerson);

module.exports = router;