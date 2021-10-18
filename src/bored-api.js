const ora = require('ora');
const alert = require('cli-alerts');
const axios = require('axios');
const { dim, bold } = require('chalk');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const { flags } = require('../utils/cli');
const validator = require('validator');

const spinner = ora({ text: '' });
const apiURL = `https://www.boredapi.com/api/activity?`;

function validateIfNumeric(key, value) {
    if (validator.isNumeric(value)) return;

    alert({
        type: 'error',
        name: 'Validation',
        msg: `Invalid value in ${bold(key)} argument, check out help for options.`
    });

    process.exit(0);
}

function addNumericVariable(key) {
    var ret = '';

    var range = flags[key].split('-');
    range.forEach((value) => validateIfNumeric(key, value));

    if (range.length === 1)
        ret = `${key}=${range[0]}&`;
    else if (range.length > 1)
        ret = `min${key}=${range[0]}&max${key}=${range[1]}&`;

    return ret;
}

module.exports = async () => {
    var query = apiURL
        + (flags.participants ? `participants=${flags.participants}&` : ``)
        + (flags.price ? addNumericVariable('price'): ``)
        + (flags.accessibility ? addNumericVariable('accessibility') : ``);      

    spinner.start(dim(`Fetching something to do...`));
    
    const [err, res] = await to(axios.get(query));
    handleError(`API CALL FAILED`, err, true, true);

    const thing = res.data;
    const activity = thing.activity.charAt(0).toLowerCase() + thing.activity.slice(1);

    spinner.stop();
    
    console.log(`${dim(`How about you`)} ${bold(activity)}${dim(`?`)}`);
    thing.link && console.log(dim(thing.link));
    console.log();
    console.log();
};