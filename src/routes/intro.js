
const express = require('express')
const router = express.Router()
const introController = require('../app/controllers/IntroController')

router.use('/', introController.index)

module.exports = router
