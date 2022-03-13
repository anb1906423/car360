
const express = require('express')
const router = express.Router()
const discountController = require('../app/controllers/DiscountController')

router.use('/', discountController.index)

module.exports = router