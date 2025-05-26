const express = require('express');

const router = express.Router();

const { getUserForAdmin } = require('../controller/adminController');


router
    .route('/admin')
    .get(getUserForAdmin)


module.exports = router;

