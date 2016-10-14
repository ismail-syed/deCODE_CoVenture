var express = require('express');
var router = express.Router();
var Company = require('../models/Company');

// on routes that end in /bears
// ----------------------------------------------------
router.route('/')

    // create a company (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {
        var company = new Company();      // create a new instance of the Company model
        company.name = req.body.name;

        // save the company and check for errors
        company.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Company created!' });
        });
    })

    .get(function (req, res) {
        Company.find({})
        .populate('goalReferences')
        .exec(function(err, docs){
          res.json(docs);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/:company_id')
  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function(req, res) {
      Company.findById(req.params.company_id, function(err, user) {
          if (err)
              res.send(err);
          res.json(user);
      });
  })

  // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function (req, res) {
      // use our bear model to find the bear we want
      Company.findById(req.params.company_id, function (err, user) {

          if (err)
              res.send(err);

          user.name = req.body.name;  // update the bears info

          // save the bear
          user.save(function (err) {
              if (err)
                  res.send(err);

              res.json({ message: 'Company updated!' });
          });
      });
  })

  // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
  .delete(function (req, res) {
      Company.remove({
          _id: req.params.company_id
      }, function (err, user) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });

module.exports = router;
