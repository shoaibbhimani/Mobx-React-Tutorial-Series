import { extendObservable, action } from 'mobx';
import remotedev from 'mobx-remotedev/lib'

class Todos  {
	constructor(){
	  extendObservable(this,{
	  	todos:[],
	  	get getTodos(){
	  		return this.todos;
	  	},
	  	addTodo:action((newTodo) => {
	  		this.todos = this.todos.concat(newTodo)
	  	})
	  })
	}
}

export default remotedev(new Todos());