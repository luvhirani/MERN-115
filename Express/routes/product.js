const express = require("express")
const router = express.Router()
const {createProduct,deleteProduct,updateProduct,getAllProducts, getOneProduct} = require("../controller/product")

router.get("/getAllProducts", getAllProducts)
router.get("/getOneProduct/:id", getOneProduct)
router.post("/createProduct",createProduct)
router.put("/updateProduct/:id", updateProduct)
router.delete("/deleteProduct/:id", deleteProduct)

module.exports = router