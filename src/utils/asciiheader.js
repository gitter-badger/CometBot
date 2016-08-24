'use strict';

import chalk from 'chalk';
import packageFile from '../../package';

// Clearout the console
process.stdout.write('\u001b[2J\u001b[0;0H');

console.log(chalk.blue('▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  '), chalk.white(' ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ '));
console.log(chalk.blue('▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌'), chalk.white(' ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌'));
console.log(chalk.blue('▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ '), chalk.white(' ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ '));
console.log(chalk.blue('▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌               ▐░▌     '), chalk.white(' ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     '));
console.log(chalk.blue('▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     '), chalk.white(' ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     '));
console.log(chalk.blue('▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌     '), chalk.white(' ▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     '));
console.log(chalk.blue('▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     '), chalk.white(' ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌     ▐░▌     '));
console.log(chalk.blue('▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     '), chalk.white(' ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     '));
console.log(chalk.blue('▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     '), chalk.white(' ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     '));
console.log(chalk.blue('▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     '), chalk.white(' ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌     ▐░▌     '));
console.log(chalk.blue('▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       '), chalk.white(' ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀       ▀      '));
console.log(chalk.blue('☄️  CometBot - A modular IRC bot written in NodeJS                 '), chalk.white(`Version ${packageFile.version}`));

console.log('\n');
