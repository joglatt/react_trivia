const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triviaSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Trivia = mongoose.model("Trivia", triviaSchema);

module.exports = Trivia;
