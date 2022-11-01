// constructor function to build employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // return name from user input
  getName() {
    return this.name;
  }

  // return ID from user input
  getId() {
    return this.id;
  }

  // return email from user input
  getEmail() {
    return this.email;
  }

  // return employee Role
  getRole() {
    return "Employee";
  }
}

// export for use somewhere else
module.exports = Employee;
