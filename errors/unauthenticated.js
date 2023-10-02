import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

// this error class is to give status 401 to user
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
