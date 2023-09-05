const express = require('express')
const {createProduct,getAllProducts,getSingleProduct, getuserproduct} = require('../Controller/ProductController')
const tokenhandler = require('../Middelwares/TokenHandler')
const router = express.Router()

router.use(tokenhandler)
router.get('/',getuserproduct)
router.post('/createProduct',createProduct)
router.get('/getallproducts',getAllProducts)
router.get('/getsingleproduct/:id',getSingleProduct)
router.get('/userproduct',getuserproduct)


module.exports = router

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJNdXphZmZhciIsImVtYWlsIjoiaHVzc2FpbjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRrRUc5WTRQSC9pdHViMUdCTUdBOWZlbDhtMEUvSGFCTlRMaDBwbEJsV01QeUVORGdMRjZLYSJ9LCJpYXQiOjE2OTM5MDM0MzV9.I0vfmaNMRcj28f18S8q0sghj_gW3d9I3Mh4UC_wbHY8