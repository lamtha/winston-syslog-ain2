/*
 * MIT LICENCE
 */

var util = require('util'),
    winston = require('winston'),
    SysLogger = require("ain2");

var SyslogAin2 = exports.SyslogAin2 = function (options) {
  winston.Transport.call(this, options);
  options = options || {};
  this.ain = new SysLogger(options);
};

util.inherits(SyslogAin2, winston.Transport);

SyslogAin2.prototype.name = 'SyslogAin2';

SyslogAin2.prototype.log = function (level, msg, meta, callback) {
  this.ain[level](msg + (null!=meta ? ' '+util.inspect(meta) : ''));
  callback();
};
