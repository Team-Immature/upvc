const User = require('../models/orderModel');

async function setCompletedByAdmin(req,res) {
    const { id } = req.params;
    await User.findByIdAndUpdate(id , {status : 'completed'});
    if (!updatedUser) {
            return res.status(404).json({ status: "error", message: "Order not found" });
        }

    res.json({ status: "success", message : "Done updating" });

}

async function getUserForAdmin(req,res)
{
    const dueCustomers = await User.find({status: 'due'});
    if(dueCustomers.length === 0) {
        res.status(404).json({status:"success", message:"No due orders found"});
    } else {
        res.status(200).json(dueCustomers);
    }

}

module.exports = {
    getUserForAdmin,
    setCompletedByAdmin
}