'use strict';

import Bot from './bot';

new Bot({
  client: {
    server: 'irc.freenode.org',
    nickname: 'cometbot',
    username: 'cometbot',
    realname: 'CometBot',
    port: 6667,
    localAddress: null,
    debug: false,
    showErrors: false,
    autoRejoin: false,
    channels: ['#cometbot'],
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: false,
    floodProtectionDelay: 1000,
    sasl: false,
    retryCount: 0,
    retryDelay: 2000,
    stripColors: false,
    channelPrefixes: '*&#',
    messageSplit: 512,
    encoding: '',
  },

  plugins: [
    {
      plugin: 'example',
      enabled: true,
      settings: {
        // None...
      }
    }
  ]
});

// When CometBot cannot find the config.json file it will automatically launch
// the setup script.
// if (!fs.accessSync(path.join('config.json'), fs.constants.F_OK | fs.constants.R_OK)) {
//   require('./setup');
// } else {
//   const config = require('../config');
// }
