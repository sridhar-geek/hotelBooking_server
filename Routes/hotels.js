import express from 'express'

const router = express.Router()

            /**Imported functions */
import {createHotel, getAllHotels, getSingleHotel, deleteHotel, updateHotel} from '../Controllers/hotels.js'

router.post('/add' , createHotel)
router.get('/', getAllHotels)
router.route('/:id').get(getSingleHotel).delete(deleteHotel).put(updateHotel)

export default router