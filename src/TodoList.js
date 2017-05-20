import React from 'react';

import { observer } from 'mobx-react'


class TodoList extends React.Component {
	render(){
		return (
			<ul>
				{
					this.props.todoStore.todos.map((todoItem, index) => {
						return <li key={index}>{todoItem} 
								<button onClick={() => {
									this.props.todoStore.removeTodo(index)
								}}>Delete Todo</button>
					    </li>
					})
				}
			</ul>
			)
	}
}

export default observer(TodoList)