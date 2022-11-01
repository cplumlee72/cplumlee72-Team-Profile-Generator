// import Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor - manager is an employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // force role to manager
  getRole() {
    return "Manager";
  }
}

// export for use somewhere else
module.exports = Manager;
