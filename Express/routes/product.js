const express = require("express")
const router = express.Router()
const {createProduct,deleteProduct,updateProduct,getAllProducts} = require("../controller/product")

router.get("/getAllProducts", getAllProducts)
router.post("/createProduct",createProduct)
router.put("/updateProduct", updateProduct)
router.delete("/deleteProduct", deleteProduct)

module.exports = router