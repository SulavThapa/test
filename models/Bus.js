const mongoose = require("mongoose");

//creating the schema
const BusSchema = mongoose.Schema({
  id : String,
  studentName: String,
  class: Number,
  section: String,
  parentName: String,
  parentNumber: String,
  address: String
});

module.exports = mongoose.model("Bus", BusSchema);