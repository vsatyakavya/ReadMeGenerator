// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
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
  