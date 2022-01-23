const mongoose = require("mongoose");

const ManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  surname: {
    type: String,
    index: true
  },
  birthDate: {
    type: Date
  },
  salary: {
    type: Number
  }
});

const Manager = mongoose.model('Manager', ManagerSchema);

module.exports = {
  Manager: Manager
}