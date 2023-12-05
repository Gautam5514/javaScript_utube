//SingleTon 
//   Literal

//const tinderUser = new Object(); // this is a singletom object
const tinderUser = {} // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "romy"
tinderUser.email = "gautampandit797@gmail.com"
tinderUser.isLoggedIn = false 


//console.log(tinderUser);

const regularUser = {
    email: "tuhaina@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gautam",
            lastname: "pandit"
        }
    }
}
// This is the use to reduce and finally found the correct one  which one wants on the output
//console.log(regularUser.fullname.userfullname.firstname)

// Combine of Object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// The assign variable is used to concatenate in the single object , ans {}=> used for the target and remaining // all is source
//const obj4 = Object.assign({}, obj1, obj2, obj3)

// there is combine to all the object using Spread Operator
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4)

const user = [
    {
        id: 1,
        email: "blabla@gmail.com"
    },
    {
        id: 1,
        email: "blabla@gmail.com"
    },
    
]

user[1].email
//console.log(tinderUser);
// This is to show all the keys from the main object
//console.log(Object.keys(tinderUser));
// This is show the value of all keys
//console.log(Object.values(tinderUser));
// This entries used to divide part by part 
//console.log(Object.entries(tinderUser))

// hasOnwProperty => is used to define ki jo khoj rhe hain wo hai ki nhi !
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//Object destructure 

const course = {
    coursename: "js in hindi",
    price: "547",
    courseInstructor: "yaminidevi"
}

//course.courseInstructor

// this is the distructore of the object
const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// This is the react concept which is used to distructuring 
        // const navbar = ({compony}) => {

        // }
        // navbar(compony = "gautam")

// Apna kaam kise ke Sir pe dal dena is called API

// Pahle values ate the XML mai . jo bahut complex hota the destrucre karne mai ..Magr ab Ate hai JSON mai 
// JSON -> JavaScript Object Notation
// this type of type of javaScript JSON folder
// {
//     "name": "Guatam",
//     "coursename": "javaScript",
//     "price": "not"
// }