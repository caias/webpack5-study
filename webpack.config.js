/**
 * webpack root config by env
 */
'use strict';

const env = process.env.NODE_ENV || 'development';

module.exports = require(`./config/${env}.js`);
