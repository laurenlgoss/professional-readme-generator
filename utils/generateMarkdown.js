// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "ISC") {
    return "https://www.isc.org/licenses/";
  } else if (license === "MIT") {
    return "https://www.mit.edu/~amini/LICENSE.md";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `Licensed under the ${license} license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ${renderLicenseBadge(response.license)}

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

  [${renderLicenseSection(response.license)}](${renderLicenseLink(response.license)})

  `;
}

module.exports = generateMarkdown;