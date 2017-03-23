# Utility Debug Tool
 created by Elgatha Lee for WDD program at Full Sail University.


# Installation

To install from npmjs.org: with utility-debug-tool

In TERMINAL "npm -i utility-debug-tool --save dev"

#Usage

To utilize debug tool add "DEBUG=true nodemon src/server.js"
```javascript

const util = require('utility-debug-tool');

// bump
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');

// success msg
util.debug('patch', patch, true);
util.debug('minor', minor, true);

// Error Msg
util.debug('major', major, false);


```
