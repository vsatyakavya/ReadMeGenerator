// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
  ## Description
  ## ${data.description} 
  ## ${data.install} 
  ## ${data.usage} 
  ## ${data.guidelines}
   ${data.test}
  ## ${data.licence}
  
  `;
  }
  
  module.exports = generateMarkdown;
  