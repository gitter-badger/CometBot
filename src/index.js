'use strict';

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

// Check if the configuration file exists.
if (!fs.accessSync(path.join('config.json'), fs.constants.F_OK | fs.constants.R_OK)) {
  inquirer.prompt([
    {
      'type': 'confirm',
      'name': 'continue',
      'message': 'Configuration file is missing, run the setup',
      'default': true
    }
  ]).then(answers => {
    if (answers.continue === false) {
      process.exit(1);
    }
    require('./setup');
  });
}
