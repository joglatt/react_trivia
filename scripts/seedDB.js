const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/trivia",
);

const triviaSeed = [
  {
    question: "1 2 3 or 4?",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    correct:" 1"
  },
  {
    question: "a b c or d?",
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    correct:" a"
  }
 
];

db.Trivia
  .remove({})
  .then(() => db.Trivia.collection.insertMany(triviaSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
