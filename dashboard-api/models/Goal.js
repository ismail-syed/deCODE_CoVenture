// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var GoalSchema = new Schema({
    start: {
        required: true,
        type: Date,
        default: Date.now
    },
    end: {
        required: true,
        type: Date,
        default: Date.now
    },
    variableLabel: String,
    variableValue: String,
    variableAction: String,
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
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
