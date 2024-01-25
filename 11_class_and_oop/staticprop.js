class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createdId() { // static is doing to use this in under of this
        return `123`
    }
}

const gautam = new User("Gautam")

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const phone = new Teacher("sumsung", "sumsung@123.com")
console.log(phone.createdId());