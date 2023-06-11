import User from "../models/User.js"
import bcrypt  from 'bcryptjs'
import { createError } from "../utility/error.js"
import jwt  from "jsonwebtoken"
import 'dotenv/config'
export const register = async(req, res, next)=>{

 try {
const salt = bcrypt.genSaltSync(10)

 const hash =  bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })
    await newUser.save()
    return res.status(200).send({
        message:"register is ok",
        data:newUser
    })

 } catch (error) {
    next(error)
 }

}

export const login = async(req,res,next)=>{
    try{  
    const user = await User.findOne({username:req.body.username})
    console.log(user, " chack user")
    if(!user) return next(createError(404, "User not found!"))

    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect) return next(createError(404, "Username or Password Incorrect"))
    
  const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWTKEY, )
    const {password, isAdmin, ...otherDetails} = user._doc;
    res.cookie("access_token", token, {httpOnly:true}).status(200).send({
        message:"login is ok",
        loginData:{...otherDetails}
    })

} catch(err){
   next(err)
}
} 


