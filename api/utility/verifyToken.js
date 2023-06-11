import  jwt  from "jsonwebtoken";
import { createError } from './error.js';




export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    console.log(token)
    if(!token) {
        return next(createError(401, 'YOU ARE NOT AUTHENTICATIED'))
    console.log(token)
    }
    jwt.verify(token,process.env.JWTKEY , (error, user)=>{
    if(error) return next(createError(403,"Token is not Valid"))
    req.user = user;
    next()
 })
}


 export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){

        }

        else{
            if(error) return next(createError(403,"Youm are not authorized"))
        }
    })
}



export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){

        }

        else{
            if(error) return next(createError(403,"Youm are not authorized"))
        }
    })
}