const { response } = require("express");
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

const getOneProduct = async (req,res) => { //localhost:3012/product/getOneProduct/2
    try {
        // console.log(req.params.id)
        const pid = req.params.id; 
        const response = await pool.query("SELECT * FROM products WHERE pid=?",[pid]);
        res.send(response[0])
    } catch (error) {
        console.log(error)
    }
}

const getAllProducts = async (req,res) =>{ //localhost:3012/product/getAllProducts

    try {
        const response = await pool.query("SELECT * FROM products");
        // console.log(response[0])
        res.send(response[0])
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const updateProduct = async (req,res) =>{ //localhost:3012/product/updateProduct/9
    let pId = req.params.id;
    let {name, price, category} = req.body;
    // console.log(pId,name,price)
    try{
        let response = await pool.query("UPDATE products SET name=?,price=?, category=? WHERE pId=?",[name,price,category,pId])
        console.log(response)
        res.send({message:"Product updated"});
    }
    catch(error){
        console.log(error)
    }
}

const deleteProduct = async (req,res) =>{
    let pid = req.params.id;
    try {
        const response = await pool.query("DELETE FROM products WHERE pId=?",[pid])
        res.send(response);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllProducts,updateProduct,deleteProduct,createProduct,getOneProduct}



