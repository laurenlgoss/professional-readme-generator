// Return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n";
  } else if (license === "GNU GPLv3") {
    return "\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
  } else if (license === "ISC") {
    return "\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n";
  } else if (license === "MIT") {
    return "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
  }
  // If there is no license, return an empty string
  else {
    return "";
  }
}

// Return the license link
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "(https://www.apache.org/licenses/LICENSE-2.0)";
  } else if (license === "GNU GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "ISC") {
    return "(https://www.isc.org/licenses/)";
  } else if (license === "MIT") {
    return "(https://www.mit.edu/~amini/LICENSE.md)";
  } 
  // If there is no license, return an empty string
  else {
    return "";
  }
}

// Return the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `[Licensed under the ${license} license.]`;
  } 
  // If there is no license, return an empty string
  else {
    return "";
  }
}

// Generate markdown for README
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

  ${renderLicenseSection(response.license)}${renderLicenseLink(response.license)}

  `;
}

module.exports = generateMarkdown;