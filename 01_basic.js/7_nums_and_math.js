const score = 400
//console.log(score);
//this is one special func which is show the Number
const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//highly it is used in the commerce application which is used in the payment and GST calculation
//console.log(balance.toFixed(2));

//it used for the which of the point have to declare and 
const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));
//It is prefer to the count of rupees in ind or other country 
const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++ MATH    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
//change the neg(-) value in pos(+)
console.log(Math.abs(-4));
//find the round-up value
console.log(Math.round(4.6));
//if the value in float then the output will  be in max
console.log(Math.ceil(4.2));
//if the value if in float then the value of min is given
console.log(Math.floor(4.9));
//min
console.log(Math.min(6, 7, 3, 10, 12, 1));
//max
console.log(Math.max(1,3,4,6,7,8,9));
//it show te  value of 0 or 1 in between
console.log(Math.random()); 
//in the * 10 that the value will come into upper than  0 min in 1 
console.log((Math.random()*10) + 1);
//using of floor bcoz of the value come in single but all the value always in upper than 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//In this console the value will be in always of upper than 10 bcoz of the value is added in the min of all val
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

