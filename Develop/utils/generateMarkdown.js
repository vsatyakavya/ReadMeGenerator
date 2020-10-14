// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
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
  * [${data.github}](https://github.com/${data.github}
  ## Licence
   ${data.licence}
  
  `;
  }
  
  module.exports = generateMarkdown;
  