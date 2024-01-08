// let myName = "Gautam    "

// console.log(myName.trim().length); // count only written word space taken = > 6 and space not count

// let myName = "Gautam     "
// let myArea = "tu      "

// console.log(myName.trueLength); // find all the letter which has unusual space remove method Create



// Define an array called myHeros with two elements: "tiger" and "Hritik"
let myHeros = ["tiger", "Hritik"];

// Define an object called heroPower with properties for each hero and their corresponding powers
let heroPower = {
    tiger: "flip",
    Hritik: "dance",

    // Define a method within heroPower to get Spiderman's power
    getSpiderPower: function() {
        // Using "this" keyword to access the power of Hritik
        console.log(`spider power is ${this.Hritik}`);
    }
}

// Extend the prototype of the Object to add a method called gautam to all objects
Object.prototype.gautam = function() {
    console.log(`Gautam is present in all objects`);
}

Array.prototype.heyGautam = function() {
    console.log(`Gautam says hello`);
}


// Call the gautam method on the heroPower object
// heroPower.gautam();

myHeros.gautam(); // Also present in all the object in the myHeros object
myHeros.heyGautam(); 
//heroPower.heyGautam() -> that has no power bcz of the access has only for the array


// Inheritance
 // -> prototyple inheritance
const User = {
    name: "Gautam",
    email: "Tu@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// Modern Synatx

Object.setPrototypeOf(TeachingSupport, Teacher)

// Define a string variable called anotherUsername with trailing spaces
let anotherUsername = "chaiAurCode     "

// Extend the prototype of the String object to add a method called trueLength
String.prototype.trueLength = function() {
    // Log the original string
    console.log(`${this}`);
    
    // Log the true length of the string after removing leading and trailing spaces
    console.log(`True length is: ${this.trim().length}`);
}

// Call the trueLength method on the anotherUsername string
anotherUsername.trueLength()

// Call the trueLength method on the string "Gautam"
"Gautam".trueLength()

// Call the trueLength method on the string "tuHaiNa"
"tuHaiNa".trueLength()

// trueLength() [function we make and also use as a function (truelength() -> is not a part of prototype)]


