const express = require("express");
const router = express.Router();
const Users = require("./models");

router.get("/api/:name", function(req, res, next) {
  Users.findOne({ name: req.params.name }).then(function(user) {
    if (user == null) {
      Users.create({ name: req.params.name }).then(function(users) {
        res.send(users);
      });
    } else res.send(user);
  });
});

router.post("/api", function(req, res, next) {
  Users.create(req.body)
    .then(function(users) {
      res.send(users);
    })
    .catch(next);
});

router.delete("/api/:name", function(req, res, next) {
  Users.findOneAndRemove({ name: req.params.name }).then(function(user) {
    res.send(user);
  });
});

router.put("/api/:name", function(req, res, next) {
  Users.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true
  }).then(function(user) {
    res.send(user);
  });
});
module.exports = router;
