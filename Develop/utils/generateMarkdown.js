// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
[![Github license](https://img.shields.io/badge/License-${data.licence}-yellowgreen)](https://choosealicense.com/licenses/${data.licence}/)
  
  ## Description
  ${data.description} 

  LINKS | 
  ------------ | 
  [Description](#description) | 
  [Installation Instructions](#installation-instructions) | 
  [Usage](#usage) | 
  [Contribution](#contribution) | 
  [Test Instructions](#test-instructions) | 
  [Questions](#questions) | 
  [Licence](#licence) | 
  

  
## Installation instructions
  ${data.install} 
  ## Usage
  ${data.usage} 
   ## Contribution
   ${data.guidelines}  
  ## Test Instructions
   ${data.test}
  ## Questions
  * ${data.email}
  * [${data.github}](https://github.com/${data.github})
  ## Licence
   [${data.licence}](https://choosealicense.com/licenses/${data.licence}/)
  
  `;
  }
  
  module.exports = generateMarkdown;
  