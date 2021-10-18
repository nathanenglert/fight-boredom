#!/usr/bin/env node

/**
 * bored
 * Find something to do to fight boredom.
 *
 * @author Nathan Englert <https://nathanenglert.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const alert = require('cli-alerts');
const api = require('./src/bored-api');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	(await api(flags));

	debug && log(flags);
})();
