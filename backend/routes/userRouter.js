const express = require('express');
const router = express.Router();

const { createOrder, getUserById, deleteUserById, getAllOrder } = require('../controller/userController');

router
    .route('/')
    .post(createOrder)
    .get(getAllOrder)

router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUserById)

module.exports = router;