const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const controller = require("./utils/database/controller");

app.use(express.static("client/build"));
// MIDDLEWARE
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//Adding routes for API
app.use(controller);
//Database connection
mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/trivia" , { useNewUrlParser: true });

// Routes
// require("./config/routes/user.js")(app);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
