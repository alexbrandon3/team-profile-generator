const Manager = require('../lib/Manager');

// Testing creation of intern object
test("Creates a new engineer object", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.name).toEqual("Alex");
    expect(manager.id).toEqual(3);
    expect(manager.email).toEqual("alexlbrandon@gmail.com");
    expect(manager.officeNumber).toEqual(8);
  });
  
  // Tests functionality of getName function
  test("Fetches the name of the manager", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.getName()).toEqual("Alex");
  });
  
  // Tests functionality of getID function
  test("Fetches manager ID", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.getId()).toEqual(3);
  });
  
  // Tests functionality of getEmail function
  test("Fetches manager email", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.getEmail()).toEqual("alexlbrandon@gmail.com");
  });
  
  // Tests functionality of getRole function
  test("Produces the role of the manager", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.getRole()).toEqual("Manager");
  });
  
  // Tests functionality of getOfficeNumber function
  test("Produces the role of the manager", () => {
    const manager = new Manager(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      8
    );
  
    expect(manager.getOfficeNumber()).toEqual(8);
  });
  