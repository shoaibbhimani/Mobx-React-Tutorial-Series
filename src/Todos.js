import React from 'react';
import { observer, inject } from 'mobx-react'

class Todos extends React.Component {
	render(){
		return (
			<section>
				<form onSubmit={(e) => {
					e.preventDefault();
					this.props.todoStore.addTodo(this.refs.todo.value)
				}}>
					<input type="text" ref="todo" />
					<button type="submit">Add Todo </button>	
				</form>
			</section>
		)
	}
}

export default inject("todoStore")(observer(Todos));