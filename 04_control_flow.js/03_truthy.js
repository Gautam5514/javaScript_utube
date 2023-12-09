// const userEmail = "gauatm@898.com"
// const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// }
// else {
//     console.log("don't have user name");
// }


// falsy Value
    // false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//Truthy Value
    // "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }

// false == 0 -> true -> output
// false == '' -> true-> output
// 0 == '' -> true -> output

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)


//    Terniary Operator
// condition ? true : false

const coffeePrice = 100
coffeePrice <= 80 ? console.log("Less than 80") : console.log("More than 80")

