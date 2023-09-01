const express = require('express')
const createProduct = require('../Controller/ProductController')
const router = express.Router()

router.post('/createProduct',createProduct)

module.exports = router