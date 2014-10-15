/*
 * An Ain2 based Syslog transport for winston.
 */

// Load necessary modules
var util = require('util');
var winston = require('winston');
var SysLogger = require('ain2');

/**
 * @constructor
 *
 * @param {Object} [options] - Options are passed through to ain2
 */
var SyslogAin2 = winston.transports.SyslogAin2 = function(options)
{
     // Call parent transport constructor
    winston.Transport.call(this, options);

    // Name this logger
    this.name = 'syslog-ain2';

    // Set the level from your options
    this.level = options.level || 'emerg';

    // Setup the levels for checking
    this.validLevels = Object.keys(winston.config.syslog.levels);

    // Setup options if skipped
    options = options || {};

    // Setup a new ain2 instance with the options
    this.ain = new SysLogger(options);
};

// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
util.inherits(SyslogAin2, winston.Transport);

// Expose the name of this Transport on the prototype
SyslogAin2.prototype.name = 'SyslogAin2';

/**
 * Core logging method exposed to Winston. Logs the `msg` and optional
 * metadata, `meta`, to the specified `level`.
 *
 * @param {String} level - Target level to log to
 * @param {String} msg - Message to log
 * @param {Object} meta - **Optional** Additional metadata to log.
 * @param {Function} callback - Continuation to respond to when complete.
 */
SyslogAin2.prototype.log = function(level, msg, meta, callback)
{
    if (!~this.validLevels.indexOf(level)) {
        return callback(new Error('Cannot log unknown syslog level: ' + level));
    }

    // Build a suffix if we got meta info
    var suffix = (
        typeof(meta) == 'object' && meta && Object.keys(meta).length
            ? (' ' + util.inspect(meta))
            : ''
    );

    // Send the message to ain2
    this.ain.send(msg + suffix, level);

    // Inform winston
    callback(null, true);
};

