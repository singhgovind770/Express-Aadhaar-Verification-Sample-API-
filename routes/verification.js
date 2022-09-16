const express = require('express')
const router = express.Router()
const verification =  require('../controllers/verficationController')

router.route('/otp')
    .post(verification.otp)

router.route('/verify')
    .post(verification.verify)

module.exports = router
