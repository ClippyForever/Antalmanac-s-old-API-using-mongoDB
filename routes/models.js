const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schedulesSchemna = new Schema({
  index: [Number],
  events: {
    type: []
  }
});

const useraSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  schedules: {
    type: []
  }
});

const Users = mongoose.model("users", useraSchema);
module.exports = Users;
