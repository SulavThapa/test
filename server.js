const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get('/gpsinfo/:latitude/:longitude',(req,res)=>{
  latitude=req.params.latitude
  longitude=req.params.longitude
  result=`\n  {
      From Device: ${req.connection.remoteAddress.toString().split(':').pop()},
      Longitude: ${longitude},
      Latitude: ${latitude}
  }\n
      `
  res.json({latitude, longitude});
  console.log(result)
})

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const notes = require('./app/controller/controller.js');
const drivers = require('./app/controller/driver.controller.js');
const bus = require('./app/controller/busone.controller.js');
// const login = require('./app/controller/login.js');

// app.post('/login', login.findOne);

//testing only
app.get('/student', notes.findAll);
app.post('/student', notes.create);

//for driver
//to get the details
app.get('/drivers', drivers.findAll);
//to post the details
app.post('/drivers', drivers.create);
//to delete the driver
app.delete('/drivers/:driverId', drivers.delete);
//to update the driver
app.put('/drivers/:driverId', drivers.update);

//to get the student details in bus one
app.get('/busOneStudents', bus.findAll);
//to create a student details
app.post('/busOneStudents', bus.create);
//to delete the driver
app.delete('/busOneStudents/:busId', bus.delete);
//to update the driver
app.put('/busOneStudents/:busId', bus.update);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
