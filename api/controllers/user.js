import User from "../models/User.js";



// update user
export const  updateUser =async(req,res,next)=>{


try {  
    const updateUsers = await User.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true})
    res.status(200).json(updateUsers)
} catch (error) {
    next(error)
}
}


// delete one user by id
export const deleteOneUserById =async(req,res,next)=>{ 
try {  
    const deleteOneUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
    deleteHotelDetails:deleteOneUser,
    message:"One user delete Ok By His Id Number"
    })
} catch (error) {
    next(error)
}
}


// get one user by id
export const getOneUserById=async(req,res,next)=>{


try {  
    const getOneUser = await User.findById(req.params.id)
    if(getOneUser){ 
    res.status(200).json(getOneUser)
    }
    else{
        return res.send("Your Item  is not ableable That You Are Search")
    }
} catch (error) {
    next(error)
}
}


// getAll user

export const getAllUser = async(req,res,next)=>{

    try {  
        const getAllUsers = await User.find()
        if(getAllUsers){ 
        res.status(200).json(getAllUsers)
        }
        else{
            return res.send("No Data In Your DataBase ")
        }
    } catch (error) {
        next(error)
    }
}
