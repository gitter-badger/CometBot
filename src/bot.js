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
     * @type {Object}
     */
    this.pluginList = {};

    // When the construction of the bot is completed, start loading the configured
    // plugins. However, filter all `enabled: false` plugins which should not be loaded
    settings.plugins.forEach(plugin => {
      if (plugin.plugin !== undefined && plugin.enabled !== false) {
        this.loadPlugin(plugin.plugin, plugin.settings || {});
      }
    });
  }

  loadPlugin (plugin, settings) {
    // @TODO
  }

  unloadPlugin (plugin) {
    // @TODO
  }
}
