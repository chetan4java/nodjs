// var person = require('./modules');

// console.log(person)
// var person1 = new person('James', 'Bond');

// console.log(person1.fullName());

////////////////////////////////////////////

const { person, company } = require("./modules");

console.log(person);
console.log(company);

console.log("person details ");
var person1 = new person("James", "Bond");
console.log(person1.fullName());

console.log("****************************");

console.log("Company  details ");
const firstCompany = new company();
firstCompany.info();

