const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triviaSchema = new Schema({
  question: { type: String, required: true },
  a1: { type: String, required: true },
  a2: { type: String, required: true },
  a3: { type: String, required: true },
  a4: { type: String, required: true },
  correct: { type: String, required: true }
});

const Trivia = mongoose.model("Trivia", triviaSchema);

module.exports = Trivia;
