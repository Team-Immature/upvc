const express = require('express');
const mongoose=require('mongoose');
const app = express();
const Port = 1000;
const customerRouter = require('../backend/routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const bodyparser = require('body-parser');


//connect to mongo
const { connectDb } = require('../backend/config/db');
connectDb("mongodb://127.0.0.1:27017/upvc_customer").then(()=>{console.log("connected to Db");}).catch(err => console.log("DB Connection failed:"));

app.use(express.urlencoded({extended : false}));
app.use(express.json());

//route
app.use('/api',customerRouter);
// app.use('*', (req, res) => {
//     res.status(404).json({ message: 'Route not found' });
//   });

app.use('/',adminRouter);


app.listen(Port , ()=>{
    console.log(`server running on ${Port}`);
})