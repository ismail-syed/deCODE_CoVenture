// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// create a schema
var CompanySchema = new Schema({
  name: String,
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  goalReferences: [{
     type: Schema.Types.ObjectId, ref: 'Goal'
  }],
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Company = mongoose.model('Company', CompanySchema);

// make this available to our users in our Node applications
module.exports = Company;
