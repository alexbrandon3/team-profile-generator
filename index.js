// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const frame = require("./src/format.js");
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Please provide a description of your application.",
  "Now provide any instructions for installing your application.",
  "Now provide necessary usage information for your application.",
  "Now provide any guidelines for contributing to your application.",
  "Now provide any instructions for testing your application.",
  "What is your preferred license for this application?",
  "What is your github username?",
  "What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    title,
    description,
    install,
    usage,
    contribute,
    test,
    license,
    github,
    address,
  } = data;
  fs.writeFile(fileName, frame.format, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[5],
        name: "test",
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: ["MIT", "Mozilla", "Open Data Commons"],
      },
      {
        type: "input",
        message: questions[7],
        name: "github",
      },
      {
        type: "input",
        message: questions[8],
        name: "address",
      },
    ])
    .then((data) => {
      writeToFile("generated.html", data);
    });
}

// Function call to initialize app
init();
