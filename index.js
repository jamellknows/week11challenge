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
    }
    {
        type: 'input', 
        message: 'Description',
        name: 'description'
    }
   
])
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
