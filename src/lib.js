'use strict';

const dirname = require('path').dirname;
const fs = require('fs');
const mkdirp = require('mkdirp');
const qr = require('qr-image');

module.exports = (configs) => {
  for (let config of configs) {
    mkdirp.sync(dirname(config.path));
    var qr_svg = qr.image(config.url);
    qr_svg.pipe(fs.createWriteStream(config.path));
  }
};
