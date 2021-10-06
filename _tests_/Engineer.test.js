const Engineer = require("../lib/Engineer");

// Testing creation of engineer object
test("Creates a new engineer object", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.name).toEqual("Alex");
  expect(engineer.id).toEqual(3);
  expect(engineer.email).toEqual("alexlbrandon@gmail.com");
  expect(engineer.github).toEqual("alexbrandon3");
});

// Tests functionality of getName function
test("Fetches the name of the engineer", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.getName()).toEqual("Alex");
});

// Tests functionality of getID function
test("Fetches engineer ID", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.getId()).toEqual(3);
});

// Tests functionality of getEmail function
test("Fetches engineer email", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.getEmail()).toEqual("alexlbrandon@gmail.com");
});

// Tests functionality of getRole function
test("Produces the role of the engineer", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});

// Tests functionality of getGithub function
test("Produces the role of the engineer", () => {
  const engineer = new Engineer(
    "Alex",
    3,
    "alexlbrandon@gmail.com",
    "alexbrandon3"
  );

  expect(engineer.getGithub()).toEqual("alexbrandon3");
});
