let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regSchema = new Schema({
  userid: String,
  first: String,
  last: String,
  phone: Number,
  email: String,
  country: String,
  address: String,
  city: String,
  state: String,
  pincode: Number,
});
const regModel = mongoose.model("RegistrationDetails", regSchema);
module.exports = regModel;
