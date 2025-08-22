const express = require("express")
const userRoutes = require ("./routes/user")
const productRoutes = require("./routes/product")
const app = express()

app.use(express.json())

app.use("/user", userRoutes)
app.use("/product",productRoutes)

app.listen(3012,()=>{
    console.log("Server is started")
})

// MVC Architecture 
// Model View Controller