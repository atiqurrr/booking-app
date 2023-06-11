import express from "express"
import { createRoom, deleteOneRoomById, getAllRoom, getOneRoomById } from "../controllers/room.js"
import { updateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../utility/verifyToken.js"
const router = express.Router()


//Create

router.post("/:hotelid",verifyAdmin, createRoom )

//Update

router.put("/:id",verifyAdmin, updateRoom)
      
//Delete

router.delete("/:id/:hotelid",verifyAdmin,deleteOneRoomById)
  

//Get

router.get("/:id",verifyAdmin,getOneRoomById)
  

//Get All

router.get("/",getAllRoom)
  








export default router;


