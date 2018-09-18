const mongoose = require("mongoose");
const db = require("../utils/database/models/");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia");

const triviaSeed = [
  {
    question: "Where is A located in the alphabet?",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    correct: "1"
  },
  {
    question: "Where is B located in the alphabet?",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    correct: "2"
  },
  {
    question: "Where is C located in the alphabet?",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    correct: "3"
  },
  {
    question:  "Where is D located in the alphabet?",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    correct: "4"
  }
];

db.Trivia.remove({})
  .then(() => db.Trivia.collection.insertMany(triviaSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
