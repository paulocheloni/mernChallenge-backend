const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jobMethods = require('./methods/jobMethods');

function validator(val) {
  return /[A-Z]/i.test(val);
}

const jobSchema = new mongoose.Schema({
  jobName: {
    type: String,
    required: true,
    validate: {
      validator,
      message: (props) => `props ${props} is not a valid jobName`,
    },
    unique: true,
  },
});

jobSchema.methods = jobMethods();
jobSchema.plugin(uniqueValidator);

const Job = mongoose.models.Job ?? mongoose.model('Job', jobSchema);

module.exports = Job;
