//In js the data calculated is always in the 1st jan 1970  And  the month will be start in 0 in JS

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreateDate = new Date(2023, 10, 23)
//let myCreateDate = new Date(2023, 10, 27, 19, 53)
// let myCreateDate = new Date("2023-10-27")
let myCreateDate = new Date("10-27-2023")
//console.log(myCreateDate.toLocaleString());

//It is basically used in the quiz and poll time to find the correct time
let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//to getTime is used to basically find the correct time and date
// console.log(myCreateDate.getTime());
//to convert in sec(all the second in milisecond)
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth)
console.log(newDate.getDay)


// this is  for the all day and time to calculate with the single veraible in(toLocalString) (cltr+space) to op
// newDate.toLocalString('default', { 
//     weekday: "long"
// })