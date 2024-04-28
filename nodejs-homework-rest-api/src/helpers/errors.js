class CustomError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParamsError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ConflictError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

class AuthError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class VerificationError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ForbiddenError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 403;
  }
}

module.exports = {
  CustomError,
  ValidationError,
  WrongParamsError,
  ConflictError,
  AuthError,
  VerificationError,
  BadRequestError,
  ForbiddenError,
};
