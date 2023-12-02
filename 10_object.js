// javaScript used to two type 1. literal , 2. Constructor
//Singleton. jab bhi koi constructor ham bnate hai to singleton ak object banta hai
//if we use literal then not build like a singleton


//object literal 

const mySym = Symbol("Key1")

const JsUser = {
    name: "Gautam",
    "full name" : "Gautam Pandit",
    //for  acess the  system than uses of the [sys]
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hero@tesla.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym])

//Change the any information then use of this type in js
JsUser.email = "gautam@chat.com"
// this is use to freeze the data After this never change again
//Object.freeze(JsUser)

JsUser.email = "chalbetaselfi@lelere.com"
//the whole information gain by this 
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



