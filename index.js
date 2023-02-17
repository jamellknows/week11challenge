const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

inquirer.prompt([
    {
        type: 'input',
        message: 'Title',
        name: 'title'
    },
    {
        type: 'input', 
        message: 'Description',
        name: 'description'
    },
    {
        type: 'confirm', 
        message: 'Table of Contents',
        name: 'tableOfContents',
    },
    {
        type: 'input', 
        message: 'Installation Instructions',
        name: 'installation'
    },
    {
        type: 'input', 
        message: 'Usage Information',
        name: 'usage'
    },
    {
        type: 'confirm', 
        message: 'License',
        name: 'license'
    },
    {
        type: 'list',
        message: 'Please select the type of license you would like to apply?',
        name: 'licenseType',
        choices: ['Apache 2.0', 'Berkeley Software Distribution OS BSD', 'GNU licenses', 'MIT License', 'Mozilla Public License 2.0'],
        when: (answers) => answers.license === true
    },
    {
        type: 'confirm',
        message: 'Do you have any contributors?',
        name: 'contributorsBoolean',
    },
    {
        type: 'input', 
        message: 'Names of Contributors',
        name: 'contributions', 
        when: (answers) => answers.contributorsBoolean === true
    },
    {
        type: 'input',
        message: 'contribution guidelines',
        name: 'contributionGuidelines'
    },
    {
        type: 'input', 
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input', 
        message: 'For questions, please enter your username',
        name: 'questionsUserName'
    },
    {
        type: 'input', 
        message: 'For questions, please enter your email address',
        name: 'questionsEmail'
    },
   
]).then((response) => generateMarkdown(response))
    .then((markdown) => fs.writeFileSync('README.md', markdown))
    .catch((err) => console.log(err))
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
