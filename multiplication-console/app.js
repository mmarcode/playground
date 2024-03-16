const { createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');

console.clear();

createFile( argv )
  .then(filename => {
    console.log( filename );
  })
  .catch(err => {
    console.log( err );
  });