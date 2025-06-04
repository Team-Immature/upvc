require('dotenv').config();

const express = require('express');
const mongoose=require('mongoose');

const app = express();
const Port = 1000;
const customerRouter = require('../backend/routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const bodyparser = require('body-parser');


//connect to mongo
const { connectDb } = require('../backend/config/db');
const DB_URL = process.env.ATLAS_URL;
connectDb(DB_URL).then(()=>{console.log("connected to Db");}).catch(err => console.log("DB Connection failed:"));

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/api',customerRouter);
// app.use('*', (req, res) => {
//     res.status(404).json({ message: 'Route not found' });
//   });

app.use('/',adminRouter);


app.listen(Port , ()=>{
    console.log(`server running on ${Port}`);
})