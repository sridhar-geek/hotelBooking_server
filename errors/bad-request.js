import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api.js'

// this error class is to give status 400 to user
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;