const User = require('../models/orderModel');
async function getAllOrder(req,res)
{
    const users = await User.find();
    res.status(200).json(users);
}

async function createOrder(req,res)
{
    
    try{
        const body = req.body;

        const newUser = await User.create({
            customerName :body.customerName,
            Phone:body.Phone,
            email : body.email,
            plotNumber : body.plotNumber,
            area:body.area,
            state:body.state,
            pincode:body.pincode,
            
            requirements : body.requirements
        });

        res.status(201).json({status : 'success' , message:'created'});
    }   
    catch(error)
    {
        console.error('Error creating order:', error);
        res.status(500).json({
            message: 'Failed to create order',
            error: error.message,
        });
    }   
}

async function getUserById(req,res)
{
    try{
        const user = await User.findById(req.params.id);

        if(!user)
        {
            res.status(404).json({status:"success" , message:"No user Found"});
        }

        res.status(200).json(user);
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Failed to get user',
            error: error.message,
        })
    }

}

async function deleteUserById(req,res)
{
    try{
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({status : "success" , message : "User Deleted"});
    }

    catch(error)
    {
        res.status(500).json({message : "Failed" , error : error.message});
    }
}


module.exports = {
    getAllOrder,
    createOrder,
    getUserById,
    deleteUserById,

}