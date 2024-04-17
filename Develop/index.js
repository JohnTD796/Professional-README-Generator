// TODO: Include packages needed for this application
const { generateKey } = require('crypto');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'log.txt';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'pTitle',
    },
    {
        type: 'input',
        message: 'Please enter your projects description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can users install and run your project locally?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions on how to use your application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List the technologies and frameworks used in your project.',
        name: 'technologies',
    },
    {
        type: 'input',
        message: 'Acknowledge any individuals or resources that helped in the development of your project.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Include a link to a walkthrough video or a live demo of your project.',
        name: 'demo',
    },
    {
        type: 'input',
        message: 'Provide the URL to your GitHub repository.',
        name: 'githubRepo',
    },
    {
        type: 'list',
        message: 'Specify the license under which your project is distributed.',
        choices: ['No License', 'Apache', 'BSD', 'MIT'],
        name: 'license',
    },
];

inquirer
    .prompt(questions)

    .then((data) => {
        let generatedData = generateMarkdown(data)
        writeToFile(fileName, generatedData);
    })
    ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log("Success!"))
    // confused on what this function means (fileName, response)
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
