// let mongodb = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema({
  userid: String,
  password: String,
});

const usersModel = mongoose.model("LoginDetails", userShema);

module.exports = usersModel;
