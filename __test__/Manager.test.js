// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("creates an Manager object", () => {
  const manager = new Manager("Caleb", 69, "bambini6@gmail.com", 3);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Caleb", 69, "bambini6@gmail.com", 3);

  expect(manager.getRole()).toEqual("Manager");
});
