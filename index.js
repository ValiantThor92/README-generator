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
      type: 'input',                                                                                /* project description prompt */
      name: 'description',
      message: 'Please provide a project description.'
    },
    {
      type: 'input',                                                                                /* installation steps promp*/
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',                                                                              /* */
      name: 'usage',
      message: 'Please provide instructions for use.'
    },
    {
      type: 'input',                                                                                /* */
      name: 'contribution',
      message: 'What should the user know about making contributions to the repository?'
    },
    {
      type: 'input',                                                                                /* */
      name: 'test',
      message: 'Please provide instructions for testing.'
    },
    {
      type: 'list',                                                                                   /* */
      name: 'license',
      message: 'What type of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
    },
    {
      type: 'input',                                                                              /* */
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',                                                                              /* */
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {                                                                      /* */
  return fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
    if (err) throw new Error(err);

    console.log("README generated successfully!");
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
