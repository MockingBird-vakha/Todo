import {action, makeObservable, observable} from 'mobx';

class Store {
  allTask = [];
  constructor() {
    makeObservable(this, {
      allTask: observable,
      input: action.bound
    })
  }
  input = (inp) => {
    let allTask = this.allTask
    console.log(allTask)
    return allTask.push({id: allTask.length, title: inp})
  }
  delete = (id) => {
    let allTask = this.allTask
    for (let i = 0; i < allTask.length; i++) {
      if(allTask[i].id === id)
        allTask.splice(i,1)
    }
    return console.log(allTask)
  }
}

export default new Store()