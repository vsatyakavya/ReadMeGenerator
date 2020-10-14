// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
  ## Description
  ${data.description} 
  Title | content
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
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
  * ${data.github} https://github.com/${data.github}
  ## Licence
   ${data.licence}
  
  `;
  }
  
  module.exports = generateMarkdown;
  