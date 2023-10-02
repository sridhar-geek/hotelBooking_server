        /**Package imports */
import express from 'express'

const router = express.Router()

/**Import functions */
import { registerUser } from '../Controllers/auth.js'


router.get('/register', registerUser)

export default router