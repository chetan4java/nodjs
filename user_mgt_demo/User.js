 exports. users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Smith", email: "smith@gmail.com" },
  { id: 3, name: "Chris", email: "chris@gmail.com"},
  { id: 4, name: "Jackson",  email: "jack@gmail.com" }
];

// module.exports=users;

//Or


const Person={
    name:"chetan",
    lastname:"badgujar"
}

const Company ={
    name:"adventas",
    address : "pune",
    conatct :123456
}


module.exports.person=Person;
module.exports.company=Company;
