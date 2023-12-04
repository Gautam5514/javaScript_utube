const name = "gautam"
const repoCount = 50

// console.log(name + repoCount + "value"); (this is the old uses)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// (``/ backtik) = this is stringintpolution = it is  create place holder

const gameName = new String('gauty-tu-mai-or-sab')
console.log(gameName.split('-'));
//To access the function and find the length
console.log(gameName[0]);
console.log(gameName.__proto__);
//USe prototype of  js function
console.log(gameName.fixed());
console.log(gameName.length)
console.log(gameName.toUpperCase());
//to check which postion is which one character
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);
//this is from reverse taking string 
const anotherString = gameName.slice(-3, 0)
console.log(anotherString);

//This is used to remove the extra space
const newStringOne = "      gautam  "
console.log(newStringOne);
console.log(newStringOne.trim());

//this is used to change the strig in the line
const url = "https://gautam.com/gauta%50pandit"
console.log(url);
console.log(url.replace('%50', '100'))
//this is use to check is there available or not
console.log(url.includes('gautam'));
console.log(url.includes('tu'))

