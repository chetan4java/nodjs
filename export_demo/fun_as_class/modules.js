module.exports.person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}

module.exports.company = function () {
    this.name = 'GeeksforGeeks';
    this.website = 'https://geeksforgeeks.org';
    this.info = () => {
      console.log(`Company name - ${this.name}`);
      console.log(`Website - ${this.website}`);
    }
  }