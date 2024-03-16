const fs = require('fs');
const colors = require('colors');

const createFile = async ({ base, show, limit, name }) => {
  try {
    let output_message = '';
  
    for(let i = 1; i <= limit; i++) {
      output_message += `${ base } x ${ i } = ${ base * i }\n`;
    }

    if( show ) {
      console.log( colors.rainbow('================================') );
      console.log( colors.rainbow(` MULTIPLICATION TABLE ${ base } `) );
      console.log( colors.rainbow('================================') );
      console.log( colors.rainbow(output_message) );
    }

    fs.writeFileSync(`./output-files/${ name }-${ base }.txt`, output_message);
  
    return `${ name }-${ base }.txt created`;
  } catch( err ) {
    throw err;
  }
}

module.exports = {
  createFile
}