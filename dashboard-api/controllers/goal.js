var express = require('express');
var router = express.Router();
var Goal = require('../models/Goal');

// on routes that end in /bears
// ----------------------------------------------------
router.route('/')

    // create a goal (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {
        var goal = new Goal();      // create a new instance of the Goal model
        goal.start = req.body.start;
        goal.end = req.body.end;

        // save the goal and check for errors
        goal.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Goal created!' });
        });
    })

    .get(function (req, res) {
        Goal.find(function (err, goals) {
            if (err)
                res.send(err);
            res.json(goals);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/:goal_id')
  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function(req, res) {
      Goal.findById(req.params.goal_id, function(err, user) {
          if (err)
              res.send(err);
          res.json(user);
      });
  })

  // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function (req, res) {
      // use our bear model to find the bear we want
      Goal.findById(req.params.goal_id, function (err, user) {

          if (err)
              res.send(err);

          user.name = req.body.name;  // update the bears info

          // save the bear
          user.save(function (err) {
              if (err)
                  res.send(err);

              res.json({ message: 'Goal updated!' });
          });
      });
  })

  // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
  .delete(function (req, res) {
      Goal.remove({
          _id: req.params.goal_id
      }, function (err, user) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });

module.exports = router;