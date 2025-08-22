const login = (req,res)=>{
    console.log("Login Request")
    res.send("login successfully")
}

const signup = (req,res)=>{
    console.log("Signup Request received")
    res.send("Registed Succesfully")
}

module.exports = {login,signup}