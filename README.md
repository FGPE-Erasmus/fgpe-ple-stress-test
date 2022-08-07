# FGPE PLE Stress test
This is an FGPE Learning Platform stress test repository. This project uses cypress and cucumber libraries to simulate multiple users and test the performance of the whole platform.

## Setup
Install Node.js (version LTS recommended) from https://nodejs.org

Then run the following command in the root folder:
```sh
npm install
```

## Commands
After the packages install successfully we can run any of the following commands.

### `npm start`
Opens the Cypress UI. Used to execute individual feature files or inspect the browser.

### `npm test`
Runs all tests in the console. Used in CI or to quickly execute all feature files.

## Folder structure
- `cypress`
  - `e2e`
    - `fgpe-ple` - contains features and tests of the FGPE PLE
    - `fixtures` - contains an example fixture file provided by Cypress

## Resources
- Cypress API documentation: https://docs.cypress.io/api
- Writing Cucumber expressions: https://github.com/cucumber/cucumber-expressions#readme
- Configuration options: https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor

## Acknowledgments

<table cellspacing="0" cellpadding="0" border=0>
<tr border=0>
<td border=0>

This software has been developed as a part of the Framework for Gamified Programming Education project ([https://fgpe.usz.edu.pl/](https://fgpe.usz.edu.pl/)), co-funded by the Erasmus+ Programme of the European Union.

</td>
<td border=0>

![Framework for Gamified Programming Education project](https://raw.githubusercontent.com/FGPE-Erasmus/fgpe-ple-v2/master/docs/logo_FGPE.jpeg) ![Erasmus+](https://raw.githubusercontent.com/FGPE-Erasmus/fgpe-ple-v2/master/docs/logo_erasmus.jpeg)

</td>
</tr>
</table>

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
