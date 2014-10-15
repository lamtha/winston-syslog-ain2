# winston-syslog-ain2

An [ain2][1] based Syslog transport for [winston][0].

## Installation

``` bash
$ npm install --save winston
$ npm install --save winston-syslog-ain2
```

## Usage

To use the Syslog transport in [winston][0], you simply need to require it and
then either add it to an existing [winston][0] logger or pass an instance to a
new [winston][0] logger:

``` js
// Load winston
var winston = require('winston');

// Explain winston it should use syslog log-levels
winston.setLevels(winston.config.syslog.levels);

// Load winston-syslog-ain2 module
require('winston-syslog-ain2');

// Setup the syslog-ain2 transport
winston.add(winston.transports.SyslogAin2, {
    tag       : process.title, // By default is __filename
    facility  : 'local1',      // By default is "user"
    address   : '10.0.0.253',  // By default is 127.0.0.1
    hostname  : os.hostname(), // By default is require("os").hostname()
    port      : 514,           // Defaults to 514
    transport : 'UDP',         // Defaults to Transport.UDP
});
```

Options are passed through to [ain2][1].

## Log Levels

The `Syslog` transport will only log to the level that are available in the
syslog protocol. These are (in increasing order of severity):

| Code | Keyword    | Description                                |
|------|------------|--------------------------------------------|
| 0    | emerg      | System is unusable.                        |
| 1    | alert      | Action must be taken immediately.          |
| 2    | crit       | Critical conditions.                       |
| 3    | error      | Error conditions.                          |
| 4    | warning    | Warning conditions.                        |
| 5    | notice     | Normal but significant condition.          |
| 6    | info       | Informational messages.                    |
| 7    | debug      | Debug-level messages.                      |

## Facility Levels

| Facility Number | Keyword  | Facility Description                     |
|-----------------|----------|------------------------------------------|
| 0               | kern     | kernel messages                          |
| 1               | user     | user-level messages                      |
| 2               | mail     | mail system                              |
| 3               | daemon   | system daemons                           |
| 4               | auth     | security/authorization messages          |
| 5               | syslog   | messages generated internally by syslogd |
| 6               | lpr      | line printer subsystem                   |
| 7               | news     | network news subsystem                   |
| 8               | uucp     | UUCP subsystem                           |
| 10              | authpriv | security/authorization messages          |
| 11              | ftp      | FTP daemon                               |
| 15              | cron     | clock daemon                             |
| 16              | local0   | local use 0 (local0)                     |
| 17              | local1   | local use 1 (local1)                     |
| 18              | local2   | local use 2 (local2)                     |
| 19              | local3   | local use 3 (local3)                     |
| 20              | local4   | local use 4 (local4)                     |
| 21              | local5   | local use 5 (local5)                     |
| 22              | local6   | local use 6 (local6)                     |
| 23              | local7   | local use 7 (local7)                     |

[0]: https://github.com/flatiron/winston
[1]: https://github.com/phuesler/ain
