// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title} 
    ${data.description}
    ${data.install} 
    ${data.usage} 
    ${data.guidelines}
    ${data.test}
     ${data.licences}
  
  `;
  }
  
  module.exports = generateMarkdown;
  