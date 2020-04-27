const Bus = require('../../models/Bus.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Bus.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Student Details."
    });
  });
};

exports.create = (req, res) => {

  console.log('--- dumping data ---');
  console.log(req.body);
  console.log('-----end-----');
  //to validate the request
  if(!req.body.id) {
    return res.status(400).send({
      message: "Student content cannot be empty"
    });
  }

  //create a student
  const busOne = new Bus({
    id : req.body.id,
    studentName: req.body.studentName,
    class: req.body.class,
    section: req.body.section,
    parentName: req.body.parentName,
    parentNumber: req.body.parentNumber,
    address: req.body.address
  });
  console.log(busOne);
  //save the note to the database
  busOne.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occured while creating the Driver"
    });
  });
};

//delete the note with the noteId
exports.delete = (req, res) => {
  Bus.findByIdAndRemove(req.params.busId)
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Bus not found with id " + req.params.busId
        });
      }
      res.send({message: "Bus deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Bus not found with id " + req.params.busId
      });
    }
    return res.status(500).send({
      message: "Could not delete Bus with id " + req.params.busId
    });
  });
};

//to update the note with the noteId
exports.update = (req, res) => {
  // Validate Request
  if(!req.body.id) {
    return res.status(400).send({
      message: "Bus content can not be empty"
    });
  }

  // Find note and update it with the request body
  Bus.findByIdAndUpdate(req.params.busId, {
    id : req.body.id,
    studentName: req.body.studentName,
    class: req.body.class,
    section: req.body.section,
    parentName: req.body.parentName,
    parentNumber: req.body.parentNumber,
    address: req.body.address
  }, {new: true})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Bus not found with id " + req.params.busId
        });
      }
      res.send(data);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Bus not found with id " + req.params.busId
      });
    }
    return res.status(500).send({
      message: "Bus updating Driver with id " + req.params.busId
    });
  });
};
