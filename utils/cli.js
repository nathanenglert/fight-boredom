const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},

	type: {
		type: `string`,
		desc: `Find a random activity with a given type. 
Possible values: [ "education", "recreational", "social", "charity",
                   "diy", "cooking", "relaxation", "music", "busywork" ]
`
	},
	participants: {
		type: `number`,
		desc: `Find a random activity with a given number of participants. 
Possible values: [0, n]`
	},	
	price: {
		type: `string`,
		desc: `Find an activity with a specified price. 
Possible values: [0.0, 1.0]`
	},
	accessibility: {
		type: `string`,
		desc: `Find an activity with a specified accessibility factor. 
Possible values: [0.0, 1.0]`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `bored`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
