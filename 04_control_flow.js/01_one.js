//IF

// const isUserLoggedIn = true
// const tempreture = 43
// if the constio is true then print the first console otherwise print the second console
// if(tempreture == 45){
//     console.log("Less then 50");
// }
// else{
//     console.log("tempreture is greater then 43");
// }
// // This is no need any of the intruction this is always prints
// console.log("You are the king");

// <, >, <=, >=, ==, !=, ===, !==

// scope use and using var => var is not use bcoz it is global variable
// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);


// const balance = 1000

//  if(balance > 500) console.log("test"), console.log("test2");  // this is not a good practice

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 700){
//     console.log("Less than 700");
// }
// else if(balance < 900){
//     console.log("less than 999");
// }
// else {
//     console.log("less than 1111");
// }



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInToEmail = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy");
}

if(loggedInFromGoogle || loggedInToEmail){
    console.log("user loggin in");
}