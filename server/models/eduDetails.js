let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let edu = new Schema({
  userid: String,
  sclname: String,
  tper: String,
  tyop: Number,
  uname: String,
  twper: String,
  twyop: Number,
  bname: String,
  degree: String,
  perbranch: String,
  bper: String,
  byop: Number,
  mname: String,
  mper: String,
  myop: String,
});

let eduModel = mongoose.model("educationDetails", edu);

module.exports = eduModel;
