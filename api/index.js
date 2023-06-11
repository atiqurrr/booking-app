import express from "express";
import http from "http";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import 'dotenv/config'
import cookieParser from "cookie-parser";

const app = express();
const server = http.createServer(app)
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

const databaseConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("mongo db is connect")
    } catch (error) {
        console.log(error)
        console.log("mongo db is not connect")
    }
}

mongoose.connection.on("disconnection",()=>{
    console.log("mongo db is not connect")
})






server.listen(port,(req,res)=>{
    console.log(`Connected to Backend  At server : ${port}`)
    databaseConnect()
})


