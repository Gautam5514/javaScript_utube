//Function -> jo bhi code likhe hain 10 line, 5 line, 20 line or usko ak package mai band kar diye hain or usko //jaha chahe waha leke ja sakte hai or use kar sakte hai That is called Function.

function sayMyName() {
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("T");
    console.log("A");
    console.log("M");
}

// this is only reference of function, 
//sayMyName

// this is function and execution both 
//sayMyName()


// function addTwoNumber(number1, number2){  // There is of number1 and number2 is (parameters)
//     console.log(number1 + number2);
// }

// addTwoNumber(6,7); // (6, 7) is a argument , this is only nomincalture


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2  //after the return we never do any more output from the function before return do
}


const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function loginUserMessage(username) {
//     return `${username} loggin na bro`
// }
// this is not give the output bcoz of there are present in the execution but we not say to give the output
// loginUserMessage("Gautam")

// there are we define to give the output 
// console.log(loginUserMessage("Gautam"));

//If Else statement
function loginUserMessage(username = "tu"){ // "Tu" => sams used bcoz of if the output value is not declare
    if(username === undefined){  // if(!username)
        console.log("Please Enter the username");
        return
    }
    return `${username} login`
}

// console.log(loginUserMessage("Gautam"));



// This use the function to calculate if the price is more then 1 and another price
// (...num1) this is the rest operator and also spread operator both are same but usse the different place
function calculateUser(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateUser(2, 5, 100, 200, 300));


const user = {
    username : "Guatam",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)

// this is another type to declaration
handleObject({
    username : "Guatam",
    price: 299
})

// This is The Array part which is decalre
const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 500, 1000]));

