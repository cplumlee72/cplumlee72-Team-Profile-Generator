// require the Engineer constructor function
const Engineer = require("../lib/Engineer");

// create a new engineer object
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Caleb",
    69,
    "bambini6@gmail.com",
    "cplumlee72"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// gets github input from getGithub()
test("gets engineer github value", () => {
  const engineer = new Engineer(
    "Caleb",
    69,
    "bambini6@gmail.com",
    "cplumlee72"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// gets role from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Caleb",
    69,
    "bambini6@gmail.com",
    "cplumlee72"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
