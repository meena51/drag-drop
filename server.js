import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path'

//setup express App
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Home Route");
    res.json({msg:"Welcome"})
});

const PORT = process.env.PORT || 8085;
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})