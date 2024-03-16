const fs = require('fs');

const dir = './db';
const file = 'data.json';

const saveInformation = ( data ) => {
  try {
    if( !fs.existsSync( dir ) )
      fs.mkdirSync( dir );

    fs.writeFileSync( `${ dir }/${ file }`, JSON.stringify( data ));
  } catch( err ) {
    throw err;
  }
}

const readInformation = () => {
  try {
    if( !fs.existsSync(`${ dir }/${ file }`) )
      return null;

    const info = fs.readFileSync( `${ dir }/${ file }`, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    return data;
  } catch( err ) {
    throw err;
  }
}

module.exports = {
  saveInformation,
  readInformation
}