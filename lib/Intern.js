// import Employee constructor
const Employee = require("./Employee");

// intern constructor extends employee constructor - Intern is an Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // returning school from user input
  getSchool() {
    return this.school;
  }

  // force role to intern
  getRole() {
    return "Intern";
  }
}

//  export
module.exports = Intern;
