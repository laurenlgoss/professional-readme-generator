// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ## Description

  ${response.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Contributing](#Contributing)
  * [License](#License)

  ## Installation

  ${response.installation}

  ## Usage

  ${response.usage}

  ## Tests

  ${response.tests}

  ## Questions

  Do you have questions? Contact me here:

  * [GitHub](https://github.com/${response.github})
  * [Email](${response.email})

  ## Contributing

  ${response.contributing}

  ## License


  `;
}

module.exports = generateMarkdown;