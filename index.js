// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',                                                                              /* project title prompt */
      name: 'title',
      message: "What is the name of your project?"
    },
    {
      type: 'input',                                                                              /* description prompt */
      name: 'description',
      message: 'Please provide a project description.'
    },
    {
      type: 'input',                                                                              /* installation steps prompt */
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',                                                                              /* usage instructions prompt */
      name: 'usage',
      message: 'Please provide instructions for use.'
    },
    {
      type: 'input',                                                                              /* contributions prompt */
      name: 'contributions',
      message: 'What should the user know about making contributions to the repository?'
    },
    {
      type: 'input',                                                                              /* testing instructions prompt */
      name: 'test',
      message: 'Please provide instructions for testing.'
    },
    {
      type: 'list',                                                                               /* licensing selection list prompt */
      name: 'license',
      message: 'What type of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
    },
    {
      type: 'input',                                                                              /* Github username prompt */
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',                                                                              /* Email address prompt */
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {                                                                      /* */
  return fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
    if (err) throw new Error(err);

    console.log("README.md generated successfully! Locate your file at: " + path.join(__dirname, ',/dist/README.md'));
  })
};

// TODO: Create a function to initialize app
// Function call to initialize app

questions().then(readmeData => {                                                                    /* */
  console.log('README.md generation initiated..');
  return writeToFile(readmeData);
}).catch(err => {

  console.log(err);
});
