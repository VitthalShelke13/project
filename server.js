// const express = require('express')
import express from  'express';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import morgan from 'morgan';
import Authroutes from './routes/Authroutes.js'

const app =express();
app.use(morgan('dev'))
app.use(express.json())


 dotenv.config();
 connectdb()
app.get('/',(req,res)=>{
    res.send('server started successfully')
})
//routes
app.use('/ap/v1/auth',Authroutes)

const PORT =process.env.PORT_NO;
 app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
 })