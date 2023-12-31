// const clock = document.querySelector('#clock');
// setInterval(function() {
//     let date = new Date();
//     // console.log(data.toLocaleTimeString);
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString);


// It is to set the function which have the function and braces uses 
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

// if(date < '04:00' ||date > '11:59 AM' ) {
//     clock.setAttribute('morning');
// } else {
//     'afterNoon';
// }