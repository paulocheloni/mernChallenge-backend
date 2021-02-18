class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'validationError';
    this.status = 400;
  }
}

module.exports = ValidationError;
