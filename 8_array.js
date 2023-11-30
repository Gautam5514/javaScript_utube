//Arrays  () -> perentesis [] -> squarebracket {} -> karly-braces

const myArr = [1, 2, 3, 4, 5] 
const myHeros = ["tigerShroff", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[0]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// This is used to shift the value in the initial point 
//myArr.unshift(8)
//This is basically used to remove the first value of the initail point
//myArr.shift()

//this is used to define the value which i found is availble or not and the value declare of the boolean type
//console.log(myArr.includes(9));
//this is also used to indicate the value is availble or not but in -1 or position ceclare
//console.log(myArr.indexOf(3));


//Basically the join is used to bind all the array in the string mode
// const newArr = myArr.join()

// console.log(newArr)
// console.log(typeof newArr)
// console.log(myArr);


//  Slice, splice

console.log("A ", myArr);
// Slice is  basically used to (1, 3) then start the count from the 1 and end the 2 arr not include 3 
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

// Splice is used to (1, 3) this is include all the from 1 to 3 array till 
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//Basic different of slice and splice is If i include the array in splice then the output is which one  is in splice that is not in the array , But if slice this is only take the value and print the output

