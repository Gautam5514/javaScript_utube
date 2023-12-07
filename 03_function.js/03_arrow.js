// This (this) => it is used to current contest refer

const user = {
    usernames: "gautam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.usernames} , welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.usernames = "ravi"
// user.welcomeMessage()

//if we in node invirement then the this is refer to empty object
// console.log(this)

// function chai(){
//     let username= "gautam"
    // This is work like a  object not a work on function
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "gautam"
//     console.log(this.username)
// }

const chai = () => {
    let username = "gautam"
    console.log(this)
    console.log(this.username)
    // both situation there is the this function is declare empty function
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))


// This is implicit method
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => (num1 + num2)
//If we use () = then there is no need to use return type(inplicitly) penthesis
// Either we use {} = then we use the return type .... this is very very important thing this i s(explicitly) curly breshes

// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username: "gautam"})
// if we {} use this then not defined of object
//If we return object the rape with parenthesis({})

console.log(addTwo(3,4))
