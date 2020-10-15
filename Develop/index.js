var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = ["what is your title", "Give some description", "Give install instructions",
    "what is the usage ", "what are the guidelines ", "Give some test instructions ",
    "Select the licence ","Enter your email id","enter your github "


];
function init() {
    
    const licences = [ "MIT","Apache-2.0","GPL-2.0"];

  return  inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
                type: "input",
                message: questions[1],
                name: "description"
            },
            {
                type: "input",
                message: questions[2],
                name: "install"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage"
            },
            {
                type: "input",
                message: questions[4],
                name: "guidelines"
            },
            {
                type: "input",
                message: questions[5],
                name: "test"
            },
            {
                type: "list",
                message: questions[6],
                name: "licence",
                choices: licences,

            },
            {
                type: "input",
                message: questions[7],
                name: "email",
                

            } ,{
                type: "input",
                message: questions[8],
                name: "github",
                

            }

        ]);
    // .then(function(data){
    //    var result =(generateMarkdown(data));
    //    writeToFile("README.md", result);
    //       console.log("success");
    //     })
}




// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName,data+"\n",function(err){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("success2");
//         }
//     })
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
init()
    .then(function (data) {
        var mdFormat = (generateMarkdown(data));
        return writeFileAsync("readme.md", mdFormat);
    })
    .then(function () {
        console.log("successfully readme created!!!")
    })
    .catch(function (err) {
        console.log(err);
    });

