const Driver = require('../../models/Drivers.js');

//create and save the new note
exports.create = (req, res) => {

  console.log('--- dumping data ---');
  console.log(req.body);
  console.log('-----end-----');
  //to validate the request
  if(!req.body.id) {
    return res.status(400).send({
      message: "Driver content cannot be empty"
    });
  }

  //create a driver
  const driver = new Driver({
    id : req.body.id,
    fullName: req.body.fullName,
    temporaryAddress: req.body.temporaryAddress,
    permanentAddress: req.body.permanentAddress,
    phone: req.body.phone,
    maritalStatus: req.body.maritalStatus
  });
  console.log(driver);
  //save the note to the database
  driver.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occured while creating the Driver"
    });
  });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Driver.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Drivers."
    });
  });
};

//delete the note with the noteId
exports.delete = (req, res) => {
  Driver.findByIdAndRemove(req.params.driverId)
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Driver not found with id " + req.params.driverId
        });
      }
      res.send({message: "Driver deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Driver not found with id " + req.params.driverId
      });
    }
    return res.status(500).send({
      message: "Could not delete Driver with id " + req.params.driverId
    });
  });
};

//to update the note with the noteId
exports.update = (req, res) => {
  console.log('--- dumping data ---');
  console.log(req.body);
  console.log('-----end-----');
  // Validate Request
  if(!req.body.id) {
    return res.status(400).send({
      message: "Driver content can not be empty"
    });
  }

  // Find note and update it with the request body
  Driver.findByIdAndUpdate(req.params.driverId, {
    id : req.body.id,
    fullName: req.body.fullName,
    temporaryAddress: req.body.temporaryAddress,
    permanentAddress: req.body.permanentAddress,
    phone: req.body.phone,
    maritalStatus: req.body.maritalStatus
  }, {new: true})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Driver not found with id " + req.params.driverId
        });
      }
      res.send(data);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Driver not found with id " + req.params.driverId
      });
    }
    return res.status(500).send({
      message: "Error updating Driver with id " + req.params.driverId
    });
  });
};
