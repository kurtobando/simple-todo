import React from 'react'
import TodoItem from './TodoItem'



class TodoList extends React.Component {

	render() {
		// render earch object inside the todoList array
		let renderTodoList = this.props.todoList.map(( listofToDoObj ) => {
			return(
				<TodoItem 
					listofToDoObj={ listofToDoObj }
					key={ listofToDoObj.key }
					onChange={ this.props.onChange } 
					onClick={ this.props.onClick } 
				/>
			)
		})
		
		// render all <li> tags inside the renderTodoList array
		return(
			<ul className="TodoApp__list">
				{ renderTodoList }
			</ul>
		)
	}
}



export default TodoList