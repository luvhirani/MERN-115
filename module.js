//os
// const os = require("os")
// console.log(os.freemem())
// console.log(os.userInfo())
// console.log(os.)


//fs-> file system
// const fs = require("fs")
// fs.writeFileSync("text.txt","Good Morning MERN115")
// console.log(fs.readFileSync("text.txt",'utf8'))
// fs.unlinkSync("text.txt")

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("req",req)
    res.end("Hello,This is MERN 115")
})

server.listen(3004,"localhost",()=>{
    console.log("Server is running on port 3004")
})
