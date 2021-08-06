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
        message: "Enter project description",
        name: "description",
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