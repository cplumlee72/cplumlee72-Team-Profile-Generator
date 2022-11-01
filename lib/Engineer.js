// importing Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling employee constructor
    super(name, id, email);

    this.github = github;
  }

  // returning github from user input
  getGithub() {
    return this.github;
  }

  // force employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// export
module.exports = Engineer;
