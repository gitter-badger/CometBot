'use strict';

import irc from 'irc';
import fs from 'fs';
import path from 'path';

export default class {
  constructor (settings) {
    /**
     * The bot settings, containing client information, plugin information and
     * some general settings
     * @type {Object}
     */
    this.settings = settings;

    /**
     * The irc client
     * @return {irc}  The irc client
     */
    this.client = new irc.Client(
      settings.client.server,
      settings.client.nickname,
      settings.client
    );

    /**
     * Contains all loaded plugins for the current bot
     * @type {Array}
     */
    this.pluginList = [];

    // When the construction of the bot is completed, start loading the configured
    // plugins. However, filter all `enabled: false` plugins which should not be loaded
    // settings.plugins.forEach(plugin => this.loadPlugin(plugin.name, ));
    this.loadPlugin('example', {enabled: false})
      .then(plugin => console.log('Plugin loaded..', plugin.name))
      .catch(err => console.log('Plugin not loaded..', err));
  }

  loadPlugin (name, settings) {
    return new Promise((resolve, reject) => {
      // Check if the plugin has been disabled
      if (settings.enabled !== false) {
        return reject('Plugin disabled');
      }

      // Check if the plugin already is loaded
      if (this.pluginList.find(plugin => plugin.name === name) !== undefined) {
        return reject('Plugin already loaded');
      }

      // Check if the plugin name exists in the plugin folder
      fs.access(path.join(__dirname, 'plugins', name, 'index.js'), fs.constants.F_OK | fs.constants.R_OK, err => {
        if (err) {
          return reject(err);
        }

        const Plugin = require(path.join(__dirname, 'plugins', name, 'index.js')).default;

        const pluginItem = {
          name,
          settings,
          plugin: new Plugin(settings, {
            client: this.client,
          }),
        };

        this.pluginList.push(pluginItem);

        return resolve(pluginItem);
      });
    });
  }

  unloadPlugin (plugin) {
    // @TODO
  }
}


// if (!fs.accessSync(path.join('config.json'), fs.constants.F_OK | fs.constants.R_OK)) {
//   require('./setup');
// } else {
//   const config = require('../config');
// }
