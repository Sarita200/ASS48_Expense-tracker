import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import User from "./models/User.js"
import Transaction from "./models/Transaction.js"


const app = express()
app.use(express.json());
app.use(cors());


const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if(conn){
        console.log(`MongoDB connected Successfully..📦`);
    }
};
connectDB();

app.get('/' , (req , res) =>{
    res.json({
        message : "Welcome to expense Tracker"
    })
})

app.post("/signup" , async (req , res ) =>{
    const  { fullName , email , password ,dob } = req.body;

    const user = new User({
        fullName ,
        email,
        password,
        dob
    });

    const savedUser = await  user.save();

    res,json({
        success :true,
        message : `SignUp Successfully`
    })
})

app.post("/login" , (req , res ) =>{})


const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>{
    console.log(`Server is Running on port ${PORT}`);
})
