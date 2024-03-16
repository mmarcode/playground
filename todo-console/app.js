require('colors');
const Tasks = require('./models/tasks');
const {
  showMenu,
  pause,
  readInput,
  showTasksDelete,
  confirm,
  showTasksCheck
} = require('./helpers/inquirer');
const {
  saveInformation,
  readInformation
} = require('./helpers/service');

const init = async() => {
  let option = '';
  const tasks = new Tasks();
  const fileInformation = readInformation();

  if( fileInformation )
    tasks.uploadTask( fileInformation );

  do {
    option = await showMenu();

    switch( option ) {
      case '1':
        const description = await readInput( 'Description:' );
        tasks.createTask( description );
        break;
      case '2':
        tasks.listAllTasks();
        break;
      case '3':
        tasks.listTasks();
        break;
      case '4':
        tasks.listTasks( false );
        break;
      case '5':
        const ids = await showTasksCheck( tasks.getList );
        tasks.toggleCompleted( ids );
        break;
      case '6':
        const id = await showTasksDelete( tasks.getList );
        if( id !== '0' ) {
          const notice = await confirm( "You're sure?" );
          if( notice )
            tasks.deleteTask( id );
            console.log( '¡Deleted task!' );
        }
        break;
    }

    saveInformation( tasks.getList );

    if( option !== '0' )
      await pause();

  } while( option !== '0' );
}

init();