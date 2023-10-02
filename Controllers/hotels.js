import {StatusCodes} from 'http-status-codes'

/**Imports functions */
import { Hotel } from "../Model/hotel.js"
import NotFoundError from '../errors/not-found.js'


// desc: create new hotel   route : /api/hotel/add
export const createHotel = async (req, res) => {
     const newHotel = await Hotel.create(req.body)
     res.status(StatusCodes.CREATED).json(newHotel)
}

// desc: get single hotel details  route : /api/hotel/:id
export const getAllHotels = async (req, res) => {
     const hotels = await Hotel.find()
     res.status(StatusCodes.OK).json(hotels)
}

// desc: get single Hotel details   route : /api/hotel/:id
export const getSingleHotel = async (req, res) => {
     const hotelId  = req.params.id
     const hotel = await Hotel.findById(hotelId)
     if(!hotel)
          throw new NotFoundError('hotel not found')
     res.status(StatusCodes.OK).json(hotel)
}

// desc: update existing hotel   route : /api/hotel/:id
export const updateHotel = async (req,res) => {
     const  hotelId  = req.params.id;
     const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, {$set: req.body}, {new: true})
          if (!updatedHotel) throw new NotFoundError("hotel not found");
     res.status(StatusCodes.OK).json(updatedHotel)
}

// desc: delelte existing hotel   route : /api/hotel/:id
export const deleteHotel = async (req, res) => {
     const  hotelId  = req.params.id;
     const deletedHotel = await Hotel.findByIdAndDelete(hotelId)
          if (!deletedHotel) throw new NotFoundError("hotel not found");
     res.status(StatusCodes.OK).json('Hotel Deleted Successfully')
}