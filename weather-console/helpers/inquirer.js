const inquirer = require('inquirer');
require('colors');

const questions = [{
  type: 'list',
  name: 'option',
  message: 'What would you like to do?',
  choices: [
    {value: 1, name: `${ '1.'.green } Search city`},
    {value: 2, name: `${ '2.'.green } History`},
    {value: 0, name: `${ '0.'.green } Go out`}
  ]
}];

const showMenu = async() => {
  console.clear();
  console.log('===================================================='.green);
  console.log('                  Select an option                  '.white);
  console.log('====================================================\n'.green);

  const { option } = await inquirer.prompt(questions);
  return option;
}

const pause = async() => {
  console.log('\n');
  await inquirer.prompt([{
    type: 'input',
    name: 'enter',
    message: `Press ${ 'ENTER'.green } to continue`}
  ]);
}

const readInput = async( message ) => {
  const question = [{
    type: 'input',
    name: 'description',
    message,
    validate( value ) {
      if( value.length === 0 ){
        return 'Please enter a value';
      }

      return true;
    }
  }];

  const { description } = await inquirer.prompt( question );
  return description;
}

const showPlaces = async( places = [] ) => {
  console.log();

  const choices = places.map(( place, i ) => {
    const idx = `${ i + 1 }`;
    return {
      value: i,
      name: `${ idx + '.'.toString().green } ${ place.name }`
    }
  });

  choices.unshift({value: 0, name: '0. '.green + 'Cancel'});

  const options = [{
    type: 'list',
    name: 'id',
    message: 'Select place:',
    choices
  }];

  const { id } = await inquirer.prompt( options );
  return id;
}

module.exports = {
  showMenu,
  pause,
  readInput,
  showPlaces
}