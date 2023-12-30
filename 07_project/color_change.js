// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//     // console.log(button);
//     button.addEventListener('click', function (g){
//         // console.log(g);
//         // console.log(g.target);
//         if(g.target.id === 'grey') {
//             body.style.backgroundColor = g.target.id; 
//         }
//     });

// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (r) {
        if(r.target.id === 'grey') {
            body.style.backgroundColor = r.target.id;
        }
        if(r.target.id === 'white') {
            body.style.backgroundColor = r.target.id;
        }
        if(r.target.id === 'blue') {
            body.style.backgroundColor = r.target.id;
        }
        if(r.target.id === 'yellow') {
            body.style.backgroundColor = r.target.id;
        }
        if(r.target.id === 'pink') {
            body.style.backgroundColor = r.target.id;
        }
    })
})