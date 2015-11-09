// Returns useful utilities
module.exports = {
	
	gen: require('./src/gen.js'),
	colors: require('colors/safe'),
	console: require('./src/console.js'),
	Timer: require('./src/timer.js'),
	uuid: require('./src/uuid.js'),
	pwHash: require('password-hash'),
	mongodb: require('mongodb'),
	
	// Export internal tools
	jade: require('jade')
	
}