module.exports = (user) => {
	
	return {
		uuid: user.uuid,
		permissions: user.permissions,
		settings: user.settings
	}

}