const mongoose = require("mongoose");

const YoutuberSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  surname: {
    type: String,
    index: true
  }
});

const Youtuber = mongoose.model('Youtuber', YoutuberSchema);

module.exports = {
  Youtuber: Youtuber
}