const Student = require('../../models/User.js');
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');



exports.findOne(
  {email: req.body.email},
  function(err, user){
    if(err) throw err;
    if(user){
      user.comparePassword(req.body.password, function(err, isMatch){
        if(err) throw err;
        res.json(user);
      });
    }
    else{
      res.status(404).send("Invalid login info");
    }
  }
)
