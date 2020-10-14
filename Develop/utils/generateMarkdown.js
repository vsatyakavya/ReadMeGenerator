// function to generate markdown for README
function generateMarkdown(data) {
 
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    # ${data.title} 
  ## Description
  ${data.description} 
  ## Installation instructions
  ${data.install} 
  ## Usage
   ${data.usage} 
  ## Contribution
   ${data.guidelines}  
  ## Test Instructions
   ${data.test}
  ## Licence
   ${data.licence}
  
  `;
  }
  
  module.exports = generateMarkdown;
  