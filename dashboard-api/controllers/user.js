// if our user.js file is at app/models/user.js
var express = require('express');
var router = express.Router();
var User = require('../models/User');

// on routes that end in /bears
// ----------------------------------------------------
router.route('/')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {

        var user = new User();      // create a new instance of the Bear model
        user.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    })

    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function (req, res) {

        // use our bear model to find the bear we want
        User.findById(req.params.user_id, function (err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;  // update the bears info

            // save the bear
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.export = router;