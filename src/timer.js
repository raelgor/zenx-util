'use strict';

module.exports = class {
	
	constructor() {
	
		this.init = process.hrtime();
		
	}
	
	get now() {
		return parseInt(String(process.hrtime(this.init)[1] / 1e6));
	}
	
	get nowMicro() {
		return parseInt(String(process.hrtime(this.init)[1] / 1e3));
	}
	
	get nowNano() {
		return parseInt(String(process.hrtime(this.init)[1]));
	}
	
}