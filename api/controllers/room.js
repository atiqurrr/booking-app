import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";



export const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
        } catch (error) {
            next(error)
        }

        res.status(200).json(saveRoom)

    } catch (error) {
        next(error)
    }
}



// update rooms 
export const  updateRoom =async(req,res,next)=>{
       

    try {  
        const updateRooms = await Room.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true})
        res.status(200).json(updateRooms)




    } catch (error) {
        next(error)
    }
    }
    
    
    // delete one room by id
    export const deleteOneRoomById =async(req,res,next)=>{ 
        const hotelId = req.params.hotelid;
    try {  
        const deleteOneRoom = await Room.findByIdAndDelete(req.params.id)
     try {
        await Hotel.findByIdAndUpdate(hotelId, {$pull:{rooms:req.params.id}})
     } catch (error) {
        next(error)
     }


        res.status(200).json({
        deleteHotelDetails:deleteOneRoom,
        message:"One Room delete Ok By His Id Number"
        })


    } catch (error) {
        next(error)
    }
    }
    
    
    // get one room by id
    export const getOneRoomById=async(req,res,next)=>{
    
    
    try {  
        const getOneRoom = await Room.findById(req.params.id)
        if(getOneRoom){ 
        res.status(200).json(getOneRoom)
        }
        else{
            return res.send("Your Item  is not ableable That You Are Search")
        }
    } catch (error) {
        next(error)
    }
    }
    
    
    // getAll hotel
    
    export const getAllRoom = async(req,res,next)=>{
    
        try {  
            const getAllRooms = await Room.find()
            if(getAllRooms){ 
            res.status(200).json(getAllRooms)
            }
            else{
                return res.send("No Data In Your DataBase ")
            }
        } catch (error) {
            next(error)
        }
    }