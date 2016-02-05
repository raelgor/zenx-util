'use strict';

// A function that logs a ZenXUser object in over an
// express response object and updates the cache via
// a ZenXCacheClient object
var SessionToken = require('./models/sessionToken.js');

module.exports = (user, res, cache) => {
	
	return new Promise((resolve) => {
		
		// Make a new token
		// @todo Link to default login time setting
		let newToken = new SessionToken({ 
			expires: new Date().getTime() + (24*60*60*1e3) 
		});
		
		// Add it to the user and update cache
		user.addToken(newToken)
			.updateCache(cache)
			.then(resolve);
			
		// Write cookie and respond
		res.cookie(
			'auth', 
			newToken.token, 
			{ 
				maxAge: 24 * 60 * 60 * 1000, 
				httpOnly: true, 
				secure: true
			}
		);
		
	});
	
}