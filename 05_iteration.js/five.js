const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

//Arrow Function call back function
// coding.forEach( (item) => {
//     console.log(item);
// })


//using printMe function for  output
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

//  For all the excuter they have not only one parameters (index, arr, item)
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// to execute the arr scope using forEach
const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )