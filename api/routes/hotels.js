import express from "express"
import { createHotel, deleteOneHotelById, getAllHotel, getOneHotelById, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin } from "../utility/verifyToken.js"

const router = express.Router()

//Create

router.post("/",verifyAdmin, createHotel )

//Update

router.put("/:id",verifyAdmin, updateHotel)
      
//Delete

router.delete("/:id",verifyAdmin, deleteOneHotelById)
  

//Get

router.get("/:id",verifyAdmin,getOneHotelById)
  

//Get All

router.get("/",getAllHotel)
  



export default router;


