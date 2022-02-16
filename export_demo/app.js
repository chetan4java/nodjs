const users=require("./export_obj")
const sum = require('./function_exports');

console.log(users);

console.log("Users message is = "+users.message)
// console.log(`Users message is =  {}`)

////////////////////////////////////////
  
console.log("additionis= "+sum.sum(10,20));