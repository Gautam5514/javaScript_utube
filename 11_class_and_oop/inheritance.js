class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // super Keyword is used to direct access from the user 
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const gpt = new Teacher("gopo", "gopo@g,ail.com", "6454");
// gpt.addCourse();
gpt.logMe();

const gautam = new User("tu meri");
gautam.logMe();

console.log(gpt instanceof User); // It saya that that created from the user and that are any thing in gpt