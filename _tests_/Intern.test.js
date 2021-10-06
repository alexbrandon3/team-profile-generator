const Intern = require('../lib/Intern');

// Testing creation of intern object
test("Creates a new engineer object", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.name).toEqual("Alex");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual("alexlbrandon@gmail.com");
    expect(intern.school).toEqual("UNC");
  });
  
  // Tests functionality of getName function
  test("Fetches the name of the intern", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.getName()).toEqual("Alex");
  });
  
  // Tests functionality of getID function
  test("Fetches intern ID", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.getId()).toEqual(3);
  });
  
  // Tests functionality of getEmail function
  test("Fetches intern email", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.getEmail()).toEqual("alexlbrandon@gmail.com");
  });
  
  // Tests functionality of getRole function
  test("Produces the role of the intern", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.getRole()).toEqual("Intern");
  });
  
  // Tests functionality of getSchool function
  test("Produces the role of the Intern", () => {
    const intern = new Intern(
      "Alex",
      3,
      "alexlbrandon@gmail.com",
      "UNC"
    );
  
    expect(intern.getSchool()).toEqual("UNC");
  });
  