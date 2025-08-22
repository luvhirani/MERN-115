const pool = require("../db/db")

//localhost:3012/product/createProduct
const createProduct = async (req, res) => { 
    // console.log("request Object:",req)

    let {pid,name, price, category} = req.body;

    console.log(pid,name,price,category)
    try {
        const response = await pool.query("INSERT INTO products VALUES (?,?,?,?)",[pid,name,price,category])
        res.send("Product Created")
    } catch (error) {
        console.log("Error:", error)
    }
}

const getAllProducts = (req,res) =>{

    res.send("list of all the products")
}

const updateProduct = (req,res) =>{

}

const deleteProduct = (req,res) =>{

}

module.exports = {getAllProducts,updateProduct,deleteProduct,createProduct}