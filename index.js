// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "description",
    },
    {
        type: "input",
        message: "Enter project installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter project usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter project test instructions:",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter your github username:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
    },
    {
        type: "input",
        message: "Enter contact information for any contributors:",
        name: "contributing",
    },
    {
        type: "list",
        message: "Choose your project's license:",
        choices: ["Apache License 2.0", "GNU GPLv3", "ISC", "MIT", "None"],
        name: "license",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(`${response.title}.md`, generateMarkdown(response));
        });
}

// Function call to initialize app
init();