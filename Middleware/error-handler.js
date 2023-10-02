import { StatusCodes } from 'http-status-codes'

/**Imports from Other files */
import CustomAPIError from '../errors/custom-api.js'


const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'something went wrong try again later'
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  if(err.name === 'ValidationError'){
      customError.msg = Object.values(err.errors)
      .map( (item) => item.message).join(',')
      customError.statusCode = 400
  }

  if(err.code && err.code === 11000){
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} feild, please enter another value`
    customError.statusCode = 400
  }

  if(err.name === 'CastError'){
    CustomAPIError.msg = `No item found with id : ${err.value}`
    customError.statusCode = 404
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

export default errorHandlerMiddleware;
