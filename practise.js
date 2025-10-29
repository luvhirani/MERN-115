const obj = { 
    name: "John", 
    greet: function() { 
        console.log(this)
        setTimeout(function() { 
            // console.log(obj.name); 
        }, 1000); 
    } 
}; 

// obj.greet(); 

// const obj1 = { 

//     name: "John", 

//     greet: function() { 
//             console.log(this); 
//     } 

// }; 

// obj1.greet(); 


// console.log(this); 

// console.log(" 0 || 1 = " + (0 || 1))
// console.log(" 1 || 2 = " + (1 || 2))
// console.log(" 0 && 1 = " + (0 && 1))
// console.log(" 1 && 2 = " + (1 && 2))


function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n * factorial(n-1)
    }
}

console.log(factorial(1))
5*4*3*2*1

fibonacci
0,1,1,2,3,5,8,13

let arr1 = [1,2,3]
let arr2 = [4,5,6]
[1,2,3,4,5,6] 
[1,2,3,4,5]



