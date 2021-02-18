const jobServices = require('../services/jobServices');

async function createOne(req, res) {
  try {
    const { jobName } = req.body;
    const { authorization } = req.headers;
    const respObj = await jobServices.createJob(jobName, authorization);
    if (respObj.valid) return res.json(201, `job ${jobName} criado com sucesso`);
    throw new Error(respObj.message);
  } catch (err) {
    return res.json(err.message);
  }
}

async function readOne(req, res, next) {
  if (req.body) jobServices.readJob(req, res, next);
}

async function readAll(req, res, next) {
  console.log('reading all jobs');
}

async function updateOne(req, res, next) {
  console.log('update a jobs');
}

async function deleteOne(req, res, next) {
  console.log('deletes a job');
}

// async read(req, res, next) {

// },
// async update(req, res, next) {

// },
// async delete(req, res, next) {

// },

module.exports = {
  createOne,
  readOne,
  readAll,
  updateOne,
  deleteOne,
};
