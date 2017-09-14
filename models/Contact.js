let isaura = require('adminpanel');
let Types = isaura.Types;

let Enquiry = new isaura.List('enquiry', { label: 'Contactos'});

Enquiry.build({
	name: { type: Types.Text, required: true, index: true },
	phone: { type: Types.Text, required: true, index: true },
	email: { type: Types.Text, required: true, index: true, unique: true },
	new: { type:Types.Boolean }
});

Enquiry.addMethod('isAdmin', function () {
	return true;
});

// User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

Enquiry.register();

module.exports = Enquiry;
