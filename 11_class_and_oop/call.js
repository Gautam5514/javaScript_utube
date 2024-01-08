function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // call function is called current excution 

    this.email = email
    this.password = password
}

const gautam = new createUser("gautam", "gauta@476.com", "6550")
console.log(gautam);