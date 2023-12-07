// The SCOPE is usually of the {} = > which is used all the type liek function object

var c = 300 // Var is not a good datatype which is used the function
let a = 200 // this  is the global scope which is used any where and call the function
if(true){
    let a = 10
const b = 10
var c = 10
console.log("INNER: ", a) // this is the inner scope which is not a global scope
}


// console.log(a);
// console.log(b);
// console.log(c);

//Nested Function , Clousre function

function one(){
    const username = "Gautam"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);  
    // this is found error bcoz of the two() is the inner function, but the two is out from the inner funtion 
    //and then call, And it is not correct to find the inner funtion from the global function present 

    two()
}
// Now the Two has call the username and the One is executed
one()

if(true){
    const username = "Gautam"
    if(username === "Gautam"){
        const website = " portfolio"
        console.log(username + website);
    }
    // console.log(website); // bcoz there is not call the inner funtion
}
// console.log(username);

console.log(addone(5))
// This is posible bcoz of the this is the calling of funtion type
function addone(num){
    return num + 1
}


console.log(addTwo(5))
// variable holding that's why the problem is created  One of the variable that is Hoasting
const addTwo = function(num){
    return num + 2
}







