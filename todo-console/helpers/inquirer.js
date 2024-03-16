const inquirer = require('inquirer');
require('colors');

const questions = [{
  type: 'list',
  name: 'option',
  message: 'What would you like to do?',
  choices: [
    {value: '1', name: `${ '1.'.green } Create task`},
    {value: '2', name: `${ '2.'.green } List tasks`},
    {value: '3', name: `${ '3.'.green } List completed tasks`},
    {value: '4', name: `${ '4.'.green } List pending tasks`},
    {value: '5', name: `${ '5.'.green } Complete task(s)`},
    {value: '6', name: `${ '6.'.green } Delete task`},
    {value: '0', name: `${ '0.'.green } Go out`}
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

const showTasksDelete = async( tasks = [] ) => {
  console.log();

  const choices = tasks.map(( task, i ) => {
    const idx = `${ i + 1 }.`;
    return {
      value: task.id,
      name: `${ idx.toString().green } ${ task.description }`
    }
  });

  choices.unshift({value: '0', name: '0. '.green + 'Cancel'});

  const options = [{
    type: 'list',
    name: 'id',
    message: 'Delete',
    choices
  }];

  const { id } = await inquirer.prompt( options );
  return id;
}

const confirm = async( message ) => {
  const question = [{
    type: 'confirm',
    name: 'ok',
    message
  }];

  const { ok } = await inquirer.prompt( question );
  return ok;
}

const showTasksCheck = async( tasks = [] ) => {
  console.log();

  const choices = tasks.map(( task, i ) => {
    const idx = `${ i + 1 }.`;
    return {
      value: task.id,
      name: `${ idx.toString().green } ${ task.description }`,
      checked: (task.complete) ? true : false
    }
  });

  const question = [{
    type: 'checkbox',
    name: 'ids',
    message: 'Selected',
    choices
  }];

  const { ids } = await inquirer.prompt( question );
  return ids;
}

module.exports = {
  showMenu,
  pause,
  readInput,
  showTasksDelete,
  confirm,
  showTasksCheck
}