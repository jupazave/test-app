let isaura = require('adminpanel');
let Types = isaura.Types;

let User = new isaura.List('user', {label: 'Usuarios'});

User.build({
	name: { type: Types.Text, required: true, index: true },
	phone: { type: Types.Text, required: true, index: true },
	email: { type: Types.Text, required: true, index: true, unique: true }
});

User.addMethod('isAdmin', function () {
	return true;
});

// User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.register();

module.exports = User;
