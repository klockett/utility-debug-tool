const colors = require('colors');

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
