import React from 'react'
import ToDoItem from './ToDoItem'


class TodoList extends React.Component {

	render() {
		// render earch object inside the todoList array
		let renderTodoList = this.props.todoList.map(( listofToDoObj ) => {
			return(
				<ToDoItem 
					listofToDoObj={ listofToDoObj }
					key={ listofToDoObj.key }
					onChange={ this.props.onChange } 
					onClick={ this.props.onClick } 
				/>
			)
		})
		
		// render all <li> tags inside the renderTodoList array
		return(
			<ul>
				{ renderTodoList }
			</ul>
		)
	}
}



export default TodoList