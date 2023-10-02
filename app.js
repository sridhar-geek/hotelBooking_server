        /**Package imports */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import 'express-async-errors'
dotenv.config();
const app = express();

/**Import functions */
import authRoutes from './Routes/auth.js'
import hotelRoutes from './Routes/hotels.js'
import notFound from './Middleware/not-found.js'
import errorHandler from './Middleware/error-handler.js'

/**Middleware */
app.use(express.json())
app.use('/api/user', authRoutes)
app.use('/api/hotel', hotelRoutes)

app.get("/", (req, res) => {
  res.send("<h1>Welcome Page</h1>");
});

app.use(notFound)
app.use(errorHandler)

// function which Connectes to MongoDB 
const connection = async()=> {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB')
  } catch (error) {
    console.log(error.message)
  }
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  connection()
  console.log(`Server is listening on port ${PORT}`)
});

