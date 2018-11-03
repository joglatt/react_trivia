const mongoose = require("mongoose");
const db = require("../utils/database/models/");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia");

const triviaSeed = [
  {
    question: "Where is the purpose of the alt attribute on images?",
    a1: "Stores an alternate src in case the primary image link is broken",
    a2: "Stores alternate information for the image if it does not render",
    a3: "Stores an audio clip describing the image for hearing impaired",
    a4: "Alt is not a real attribute",
    correct: "Stores alternate information for image if the image cannot render"
  },
  {
    question: "What type of technology is React?",
    a1: "Language",
    a2: "Framework",
    a3: "Library",
    a4: "Database",
    correct: "Library"
  },
  {
    question:
      "What is the difference between the == and === equality operators?",
    a1: "Only one sets the value of a variable",
    a2: "Only one is the correct syntax",
    a3: "Only one returns a value",
    a4: "Only one checks for type",
    correct: "Only one checks for type"
  },
  {
    question:
      "Which technology can be used in the place of callback functions?",
    a1: "Promises",
    a2: "REST",
    a3: "ES6",
    a4: "forEach",
    correct: "Promises"
  },
  {
    question: "Which of these values is NOT defined as falsy in Javascript?",
    a1: "0",
    a2: "null",
    a3: "-1",
    a4: "undefined",
    correct: "-1"
  },
  {
    question: "What is the purpose of Big O Notation?",
    a1: "Calculates the size of a database",
    a2: "Short hand syntax for commenting your code",
    a3: "Describes time complexity of an algorithm",
    a4: "Standardizes pseudo coding for more universal readability",
    correct: "Desrcibes time complexity of an algorithm"
  },
  {
    question: "What is a callback function?",
    a1: "A function that calls itself repeatedly in a manner similar to a loop",
    a2: "A function that resets and returns to a predetermined starting point",
    a3: "A function that can access the scope of previously called functions",
    a4: "A function that is passed to another function as an argument",
    correct: "A function that is passed to another function as an argument"
  },
  {
    question: "What is the difference between ids and classes in CSS?",
    a1: "They are used on different element types ",
    a2: "They are completley interchangable",
    a3: "Only an id can be used for DOM manipulation",
    a4: "Classes can be reused and an id should be unique",
    correct: "Classes can be reused and an id should be unique"
  },
  {
    question: "What is the difference between the span and div tags?",
    a1: "The only difference is semantics",
    a2: "Spans are inline and divs are block elements",
    a3: "Span automatically flexes to respond to page resizing",
    a4: "Only div is supported by all browsers",
    correct: "Spans are inline and divs are block elements"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "Which of these is useful for debugging code?",
    a1: "alert",
    a2: "debugger.js",
    a3: "console.log",
    a4: "test",
    correct: "console.log"
  },
  {
    question: "The condition of an if/else statement must be enclosed in what?",
    a1: "parentheses",
    a2: "quotation marks",
    a3: "brackets",
    a4: "braces/curly brackets",
    correct: "parentheses"
  },
  {
    question: "How do you target an element within an array?",
    a1: "location",
    a2: "key",
    a3: "value",
    a4: "index",
    correct: "index"
  },
  {
    question: "Which of these methods requires a callback function?",
    a1: "pop",
    a2: "map",
    a3: "length",
    a4: "splice",
    correct: "map"
  },
  {
    question: "What type of technology is npm?",
    a1: "Debugger",
    a2: "IDE",
    a3: "Terminal",
    a4: "Package Manager",
    correct: "Package Manager"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "Which of these should be avoided when using functional programming?",
    a1: "Side effects",
    a2: "Arrow Functions",
    a3: "Closures",
    a4: "",
    correct: "Side effects"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
  },
  {
    question: "How do you apply strict mode to a javascript program?",
    a1: "use strict",
    a2: "use strict mode ",
    a3: "strictMode",
    a4: "strict",
    correct: "use strict"
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
