
import express from "express"
import { deleteOneUserById, getAllUser, getOneUserById, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utility/verifyToken.js"







const router = express.Router()

/***
router.get("/authentication",verifyToken,(req,res,next)=>{
    res.send("Hello user are login")
})


router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello user are login and you can delate your account ")
})



router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello User You are admin you can delate all user account  ")
})

***/
//Update

router.put("/:id",verifyUser, updateUser)
      
//Delete

router.delete("/:id",verifyUser, deleteOneUserById)
  

//Get

router.get("/:id",verifyUser, getOneUserById)
  

//Get All

router.get("/",verifyAdmin,getAllUser)
  



export default router;




