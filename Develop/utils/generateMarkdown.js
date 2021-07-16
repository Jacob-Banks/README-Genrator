// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let screenshots = "";
  if (data.image) {
    for (let i = 0; i < data.image.split(",").length; i++) {
      screenshots += `![screenshot${i + 1}](${data.image
        .split(",")
        [i].trim()})`;
    }
  }
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  ${screenshots}

  ## Credits
  ${data.credits}

  ## License

  to be figured out next

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ##Questions
  Contact ${data.userName} with any questions!<br>
  Github link: [${data.gitHubName
    .trim()
    .toLowerCase()}](https://github.com/${data.gitHubName
    .trim()
    .toLowerCase()})<br>
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
