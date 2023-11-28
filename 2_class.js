const accountId = 136644
let accountEmail = "gautampandit797@gmail.com"
var accountPassword = "12345"
accountCity = "jharkhand"
let accountState;

// accountId = 2 // not allowed  (scope = {} this is scope)

accountEmail = "gpt@5514.com"
accountPassword = "2444343"
accountCity = "Ranchi"

console.log(accountId);

/*
prefer not use var
because of issue in block and functional scope
-> If any of function is define but not use of any of that function then that is undefined
-> If we define the output in a table form then i have to (console.table(["Write all the function"]))
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])