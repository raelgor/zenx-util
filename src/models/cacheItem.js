'use strict';

module.exports = class ZenXCacheItem {
	
	constructor(options) {
		
		// Indexes this object is attached to
		this.indexes = [];
		
		// The item's content
		this.data = options.data;
		
		// Attach directly if specified
		this.attachTo(...options.attachTo);
		
	}
	
	// Attach item to index
	attachTo(key, indexObject) {
		
		if(key instanceof Array){
			
			for(let bond of key)
				this.attachTo(...bond);
			
			return this;
			
		} 
		
		indexObject[key] = this;
		
		// Register bond
		this.indexes.push({ key, indexObject });
		
		return this;
		
	}
	
	// Detach from objects
	unCache(){
		
		var bond;
		
		while(bond = this.indexes.shift())
			delete bond.indexObject[bond.key];
		
	}
	
}