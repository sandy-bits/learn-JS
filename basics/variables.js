const accountId = 123
let accountMail = "sandy@gmail.com"
var accountPassword = "123"
accountLocation = "Jaipur"

  let accountState ;

console.log(accountLocation);

// accountId = 22 // can't redeclare the value of const

accountMail = "sandeep@gmail.com"
accountPassword = "456"
accountLocation = "Ajmer"

console.log(accountId);


console.table([accountId, accountMail, accountPassword, accountLocation, accountState]);
