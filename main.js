// Returns useful utilities
module.exports = {
	
	// Utils
	gen: require('./src/gen.js'),
	console: require('./src/console.js'),
	uuid: require('./src/uuid.js'),
	logUserIn: require('./src/logUserIn.js'),
	packUserData: require('./src/packUserData.js'),
	
	// Export internal tools
	jade: require('jade'),
	pwHash: require('password-hash'),
	mongodb: require('mongodb'),
	colors: require('colors/safe'),
	fb: require('fb'),
	
	// Constructors
	Timer: require('./src/timer.js'),
	ApiResponse: require('./src/models/apiResponse.js'),
	SessionToken: require('./src/models/sessionToken.js'),
	User: require('./src/models/user.js'),
	CacheItem: require('./src/models/cacheItem.js')
	
}