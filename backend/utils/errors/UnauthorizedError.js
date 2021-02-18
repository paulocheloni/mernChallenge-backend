class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'unauthorizedError';
    this.status = 401;
  }
}

module.exports = UnauthorizedError;
