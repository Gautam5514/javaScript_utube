const desciptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desciptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const studio = {
    name: 'apna studio',
    price: 250000,
    isAvailable: true,

    mystudio: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(studio, "name"));

Object.defineProperty(studio, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(studio, "name"));

for (let [key, value] of Object.entries(studio)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}