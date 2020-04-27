const mongoose = require("mongoose");

//creating the schema
const DriverSchema = mongoose.Schema({
  id : String,
  fullName: String,
  temporaryAddress: String,
  permanentAddress: String,
  phone: String,
  maritalStatus: String
});

module.exports = mongoose.model("Driver", DriverSchema);
