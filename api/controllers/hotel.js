import Hotel from "../models/Hotel.js";


// create hotel 

export const createHotel =async(req,res,next)=> {
const newHotel = new Hotel(req.body)

try{ 
 const saveHotel = await newHotel.save()
 res.status(200).json(saveHotel)
}catch(error) {
 next(error)
}
}


// update hotel 
export const  updateHotel =async(req,res,next)=>{


try {  
    const updateHotels = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true})
    res.status(200).json(updateHotels)
} catch (error) {
    next(error)
}
}


// delete one hotel by id
export const deleteOneHotelById =async(req,res,next)=>{ 
try {  
    const deleteOneHotel = await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json({
    deleteHotelDetails:deleteOneHotel,
    message:"One Hotel delete Ok By His Id Number"
    })
} catch (error) {
    next(error)
}
}


// get one hotel by id
export const getOneHotelById=async(req,res,next)=>{


try {  
    const getOneHotel = await Hotel.findById(req.params.id)
    if(getOneHotel){ 
    res.status(200).json(getOneHotel)
    }
    else{
        return res.send("Your Item  is not ableable That You Are Search")
    }
} catch (error) {
    next(error)
}
}


// getAll hotel

export const getAllHotel = async(req,res,next)=>{

    try {  
        const getAllHotel = await Hotel.find()
        if(getAllHotel){ 
        res.status(200).json(getAllHotel)
        }
        else{
            return res.send("No Data In Your DataBase ")
        }
    } catch (error) {
        next(error)
    }
}
