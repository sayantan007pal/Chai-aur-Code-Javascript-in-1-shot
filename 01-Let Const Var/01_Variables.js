const accountId = 12345; // Using const for a constant value
let accountEmail = "user@example.com"; // Using let for a variable value
var accountPassword = "password123"; // Using var for a variable value
accountCity = "New York"; // Using var to declare a variable without 'var', 'let', or 'const'
let accountState; // Using let to declare a variable without an initial value will be undefined

// accountId = 2 // Uncommenting the line above will cause an error because accountId is a constant
accountEmail = "newemail@example.com"; // Changing the value of accountEmail
accountPassword = "newpassword456"; // Changing the value of accountPassword
accountCity = "Los Angeles"; // Changing the value of accountCity

console.log("Updated accountId:", accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 
