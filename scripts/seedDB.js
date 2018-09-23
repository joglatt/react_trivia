const mongoose = require("mongoose");
const db = require("../utils/database/models/");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia");

const triviaSeed = [
  {
    question: "Where is the purpose of the alt attribute on images",
    a1: "Stores an alternate src in case the primary image link is broken",
    a2: "Stores alternate information for image if the image cannot render",
    a3: "Stores an audio clip describing the image for hearing impaired",
    a4: "Alt is not a real attribute",
    correct: "Stores alternate information for image if the image cannot render",
  },
  {
    question: "What type of technology is React",
    a1: "Language",
    a2: "Framework",
    a3: "Library",
    a4: "Database",
    correct: "Library",
  },
  {
    question: "What is the difference between the == and === equality operators",
    a1: "Only one sets the value of a variable",
    a2: "Only one is the correct syntax",
    a3: "Only one returns a value",
    a4: "Only one checks for type",
    correct:  "Only one checks for type",
  },
  {
    question:  "Which technology can be used in the place of callback functions?",
    a1: "Promises",
    a2: "REST",
    a3: "ES6",
    a4: "forEach",
    correct: "Promises"
  },
  {
    question:  "Which of these values is NOT defined as falsy in Javascript?",
    a1: "0",
    a2: "null",
    a3: "-1",
    a4: "undefined",
    correct: "-1"
  },
  {
    question:  "What is the purpose of Big O Notation?",
    a1: "Calculates the size of a database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
  },
  {
    question:  "What does ",
    a1: "Calculatibng the size of database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
  },
  {
    question:  "What is the purpose of Big O Notation?",
    a1: "Calculatibng the size of database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
  },
  {
    question:  "What is the purpose of Big O Notation?",
    a1: "Calculatibng the size of database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
  },
  {
    question:  "What is the purpose of Big O Notation?",
    a1: "Calculatibng the size of database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
  },
  {
    question:  "What is the purpose of Big O Notation?",
    a1: "Calculatibng the size of database",
    a2: "Short hand syntax for commenting your code",
    a3: "Desrcibes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm",
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
