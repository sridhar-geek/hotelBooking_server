import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

// this error class is to give status 404 to user
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
