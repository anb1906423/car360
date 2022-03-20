
const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

router.use('/sign_up', siteController.sign_up)

router.use('/sign_in', siteController.sign_in)

router.use('/', siteController.index)

module.exports = router
