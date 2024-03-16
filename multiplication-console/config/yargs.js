const argv = require('yargs')
  .option({
    'b': {
      alias: 'base',
      demandOption: true,
      describe: 'Multiplication base number',
      type: 'number'
    },
    's': {
      alias: 'show',
      demandOption: false,
      default: false,
      describe: 'Show multiplication table',
      type: 'boolean'
    },
    'l': {
      alias: 'limit',
      demandOption: false,
      default: 10,
      describe: 'Multiplication table limit',
      type: 'number'
    },
    'n': {
      alias: 'name',
      demandOption: false,
      default: 'multiplication-table',
      describe: 'Filename',
      type: 'string'
    }
  })
  .check(( argv, options ) => {
    if( isNaN(argv.b) )
      throw 'The base has to be a number.';

    if( isNaN(argv.l) )
      throw 'The limit has to be a number';

    return true;
  })
  .argv;

module.exports = argv;