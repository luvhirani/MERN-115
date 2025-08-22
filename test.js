const {sum} = require("./math")
const {sub} = require("./math")

console.log(sum(3,10))

console.log(sub(10,2))

const obj = {
    key: "value"
}

let {key} = obj;

console.log(key)