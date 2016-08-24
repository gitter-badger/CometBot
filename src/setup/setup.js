'use strict';

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

export default {
  initial () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'list',
        message: 'list',
        choices: [
          'item 1',
          'item 2',
          'item 3',
        ]
      }
    ]).then(answers => {

    });
  },


}

//
// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'test',
//     message: 'Hello World!',
//     choices: [
//       'A',
//       'B',
//       'C',
//     ],
//   },
// ]).then(answers => {
//   return new Promise((resolve, reject) => {
//     // Setup the configuration layout
//     const config = {
//
//       // Example bot setup
//       bots: [
//         {
//           username: 'cometbot',
//           realname: 'cometbot',
//
//           plugins: {
//             example: {
//               enabled: true
//             }
//           }
//         }
//       ]
//     };
//
//     // Write to the configuration file
//     fs.writeFile(path.join('config.json'), JSON.stringify(config, null, 2), err =>
//       err ? reject(err) : resolve());
//   });
// })
//   .then(file => console.log(`Configuration file written to ${file}`))
//   .catch(err => console.log('Error', err));
