const Task = require("./task");
require('colors');

class Tasks {
  _list = {};

  get getList() {
    const list = [];

    Object.keys( this._list ).forEach( key => {
      const task = this._list[key];
      list.push( task );
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  createTask( description = '' ) {
    const task = new Task( description );
    this._list[task.id] = task;
  }

  uploadTask( tasks = [] ) {
    tasks.forEach( key => {
      this._list[key.id] = key;
    });
  }

  deleteTask( id = '' ) {
    if( this._list[id] )
      delete this._list[id];
  }

  listAllTasks() {
    console.log();
    this.getList.forEach(({ id, description, complete }, i) => {
      const idx = `${ i + 1 }.`.green;
      const status = complete ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${ idx } ${ description } :: ${ status }`);
    });
  }

  listTasks( completedTask = true ) {
    console.log();
    let count = 0;
    this.getList.forEach(({ description, complete }, i) => {
      const status = complete ? 'Completada'.green : 'Pendiente'.red;
      if( completedTask ) {
        if( complete ) {
          count += 1;
          console.log(`${ (count + '.').green } ${ description } :: ${ status } :: ${ complete.green }`);
        }
      } else {
        if( !complete ) {
          count += 1;
          console.log(`${ (count + '.').green } ${ description } :: ${ status }`);
        }
      }
    });
  }

  toggleCompleted( ids = [] ) {
    ids.forEach( id => {
      const task = this._list[id];
      if( !task.complete )
        task.complete = new Date().toISOString();
    });

    this.getList.forEach( task => {
      if( !ids.includes(task.id) )
        this._list[task.id].complete = null;
    });
  }
}

module.exports = Tasks;