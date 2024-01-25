// ES6

// Constructor -> jaise hi object se class initiallize hoga (means new keyword jaise hi lenge  wo direct call ho jayega)

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const gautam = new  User("gautam", "guatam@444gmail.com", "152")

// console.log(gautam.encryptPassword());
// console.log(gautam.changeusername());

// behind the scenes the
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeusername = function () {
    return `${this.username.toUpperCase()}`
}

const roo = new User("romy", "romy@1234", "123")

console.log(roo.encryptPassword());
console.log(roo.changeusername());