const jobModel = require('../models/jobModel');
const ValidationError = require('../utils/errors/ValidationError');
const UnauthorizedError = require('../utils/errors/UnauthorizedError');

async function readJob(job) {
  if (job) {
    console.log('is validated read');
  } else {
    console.log('well take another look');
  }
}

async function handleAuthorization(token) {
  if (token.length !== 32 || !token) {
    return new UnauthorizedError('not authorized');
  }
  return {
    valid: true,
  };
}

async function validateEntry(jobName) {
  if (!jobName.jobName || typeof jobName.jobName !== 'string') {
    return new ValidationError('not valid data');
  }
  return {
    valid: true,
  };
}

async function createJob(jobName, authorization) {
  const token = handleAuthorization(authorization);
  if (!token.valid) return token;
  const job = validateEntry(jobName);
  if (!job.valid) return job;
  const { insertedId } = await jobModel.methods.createJob(jobName);
  return {
    insertedId, ...jobName, valid: true,
  };
}

async function readAlljobs() {
  console.log('read all jobs');
}

module.exports = {
  readJob,
  createJob,
  readAlljobs,
};
