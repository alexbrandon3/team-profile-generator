const Employee = require("../lib/Employee");

// Testing creation of employee object
test("Creates a new employee object", () => {
  const employee = new Employee("Alex", 3, "alexlbrandon@gmail.com");

  expect(employee.name).toEqual("Alex");
  expect(employee.id).toEqual(3);
  expect(employee.email).toEqual("alexlbrandon@gmail.com");
});

// Tests functionality of getName function
test("Fetches the name of the employee", () => {
  const employee = new Employee("Alex", 3, "alexlbrandon@gmail.com");

  expect(employee.getName()).toEqual("Alex");
});

// Tests functionality of getID function
test("Fetches employee ID", () => {
  const employee = new Employee("Alex", 3, "alexlbrandon@gmail.com");

  expect(employee.getId()).toEqual(3);
});

// Tests functionality of getEmail function
test("Fetches employee email", () => {
  const employee = new Employee("Alex", 3, "alexlbrandon@gmail.com");

  expect(employee.getEmail()).toEqual("alexlbrandon@gmail.com");
});

// Tests functionality of getRole function
test("Produces the role of the employee", () => {
  const employee = new Employee("Alex", 3, "alexlbrandon@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
