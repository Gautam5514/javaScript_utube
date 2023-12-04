// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 654654654654654n;

// Refrence  (Non-Primitive)
// Array, Object, Functions

const heros = ["tiger", "Hritik", "ujwal"]

let myObj = {
    name:  "Gautam",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "to ate hain bina late kiye"

let anothername = myYoutubename
anothername = "fir se start"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "gauti.com",
    upi: "user@pyb"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);