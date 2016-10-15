// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var GoalSchema = new Schema({
    start: {
        type: Date,
        default: Date.now
    },

    end: {
        type: Date,
        default: Date.now
    },

    variableLabel: {
      type: String,
      required: true
    },

    variableValue: {
      type: String,
      required: true
    },

    variableAction: {
      type: String,
      required: true
    },

    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },

    companyId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true
    },

    // userId : {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // },

    occurrence: {
        type: String,
        enum: ['WEEKLY', 'MONTHLY', 'YEARLY', 'QUARTERLY'],
        uppercase: true,
        default: 'WEEKLY'
    }
});

// the schema is useless so far
// we need to create a model using it
var Goal = mongoose.model('Goal', GoalSchema);

// make this available to our users in our Node applications
module.exports = Goal;
