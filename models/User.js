let isaura = require('adminpanel');
let Types = isaura.Types;

let User = new isaura.List('user', {
    name: {type: Types.Text, defaultValue: 'Name', allowNull: false},
    phone: {type: Types.Text, defaultValue: '999 999 99 99 ', allowNull: false},
}, {

});

module.exports = User.model;


/*
// Provide access to Keystone
User.addClassMethod('canAccessKeystone', function () {
	return true;
});

var User = new keystone.List('User', {
	// nodelete prevents people deleting the demo admin user
	nodelete: true,
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	phone: { type: String, width: 'short' },
	photo: { type: Types.CloudinaryImage, collapse: true },
	password: { type: Types.Password, initial: true, required: false },
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: true },
});



User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
}


User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();

*/