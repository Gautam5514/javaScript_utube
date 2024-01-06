const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async task
    // DB  calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve() // -> this is directally connected to the then () function
    }, 1000)
})

promiseOne.then(function () { // then()-> directally conneted to the resolve
    console.log('promise consume');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)

}).then(function () {
    console.log('Async 2 is run');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Guatam", email: "gautam@gmail.com"});
    },1000)
})
// .then(function (user) {
//     console.log(user);
// })
promiseThree.then(function (gautam) {
    console.log(gautam);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;  // This variable should be defined based on some condition or value
        if (!error) {
            resolve({ username: "Gautam", password: "123" });
        } else {
            reject('ERROR: something went wrong');
        }
    }, 1000); // Specify the delay time in milliseconds
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
})
// .then() // without msg we call the chaining 
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("the promise is either resolve or rejected"));


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if(!error) {
            resolve({username: "javascript", password: "142"});
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} // this all are the same work if u want to use (async) & u want to use (.then) both are same

consumePromiseFive()



// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E ", error);
//     }
// }

// getAllusers()


// Both of them are same of fatching of json file

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
