const colors = require('colors');

exports.bump = (currentSemVersion, typeofIncrement) => {

  // Major [0]
  // Minor [1]
  // Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for (let versionIndex in aryVersions) {
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if (typeofIncrement === 'patch') {
    aryVersions[2] += 1; // patch
  } else if (typeofIncrement === 'minor') {
    aryVersions[2] = 0; // patch
    aryVersions[1] += 1; // minor
  } else if (typeofIncrement === 'major') {
    aryVersions[2] = 0; // patch
    aryVersions[1] = 0; // minor
    aryVersions[0] += 1; // minor
  }

  return aryVersions.join('.');
}

// I set my colours for RGB
colors.setTheme({
  error: 'red',
  warn: 'blue',
  success: 'green',
});

// .env var DEBUG=true runs this function
exports.debug = (msg, type) => {
  if (process.env.DEBUG === 'true') {
    if (type === 'warn') {
      // Warnings
      console.warn(colors.warn(msg));
    } else if (type === 'error') {
      // Errors
      console.error(colors.error(msg));
    } else {
      // Success
      console.log(colors.success(msg));
    }
  }
};
