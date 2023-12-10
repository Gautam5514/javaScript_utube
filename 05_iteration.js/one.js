// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element)
}

// console.log(element)  // this is not call so this is not good run


// Table Create

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        
    }
    
}

// to array traverse

let myArray = ["gautam", "Sagar", "Gaurav", "Rahul"]
// console.log(myArray.length);
for (let name = 0; name < myArray.length; name++) {
    const element = myArray[name];
    // console.log(element);
    
}


// Detect and then break the statement

// for(let index = 1; index <= 20; index++){
//     if(index == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }



//  In this stiped code continue use for only single time detect and then continue
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is ${index}`);
}