const dbConnect = require('../../utils/dbconnects');

function jobServices() {
  const methods = {};

  methods.getAll = async function getAll() {
    await dbConnect();
    return this.model('Job').find({});
  };

  methods.createJob = async function createJob(job) {
    await dbConnect();
    return this.model('Job').create({ job });
  };

  return methods;
}

module.exports = jobServices;
