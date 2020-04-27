const Student = require('../../models/User.js');
const bcrypt = require("bcryptjs");

exports.findAll = (req, res) => {
  Student.find()
    .then(users => {
      res.send(users);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data."
    });
  });
};


//create and save the new note
exports.create = (req, res) => {
  //to validate the request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Student content cannot be empty"
    });
  }

  //create a driver
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    date: Date.now()
  });

  bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(student.password, salt, (err, hash) => {
      if (err) throw err;
      student.password = hash;
      //save the note to the database
      student.save()
        .then(data => {
          res.send(data);
        }).catch(err => {
        res.status(500).send({
          message: err.message || "Error occured while creating the student"
        });
      });
    });
  });

};

