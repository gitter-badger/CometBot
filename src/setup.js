'use strict';

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'list',
    name: 'test',
    message: 'Hello World!',
    choices: [
      'A',
      'B',
      'C',
    ],
  },
]).then(answers => {
  return new Promise((resolve, reject) => {
    // Setup the configuration layout
    const config = {
      test: 'Hello World',
      hw: answers
    };

    // Write to the configuration file
    fs.writeFile(path.join('config.json'), JSON.stringify(config, null, 2), err =>
      err ? reject(err) : resolve());
  });
})
  .then(file => console.log(`Configuration file written to ${file}`))
  .catch(err => console.log('Error', err));
