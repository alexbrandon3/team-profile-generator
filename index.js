// Includes packages and imports needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const frame = require("./src/createHTML.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Creates an empty array in which employee objects may be stored
const team = [];

// Gets manager information
const getManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your team's manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
      },
    ])
    .then((managerInfo) => {
      const { name, id, email, officeNumber } = managerInfo;
      const manager = new Manager(name, id, email, officeNumber);

      team.push(manager);
      console.log(manager);
    });
};

const getEmployee = () => {
  if (team.length <= 1) {
    console.log(`
        -------------------------------------
        Now to add an employee for your team.
        -------------------------------------
        `);
  } else {
    console.log(`
        ----------------------------------------------
        You may add additional employees to your team.
        ----------------------------------------------
        `);
  }

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose the role of your employee.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your employee?",
      },
      {
        type: "input",
        name: "id",
        message: "Please provide your employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the employee's email address.",
      },
      {
        type: "input",
        name: "github",
        message: "Please provide your employee's github username.",
      },
      {
        type: "input",
        name: "school",
        message: "Please provide your employee's school",
      },
      {
        type: "confirm",
        name: "additional",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((inputInfo) => {
      let { name, id, email, role, github, school, additional } = inputInfo;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      team.push(employee);

      if (additional) {
        return getEmployee(team);
      } else {
        return team;
      }
    });
};

// Function call to initialize app
getManager()
  .then(getEmployee)
  .then(()=>
    fs.writeFileSync("generated.html", frame(team), (err) =>
      err ? console.log(err) : console.log("Success!")
    )
  );
