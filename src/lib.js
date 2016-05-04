'use strict';

const dirname = require('path').dirname;
const fs = require('fs');
const mkdirp = require('mkdirp');
const qr = require('qr-image');

module.exports = (configs) => {
  for (const config of configs) {
    mkdirp.sync(dirname(config.path));
    qr.image(config.url, config.options).pipe(fs.createWriteStream(config.path));
  }
};
