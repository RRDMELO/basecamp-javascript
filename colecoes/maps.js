const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		admins.push({key, value: value===true? 'Has ADMIN': 'No ADMIN'});
		
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', true);
userRoles.set('Luiz', true);
userRoles.set('Elvira', true);
userRoles.set('Carolina', false);
userRoles.set('Guilherme', false);
userRoles.set('Robson', true);

console.log(getAdmins(userRoles));
