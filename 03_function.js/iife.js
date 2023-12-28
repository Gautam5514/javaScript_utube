//  Immediately Invoked Function Expressions (IIFE)


//this is  normal execution
// function chai(){
//     console.log("DB CONNECTED");
// }
// chai();

//This is iife expresion   
// (function chai(){
//     console.log("DB CONNECT");
// })()
// Wraped with whole on prenthesis () 
//Reason of that -> Global scope se polution se problem hoti hai kai baar to us global scope polution hai declartion hai ke liye IIFE use

(function chai(){
    // named IIFE
    console.log("DB CONNECT")
})(); // End of this perenthesis use semicolon ;

( (name) => {
    // un-named IIFE
    console.log(`DB CONNECT TWO ${name}`)
} ) ('GAUTAM')

