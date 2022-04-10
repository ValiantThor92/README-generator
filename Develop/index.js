// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project called?"
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a project description.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for use.'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What should the user know about making contributions to the repository?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide instructions for testing.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
