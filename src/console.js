var colors = require('colors/safe');
var instance = {};

instance.log = (message) => {
	
	message = colors.cyan('[ZenX] ') + message;
	
	console.log(message);
	
}

instance.warn = (message) => 
	instance.log(colors.yellow('Warning: ' + message));

instance.error = (message) => 
	instance.log(colors.red('Error: ' + message));

module.exports = instance;