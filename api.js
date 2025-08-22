const http = require('http');

const server = http.createServer((req,res)=>{

    console.log("req:",req)

    if(req.url==="/users" && req.method ==="GET"){
        res.end("This is the list of all users") //contoller
    }

    else if(req.url==="/products" && req.method ==="GET"){
        res.end("This is the list of all Products")
    }

    else{
        res.end("Hello GRRAS, this is Home page")
    }

})

server.listen(3005,"localhost",()=>{
    console.log("Server is running on port 3005")
})