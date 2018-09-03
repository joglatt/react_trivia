const router = require("express").Router();
const db = require("./models");

const triviaFunctions = {
  all: function(req, res) {
    db.Trivia.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// router.get("/api/users/:id", userFunctions.findById);

router.get("/api/getTrivia/", triviaFunctions.all);

// router.patch("/api/users/:id", userFunctions.update);

// router.get("/api/users", userFunctions.find);

module.exports = router;
