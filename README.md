# utility-debug aka sumo-debug
created by Elgatha Lee for WDD program at Full Sail University.<br>


# Purpose<br>
Sumo Debug is a very simple/rudimentary debug tool assist developers in debugging their API application.

# Installation
<br>
Using utility-debug-tool aka sumo-debug begin the process in your terminal by<br>
typing npm install sumo-debug ...<br>

# Dependents
<br>
There are several dependencies that are in the package.json file, but the main ones that make Sumo Debug work are:<br>
"eslint": "^3.17.1",<br>
"eslint-config-airbnb": "^14.1.0",<br>
"eslint-plugin-import": "^2.2.0",<br>
"eslint-plugin-jsx-a11y": "^4.0.0",<br>
"eslint-plugin-react": "^6.10.0",<br>
"mocha-sinon": "^1.1.6",<br>
"sinon": "^1.17.7"<br>
<br>
# Usage
<br>
To turn on Sumo-Debug you have to include dotenv into the project.<br>
To accomplish this you MUST do: npm install dotenv<br>

After you have done that you MUST create a .env file and declare DEBUG=true<br>
None of this means anything if you don't require the dotenv<br>
  require('dotenv')<br>
  then add .config()<br>
  and in config add sumo-debug<br>
  something like this:<br>
  require('dotenv').config('sumo-debug');<br>
using sumo-debug allows you to do something that I feel is important<br>
it will allow you to log messages which will be displayed in your console.<br>
