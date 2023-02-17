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
        type: 'raw-list',
        message: 'Enter the sections of the contents',
        name: 'list-of-contents',
        when: (answers) => answers.tableOfContents === true
    },
    {
        type: 'input', 
        message: 'Installation',
        name: 'installation'
    },
    {
        type: 'input', 
        message: 'Usage',
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'License',
        name: 'license'
    },
    {
        type: 'input', 
        message: 'Contributing',
        name: 'contributing'
    },
    {
        type: 'input', 
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input', 
        message: 'Questions',
        name: 'questions'
    },
   
]).then((response) => console.log(response))
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
