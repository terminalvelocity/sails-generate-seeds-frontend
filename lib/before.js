/**
 * Module dependencies
 */

// var util = require('util')
// var crypto = require('crypto');
var _ = require('lodash');

// Make _.defaults recursive
_.defaults = require('lodash.defaults');

/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {
  scope.appname = scope.args[0];

  _.defaults(scope, {
    appname: 'frontend',
    author: process.env.USER || ''
  });


  if (!scope.rootPath) {
    return cb(new Error(
      'Missing scope variable: `rootPath`\n' +
      'Please make sure it is specified and try again.'
    ));
  }

  cb();
};
