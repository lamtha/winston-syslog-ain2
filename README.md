# winston-syslog-ain2

An Ain2 based Syslog transport for [winston][0].

## Installation

### Installing npm (node package manager)

``` bash
  $ curl http://npmjs.org/install.sh | sh
```

### Installing winston-syslog

``` bash
  $ npm install winston 
  $ npm install winston-syslog-ain2
```

## Usage
To use this Syslog transport in [winston][0], you simply need to require it and then either add it to an existing [winston][0] logger or pass an instance to a new [winston][0] logger:

``` js
  var winston = require('winston');
  
  var SyslogAin2=require('winston-syslog').SyslogAin2;
  
  winston.add(SyslogAin2,{});
```

 Options are passed through to ain2

## Log Levels

The `Syslog` transport will only log to the level that are available in the syslog protocol. These are (in increasing order of severity):

* debug
* info
* notice
* warning
* error
* crit
* alert
* emerg

## Syslog Configuration

See ain2


#### Author: [lamtha]

[0]: https://github.com/indexzero/winston
