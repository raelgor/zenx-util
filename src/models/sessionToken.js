'use strict';

var uuid = require('./../uuid.js');

// Used by ZenXUser to create session tokens (cookies)
module.exports = class ZenXSessionToken {
	
	constructor (options) {
		
		this.expires = new Date().getTime() + (24*60*60*1e3);
		this.token = uuid().split('-').join('');
		
		// Overwrite 
		for(let key in options) this[key] = options[key];
		
	}
	
}