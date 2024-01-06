//Object literal
const user = {
    username: "Gautam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Gautam", 12, true);
const userTwo = new User("sagar", 15, false)
console.log(userOne);
console.log(userTwo);

