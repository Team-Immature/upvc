const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const customerSchema = mongoose.Schema({

    customerName : {
        type: String,
        required : true
    },
    Phone:{
        type:String,
        required:true,
        match: /^[0-9]{10}$/,
    },
    email:{
        type:String,
        required:true,
        unique : true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    
    plotNumber: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
      
    requirements : {
        type:String
    },
    status: {
        type: String,
        enum: ['completed', 'due'],  
        default: 'due'
    }


}, {timestamps:true});

const Customer = mongoose.model('Customer' , customerSchema);

module.exports = Customer;