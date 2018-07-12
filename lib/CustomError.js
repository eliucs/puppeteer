class CustomError extends Error {
  constructor(name, message) {
    if (name !== undefined && message === undefined) {
      super(name);
      return;
    }

    super(message);
    this.name = name;
  }
}

module.exports = CustomError;
