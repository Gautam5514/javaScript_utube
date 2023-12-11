// for of

// ["", "", ""] => string
// [{}, {}, {}] => Object

const arr = [1, 2, 3, 4, 5, 6]

// for(const num of arr) { // num of arr that is the special type of looping use to iterate all the arr
//     console.log(num)
// }


// this is the string iterator

// const greetings = "Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }



// Maps
// Map => this is store the unique value and also store the sequential ways

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('IN', "India")


// console.log(map);

// using loop
for(const [key, value] of map) {
    // console.log(key, ':-', value);
}

//Object for each loop 
const myObject = {
    game1: 'NFS',
    game2: 'BGMI'
}

// this is not work on that 
// for(const [key, value] of myObject) {
//     console.log(key,':-', value);
// }

